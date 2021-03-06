import { BaseError } from '../../services/error';
export declare class SchemaRootError extends BaseError {
    constructor(target: Function, msg: string);
}
export declare class SchemaFieldError extends BaseError {
    constructor(target: Function, fieldName: string, msg: string);
}
