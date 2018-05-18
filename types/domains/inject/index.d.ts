import { InjectorResolver } from './registry';
export { injectorRegistry, InjectorsIndex, InjectorResolver, InjectorResolverData } from './registry';
export declare function Inject(resolver: InjectorResolver): ParameterDecorator;
export declare const Context: ParameterDecorator;
export declare const Info: ParameterDecorator;
export declare const Source: ParameterDecorator;
