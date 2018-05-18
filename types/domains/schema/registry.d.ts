import { GraphQLFieldConfig } from 'graphql';
import { DeepWeakMap } from '../../services/utils';
export declare type Getter<Result> = () => Result;
export interface SchemaRootConfig {
}
export declare const schemaRootsRegistry: WeakMap<Function, SchemaRootConfig>;
export declare type RootFieldsRegistry = DeepWeakMap<Function, Getter<GraphQLFieldConfig<any, any>>>;
export declare type FieldRegistry = DeepWeakMap<Function, Getter<GraphQLFieldConfig<any, any>>>;
export declare const queryFieldsRegistry: FieldRegistry;
export declare const mutationFieldsRegistry: FieldRegistry;
