import { HookExecutor } from './registry';
export { fieldAfterHooksRegistry, fieldBeforeHooksRegistry, HookExecutor } from './registry';
export { HookError } from './error';
export declare function Before(hook: HookExecutor): PropertyDecorator;
export declare function After(hook: HookExecutor): PropertyDecorator;
