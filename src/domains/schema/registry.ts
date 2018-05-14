import { GraphQLFieldConfig } from 'graphql';
import { DeepWeakMap } from 'services/utils';

export type Getter<Result> = () => Result;

export interface SchemaRootConfig {}

export const schemaRootsRegistry = new WeakMap<Function, SchemaRootConfig>();

export type RootFieldsRegistry = DeepWeakMap<
  Function,
  Getter<GraphQLFieldConfig<any, any>>
>;

export type FieldRegistry = DeepWeakMap<Function, Getter<GraphQLFieldConfig<any, any>>>;

export const queryFieldsRegistry: FieldRegistry = new DeepWeakMap();
export const mutationFieldsRegistry: FieldRegistry = new DeepWeakMap();
