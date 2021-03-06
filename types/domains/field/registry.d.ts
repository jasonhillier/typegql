import { DeepWeakMap } from '../../services/utils';
export interface AllRegisteredFields {
    [fieldName: string]: FieldInnerConfig;
}
export declare const fieldsRegistry: DeepWeakMap<Function, FieldInnerConfig, AllRegisteredFields>;
export interface FieldInnerConfig {
    name: string;
    property: string;
    description?: string;
    isNullable?: boolean;
    type?: any;
}
export interface AllQueryFields {
    [fieldName: string]: FieldInnerConfig;
}
export declare const queryFieldsRegistry: DeepWeakMap<Function, FieldInnerConfig, AllQueryFields>;
