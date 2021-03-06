import { GraphQLObjectType } from 'graphql';
export interface TypeOptions {
    name: string;
    description?: string;
}
export declare function compileObjectTypeWithConfig(target: Function, config: TypeOptions): GraphQLObjectType;
export declare function compileObjectType(target: Function): GraphQLObjectType;
