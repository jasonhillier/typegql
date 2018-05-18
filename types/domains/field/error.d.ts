import { BaseError } from '../../services/error';
export declare class FieldError extends BaseError {
    constructor(target: Function, fieldName: string, msg: string);
}
