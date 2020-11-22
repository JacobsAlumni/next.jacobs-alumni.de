import { getRoles, BoardRole } from "alumni-board-state-model/src/roles";
import { PersonData } from "alumni-board-state-model/src/events";


export const englishNames: Readonly<Record<BoardRole, string>> = Object.freeze({
    [BoardRole.President]: "President",
    [BoardRole.VicePresident]: "Vice President",
    [BoardRole.Secretary]: "Secretary",
    [BoardRole.Treasurer]: "Treasurer",

    [BoardRole.AssessorEventManagement]: "Event Management",
    [BoardRole.AssessorFundraising]: "Fundraising",
    [BoardRole.AssessorInformationTechnology]: "Information Technology",
    [BoardRole.AssessorMemberManagement]: "Member Management",
    [BoardRole.AssessorNetworkDevelopment]: "Network Development",
    [BoardRole.AssessorPublicRelations]: "Public Relations",
    [BoardRole.AssessorSpecialProjects]: "Special Projects",
});

export const germanNames: Readonly<Record<BoardRole, string>> = Object.freeze({
    [BoardRole.President]: "Präsident",
    [BoardRole.VicePresident]: "Vizepräsident",
    [BoardRole.Secretary]: "Schatzmeister",
    [BoardRole.Treasurer]: "Schriftführer",

    [BoardRole.AssessorEventManagement]: "Event-Management",
    [BoardRole.AssessorFundraising]: "Spendensammlung",
    [BoardRole.AssessorInformationTechnology]: "IT",
    [BoardRole.AssessorMemberManagement]: "Mitgliederverwaltung",
    [BoardRole.AssessorNetworkDevelopment]: "Netzwerkentwicklung",
    [BoardRole.AssessorPublicRelations]: "Öffentlichkeitsarbeit",
    [BoardRole.AssessorSpecialProjects]: "Spezielle Projekte",
});

export interface Person extends PersonData {
    role: string,
}

export interface BoardMember extends PersonData {
    role: BoardRole; // machine-readable descroption
}

export function BoardMemberToPerson(member: BoardMember): Person {
    const role = englishNames[member.role];
    return {...member, role};
}

export interface Advisor extends PersonData {}

export interface FormerBoardMember {
    name: string;
    roles: Array<{role: BoardRole, from: TimePoint, to: TimePoint}>
}

export type TimePoint = Date;

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/* formats a time-point in human readable form */
export function formatTimePoint(point: TimePoint): React.ReactNode {
    return `${monthNames[point.getMonth()]} ${point.getFullYear()}`;
}
