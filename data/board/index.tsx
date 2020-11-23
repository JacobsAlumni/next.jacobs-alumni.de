import advisors from "./advisors.json";
import { Advisor, BoardMember, FormerBoardMember, TimePoint } from "./model";
import reduce, {getTimePoints as getStatePoints, reality} from "alumni-board-state-model";
import { State } from "alumni-board-state-model/dist/state";
import { BoardRole } from "alumni-board-state-model/dist/roles";

function getStateAt(point: TimePoint): State {
    return reduce(reality.default, undefined, point);
}

/* gets the composition of the board at a given point */
export async function getCompositionAt(point: TimePoint): Promise<Array<BoardMember>> {
    const {board, persons} = getStateAt(point);
    return board.map(({person, role}) => ({...persons[person], role}));
}

/* gets the advisors at a specific point in time */
export async function getAdvisorsAt(point: TimePoint): Promise<Array<Advisor>> {
    return advisors;
}

/* gets the critical time points at which composition changes ordered descendingly */
export async function getTimePoints(): Promise<Array<TimePoint>> {
    return getStatePoints(reality.default);
}

/* gets the advisors at a specific point in time */
export async function getFormerMembersAt(point: TimePoint): Promise<Array<FormerBoardMember>> {
    return []; // TODO: Unimplemented
}

/* given a composition gets a specific role or undefined if not used */
export function getMemberWithRole(composition: Array<BoardMember>, role: BoardRole): BoardMember | undefined {
    return composition.find(m => m.role === role);
}

