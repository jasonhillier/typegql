export { FieldInnerConfig, fieldsRegistry, queryFieldsRegistry } from './registry';
export { compileAllFields, compileFieldConfig } from './compiler';
export { isQueryField } from './services';
export { FieldError } from './error';
export interface FieldOptions {
    description?: string;
    type?: any;
    name?: string;
    isNullable?: boolean;
}
export declare function Field(options?: FieldOptions): PropertyDecorator;
