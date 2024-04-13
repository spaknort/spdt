import { IUserDefaultState } from "../../../store/lib/IUserDefaultState";
import { UserActionTypes } from "../../enum/actions/userActionTypes";

export interface UserAction extends IUserDefaultState {
    type: UserActionTypes
}