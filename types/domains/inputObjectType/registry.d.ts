import { GraphQLInputObjectType } from 'graphql';
export declare const inputObjectTypeRegistry: WeakMap<Function, () => GraphQLInputObjectType>;
export interface TypeConfig {
    name: string;
    description: string;
    isNonNull?: boolean;
}
