import { Thunk } from '../../services/types';
export { unionRegistry } from './registry';
import { UnionTypeResolver } from './compiler';
export interface UnionOptions {
    name?: string;
    resolveTypes?: UnionTypeResolver;
    types: Thunk<any[]>;
}
export declare function Union(config: UnionOptions): ClassDecorator;
