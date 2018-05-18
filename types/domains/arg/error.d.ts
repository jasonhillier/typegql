import { BaseError } from '../../services/error';
export declare class ArgError extends BaseError {
    constructor(target: Function, fieldName: string, argIndex: number, msg: string);
}
