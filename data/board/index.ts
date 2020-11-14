import { getRoles, BoardRole } from "./roles";

import members from "./members.json";
const composition = members as BoardComposition;

export type BoardComposition = Array<BoardMember>;

export interface BoardMember {
    name: string;
    role: BoardRole;
    description: string;
    photoUrl?: string;
    meta?: {
        email?: string
        facebook?: string
        instagram?: string
        twitter?: string
        linkedin?: string
        github?: string
    }
}

export function getComposition(): BoardComposition {
    return getRoles().map(role => composition.find(m => m.role === role)).filter(x => x !== undefined);
}

export function getMemberWithRole(composition: BoardComposition, role: BoardRole): BoardMember | undefined {
    return composition.find(m => m.role === role);
}
