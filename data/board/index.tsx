import { getRoles, BoardRole, englishNames } from "./roles";

import members from "./members.json";
const composition = members as Array<BoardMember>;

import advisors from "./advisors.json";

import formers from "./former_members.json";
const formerMembers = formers as Array<FormerBoardMember>;

export interface Person {
    name: string; // Name of the Person
    image?: boolean; // if true, an image should be available in images/people/basename.jpg
    role: string; // human-readable role
    description: string; // description of the person
    meta?: { // optional socials
        email?: string
        facebook?: string
        instagram?: string
        twitter?: string
        linkedin?: string
        github?: string
    }
}

/**
 * Gets the basename for an image of a specific image. 
 * If an image is not available, returns undefined. 
 * 
 * The image can be loaded like require(`.../images/people/${basename}.jpg`). 
 * For technical reasons, the require() site *must* be in the image component or 'src' attribute. 
 */
export function getImageBaseName({image, name}: Person): string | undefined {
    if(!image) return undefined;
    const parts = name.split(/\s/).filter(p => !p.endsWith("."));
    return parts.map(p => p.replace(/[^\x20-\x7E]+/g, '_')).join('_');
}

export interface BoardMember extends Person {
    role: BoardRole; // machine-readable descroption
}

export function BoardMemberToPerson(member: BoardMember): Person {
    const role = englishNames[member.role];
    return {...member, role};
}

export interface Advisor extends Person {}

export interface FormerBoardMember {
    name: string;
    roles: Array<{role: BoardRole, from: number, to: number}>
}

export type TimePoint = string;

/* gets the critical time points at which composition changes ordered descendingly */
export async function getTimePoints(): Promise<Array<TimePoint>> {
    return ["2020"];
}

/* formats a time-point in human readable form */
export function formatTimePoint(point: TimePoint): React.ReactNode {
    return point;
}

/* gets the composition of the board at a given point */
export async function getCompositionAt(point: TimePoint): Promise<Array<BoardMember>> {
    // TODO: Generate these dynamically
    return getRoles().map(role => composition.find(m => m.role === role)).filter(x => x !== undefined).map(x => x!);
}

/* gets the advisors at a specific point in time */
export async function getAdvisorsAt(point: TimePoint): Promise<Array<Advisor>> {
    return advisors.slice(); // TODO: Generate these dynamically
}

/* gets the advisors at a specific point in time */
export async function getFormerMembersAt(point: TimePoint): Promise<Array<FormerBoardMember>> {
    return formerMembers.slice(); // TODO: Generate these dynamically
}

/* given a composition gets a specific role or undefined if not used */
export function getMemberWithRole(composition: Array<BoardMember>, role: BoardRole): BoardMember | undefined {
    return composition.find(m => m.role === role);
}

