import { BaseError } from '../../services/error';
export declare class InputFieldError extends BaseError {
    constructor(target: Function, fieldName: string, msg: string);
}
