import { BaseError } from '../../services/error';
export declare class InputObjectTypeError extends BaseError {
    constructor(target: Function, msg: string);
}
