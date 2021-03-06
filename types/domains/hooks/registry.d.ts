import { GraphQLResolveInfo } from 'graphql';
import { DeepWeakMap } from '../../services/utils';
export interface HookExecutorResolverArgs {
    source: any;
    args: {
        [argName: string]: any;
    };
    context: any;
    info: GraphQLResolveInfo;
}
export declare type HookExecutor<Result = void> = (data: HookExecutorResolverArgs) => Result | Promise<Result>;
export interface AllRegisteredHooks {
    [fieldName: string]: HookExecutor;
}
export declare const fieldBeforeHooksRegistry: DeepWeakMap<Function, HookExecutor<void>[], AllRegisteredHooks>;
export declare const fieldAfterHooksRegistry: DeepWeakMap<Function, HookExecutor<void>[], AllRegisteredHooks>;
export declare function registerFieldBeforeHook(target: Function, fieldName: string, hook: HookExecutor): void;
export declare function registerFieldAfterHook(target: Function, fieldName: string, hook: HookExecutor): void;
