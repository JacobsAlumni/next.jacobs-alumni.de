// BoardRole represents a role in the board
export enum BoardRole {
    President = 'president',
    VicePresident = 'vice-president',
    Secretary = 'secretary',
    Treasurer = 'treasurer',

    AssessorEventManagement = 'events',
    AssessorFundraising = 'fundraising',
    AssessorInformationTechnology = 'it',
    AssessorMemberManagement = 'member-management',
    AssessorNetworkDevelopment = 'network-development',
    AssessorPublicRelations = 'pr',
    AssessorSpecialProjects = 'special-projects',
}

const allRoles = [
    BoardRole.President,
    BoardRole.VicePresident,
    BoardRole.Secretary,
    BoardRole.Treasurer,

    BoardRole.AssessorEventManagement,
    BoardRole.AssessorFundraising,
    BoardRole.AssessorInformationTechnology,
    BoardRole.AssessorMemberManagement,
    BoardRole.AssessorNetworkDevelopment,
    BoardRole.AssessorPublicRelations,
    BoardRole.AssessorSpecialProjects,
]

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

/** Gets an semantically meanigful list of roles on the board */
export function getRoles(): Array<BoardRole> {
    return allRoles.slice(); // slice() to prevent accidental mutation of the array!
}

/** Checks if a role is regular, i.e. not an assessor */
export function isRegular(role: BoardRole): boolean {
    return allRoles.indexOf(role) <= 3;
}

/** Checks if a role is an assessor role */
export function isAssessor(role: BoardRole): boolean {
    return allRoles.indexOf(role) >= 4;
}
