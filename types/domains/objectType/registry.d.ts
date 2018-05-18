import { GraphQLInputType, GraphQLObjectType } from 'graphql';
export declare const objectTypeRegistry: WeakMap<Function, () => GraphQLObjectType>;
export declare const inputTypeRegistry: WeakMap<Function, () => GraphQLInputType>;
export interface TypeConfig {
    name: string;
    description: string;
    isNonNull?: boolean;
}
