import { UploadFileActionTypes } from "../../enum/actions/uploadFileActionTypes";
import { IParsedFile } from "../IParsedFile";

export interface UploadFileAction {
    type: UploadFileActionTypes,
    name: string,
    data: Array<IParsedFile>
}