import { BaseError } from '../../services/error';
export declare class HookError extends BaseError {
    constructor(target: Function, fieldName: string, msg: string);
}
