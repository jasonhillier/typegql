import { BaseError } from '../../services/error';
export declare class UnionError extends BaseError {
    constructor(target: Function, msg: string);
}
