import { GraphQLUnionType, GraphQLResolveInfo } from 'graphql';
import { Thunk } from '../../services/types';
export interface UnionTypeResolver {
    (value: any, context: any, info: GraphQLResolveInfo): any;
}
export interface UnionOptions {
    types: Thunk<any[]>;
    name: string;
    resolveTypes?: UnionTypeResolver;
}
export declare function compileUnionType(target: Function, config: UnionOptions): GraphQLUnionType;
