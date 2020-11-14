import { getRoles, BoardRole, englishNames } from "./roles";

import members from "./members.json";
const composition = members as BoardComposition;

import advisors from "./advisors.json";

import formers from "./former_members.json";
const formerMembers = formers as Array<FormerBoardMember>;


export type BoardComposition = Array<BoardMember>;

export interface Person {
    name: string;
    role: string;
    description: string;
    meta?: {
        email?: string
        facebook?: string
        instagram?: string
        twitter?: string
        linkedin?: string
        github?: string
    }
}

export interface BoardMember extends Person {
    role: BoardRole;
}

export interface FormerBoardMember {
    name: string;
    roles: Array<{role: BoardRole, from: number, to: number}>
}

export function getComposition(): BoardComposition {
    return getRoles().map(role => composition.find(m => m.role === role)).filter(x => x !== undefined).map(x => x!);
}

export function getAdvisors(): Array<Person> {
    return advisors.slice();
}

export function getFormerMembers(): Array<FormerBoardMember> {
    return formerMembers.slice();
}

export function getMemberWithRole(composition: BoardComposition, role: BoardRole): BoardMember | undefined {
    return composition.find(m => m.role === role);
}

export function MemberToPerson(member: BoardMember): Person {
    const role = englishNames[member.role];
    return {...member, role};
}