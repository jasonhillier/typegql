import { BaseError } from '../../services/error';
export declare class EnumError extends BaseError {
    constructor(name: string, msg: string);
}
