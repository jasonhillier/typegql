import { GraphQLFieldConfig, GraphQLFieldConfigMap } from 'graphql';
export declare function compileFieldConfig(target: Function, fieldName: string): GraphQLFieldConfig<any, any, any>;
export declare function compileAllFields(target: Function): GraphQLFieldConfigMap<any, any>;
