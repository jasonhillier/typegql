export { schemaRootsRegistry, mutationFieldsRegistry, queryFieldsRegistry } from './registry';
import { SchemaRootConfig } from './registry';
export { compileSchema } from './compiler';
export { Query, Mutation } from './rootFields';
export declare function SchemaRoot(config?: SchemaRootConfig): ClassDecorator;
export declare function Schema(config?: SchemaRootConfig): ClassDecorator;
