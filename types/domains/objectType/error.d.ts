import { BaseError } from '../../services/error';
export declare class ObjectTypeError extends BaseError {
    constructor(target: Function, msg: string);
}
