import { GraphQLType } from 'graphql';
import { Thunk } from '../../../types';
export declare function resolveType(input: any, allowThunk?: boolean): GraphQLType;
export declare function resolveTypesList(types: Thunk<any[]>): GraphQLType[];
