
import path from 'path';
import YAML from 'yaml';

export interface DataCollectionFile<T> extends DataFile<T> {
    filename: string;
}

interface DataFile<T> {
    preamble: T,
    content: string,
}

export default async function readAllFromPath<T = any>(...paths: string[]): Promise<Array<DataCollectionFile<T>>> {
    const fs = await import("fs");
    const base = paths.reduce((a, b) => path.join(a, b), process.cwd());
    const files = fs.readdirSync(base);
    return files.map((filename) => {
        const filePath = path.join(base, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const {preamble, content} = parseWithString<T>(fileContents);
        return {preamble, content, filename};
    });
}

function parseWithString<T = any>(source: string): DataFile<T> {
    const {preamble, content} = splitPreamble(source);
    return {
        preamble: YAML.parse(preamble) as T,
        content
    };
}

const preambleSeperator = "---";
/** splitPreamble splits a string into a preamble and an actual content */
function splitPreamble(source: string): DataFile<string> {
    
    // make sure that the first line is indeed the seperator
    const lines = source.split("\n").map(l => l.trim());
    if (lines.length < 2 || lines[0] !== preambleSeperator) {
        return {preamble: "", content: source}; 
    }

    // find the second seperator
    const index = lines.slice(1).indexOf(preambleSeperator);
    if(index == -1) {
        return {preamble: "", content: source};
    }
    
    // split lines accordingly
    const preamble = lines.slice(1, index + 1).join("\n");
    const content = lines.slice(index + 2).join("\n").trim();
    return {preamble, content};
}