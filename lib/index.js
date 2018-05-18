'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var objectPath = require('object-path');
var graphql = require('graphql');
require('reflect-metadata');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var cache = new WeakMap();
function createCachedThunk(thunk) {
    return function () {
        if (cache.has(thunk)) {
            return cache.get(thunk);
        }
        var result = thunk();
        cache.set(thunk, result);
        return result;
    };
}

var COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
var DEFAULT_PARAMS = /=[^,]+/gm;
var FAT_ARROWS = /=>.*$/gm;
function getParameterNames(fn) {
    var code = fn
        .toString()
        .replace(COMMENTS, '')
        .replace(FAT_ARROWS, '')
        .replace(DEFAULT_PARAMS, '');
    var result = code.slice(code.indexOf('(') + 1, code.indexOf(')')).match(/([^\s,]+)/g);
    return result === null ? [] : result;
}

function getClassWithAllParentClasses(target) {
    var result = [target];
    var currentNode = target;
    while (Object.getPrototypeOf(currentNode)) {
        var parent = Object.getPrototypeOf(target);
        if (parent === currentNode)
            break;
        result.push(parent);
        currentNode = parent;
    }
    return result.reverse(); // reverse so we go from parents to children
}

function flattenPaths(paths) {
    return paths.reduce(function (accumulatedPath, nextPath) {
        if (Array.isArray(nextPath)) {
            return accumulatedPath.concat(nextPath.map(function (pathPart) { return "" + pathPart; }));
        }
        return accumulatedPath.concat(["" + nextPath]);
    }, []);
}
var DeepWeakMap = /** @class */ (function () {
    function DeepWeakMap() {
        this.map = new WeakMap();
    }
    DeepWeakMap.prototype.isEmpty = function (target) {
        return !Object.keys(this.getAll(target)).length;
    };
    DeepWeakMap.prototype.getAll = function (target) {
        var map = this.map;
        if (!map.has(target)) {
            map.set(target, {});
        }
        return map.get(target);
    };
    DeepWeakMap.prototype.set = function (target, path, value) {
        objectPath.set(this.getAll(target), path, value);
    };
    DeepWeakMap.prototype.get = function (target) {
        var paths = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            paths[_i - 1] = arguments[_i];
        }
        var path = flattenPaths(paths);
        return objectPath.get(this.getAll(target), path);
    };
    DeepWeakMap.prototype.has = function (target) {
        var paths = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            paths[_i - 1] = arguments[_i];
        }
        var path = flattenPaths(paths);
        return !!this.get(target, path);
    };
    return DeepWeakMap;
}());

function isParsableScalar(input) {
    return [String, Number, Boolean].includes(input);
}
function parseNativeTypeToGraphQL(input) {
    if (input === String) {
        return graphql.GraphQLString;
    }
    if (input === Number) {
        return graphql.GraphQLFloat;
    }
    if (input === Boolean) {
        return graphql.GraphQLBoolean;
    }
}
// type MetadataType = 'design:returntype' | 'design:type' | 'design:paramtypes';
function inferTypeByTarget(target, key) {
    if (!key) {
        return Reflect.getMetadata('design:type', target);
    }
    var returnType = Reflect.getMetadata('design:returntype', target, key);
    if (returnType) {
        return returnType;
    }
    var targetField = target[key];
    if (targetField && typeof targetField === 'function') {
        return Reflect.getMetadata('design:returntype', target, key);
    }
    return Reflect.getMetadata('design:type', target, key);
}

function resolveType(input, allowThunk) {
    if (allowThunk === void 0) { allowThunk = true; }
    if (graphql.isType(input)) {
        return input;
    }
    if (isParsableScalar(input)) {
        return parseNativeTypeToGraphQL(input);
    }
    if (Array.isArray(input)) {
        return resolveListType(input);
    }
    if (enumsRegistry.has(input)) {
        return enumsRegistry.get(input);
    }
    if (unionRegistry.has(input)) {
        return unionRegistry.get(input)();
    }
    if (objectTypeRegistry.has(input)) {
        return compileObjectType$$1(input);
    }
    if (inputObjectTypeRegistry.has(input)) {
        return compileInputObjectType$$1(input);
    }
    if (input === Promise) {
        return;
    }
    if (!allowThunk || typeof input !== 'function') {
        return;
    }
    return resolveType(input(), false);
}
function resolveListType(input) {
    if (input.length !== 1) {
        return;
    }
    var itemType = input[0];
    var resolvedItemType = resolveType(itemType);
    if (!resolvedItemType) {
        return;
    }
    return new graphql.GraphQLList(new graphql.GraphQLNonNull(resolvedItemType));
}
function resolveTypesList(types) {
    if (Array.isArray(types)) {
        return types.map(function (type) {
            return resolveType(type);
        });
    }
    return types().map(function (type) {
        return resolveType(type);
    });
}

function isObjectType(input) {
    return typeof input.getFields === 'function'; // TODO: More precise
}

var shownRegistry = new WeakMap();
function showDeprecationWarning(message, uniqueIdentifier, callback) {
    if (uniqueIdentifier && shownRegistry.has(uniqueIdentifier)) {
        return;
    }
    if (uniqueIdentifier) {
        shownRegistry.set(uniqueIdentifier, true);
    }
    console.warn("@Deprecation warning: " + message);
    if (callback) {
        callback(message);
    }
}

var fieldsRegistry = new DeepWeakMap();

var injectorRegistry = new DeepWeakMap();

function Inject(resolver) {
    return function (target, fieldName, argIndex) {
        injectorRegistry.set(target.constructor, [fieldName, argIndex], resolver);
    };
}
var Context = Inject(function (_a) {
    var context = _a.context;
    return context;
});
var Info = Inject(function (_a) {
    var info = _a.info;
    return info;
});
var Source = Inject(function (_a) {
    var source = _a.source;
    return source;
});

var BaseError = /** @class */ (function (_super) {
    __extends(BaseError, _super);
    function BaseError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BaseError;
}(Error));

var HookError = /** @class */ (function (_super) {
    __extends(HookError, _super);
    function HookError(target, fieldName, msg) {
        var _this = this;
        var fullMsg = "@HookError " + target.name + "." + fieldName + ": " + msg;
        _this = _super.call(this, fullMsg) || this;
        _this.message = fullMsg;
        return _this;
    }
    return HookError;
}(BaseError));

var fieldBeforeHooksRegistry = new DeepWeakMap();
var fieldAfterHooksRegistry = new DeepWeakMap();
function registerFieldBeforeHook(target, fieldName, hook) {
    if (!hook) {
        throw new HookError(target, fieldName, "Field @Before hook function must be supplied.");
    }
    var currentHooks = fieldBeforeHooksRegistry.get(target, fieldName) || [];
    fieldBeforeHooksRegistry.set(target, fieldName, [hook].concat(currentHooks));
}
function registerFieldAfterHook(target, fieldName, hook) {
    if (!hook) {
        throw new HookError(target, fieldName, "Field @After hook function must be supplied.");
    }
    var currentHooks = fieldAfterHooksRegistry.get(target, fieldName) || [];
    fieldAfterHooksRegistry.set(target, fieldName, [hook].concat(currentHooks));
}

function Before(hook) {
    return function (targetInstance, fieldName) {
        registerFieldBeforeHook(targetInstance.constructor, fieldName, hook);
    };
}
function After(hook) {
    return function (targetInstance, fieldName) {
        registerFieldAfterHook(targetInstance.constructor, fieldName, hook);
    };
}

function performHooksExecution(instance, hooks, source, args, context, info) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!hooks) {
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, Promise.all(hooks.map(function (hook) {
                            return hook.call(instance, { source: source, args: args, context: context, info: info });
                        }))];
                case 1: 
                // all hooks are executed in parrell instead of sequence. We wait for them all to be resolved before we continue
                return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function computeFinalArgs(func, _a) {
    var args = _a.args, injectors = _a.injectors, injectorToValueMapper = _a.injectorToValueMapper;
    var paramNames = getParameterNames(func);
    return paramNames.map(function (paramName, index) {
        if (args && args[paramName]) {
            return args[paramName];
        }
        var injector = injectors[index];
        if (!injector) {
            return null;
        }
        return injectorToValueMapper(injector);
    });
}
function compileFieldResolver(target, fieldName) {
    var _this = this;
    // const config = fieldsRegistry.get(target, fieldName);
    var injectors = injectorRegistry.getAll(target)[fieldName];
    var beforeHooks = fieldBeforeHooksRegistry.get(target, fieldName);
    var afterHooks = fieldAfterHooksRegistry.get(target, fieldName);
    return function (source, args, context, info) {
        if (args === void 0) { args = null; }
        if (context === void 0) { context = null; }
        if (info === void 0) { info = null; }
        return __awaiter(_this, void 0, void 0, function () {
            var instance, instanceField, instanceFieldFunc, params, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (source && source[fieldName]) {
                            instance = source;
                            instanceField = source[fieldName];
                        }
                        else if (target.prototype[fieldName]) {
                            instance = new target;
                            instanceField = target.prototype[fieldName];
                        }
                        return [4 /*yield*/, performHooksExecution(instance, beforeHooks, source, args, context, info)];
                    case 1:
                        _a.sent();
                        if (!(typeof instanceField !== 'function')) return [3 /*break*/, 3];
                        return [4 /*yield*/, performHooksExecution(instance, afterHooks, source, args, context, info)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, instanceField];
                    case 3:
                        instanceFieldFunc = instanceField;
                        params = computeFinalArgs(instanceFieldFunc, {
                            args: args || {},
                            injectors: injectors || {},
                            injectorToValueMapper: function (injector) {
                                return injector.apply(source, [{ source: source, args: args, context: context, info: info }]);
                            },
                        });
                        return [4 /*yield*/, instanceFieldFunc.apply(instance, params)];
                    case 4:
                        result = _a.sent();
                        return [4 /*yield*/, performHooksExecution(instance, afterHooks, source, args, context, info)];
                    case 5:
                        _a.sent(); // TODO: Consider adding resolve return to hook callback
                        return [2 /*return*/, result];
                }
            });
        });
    };
}

var argRegistry = new DeepWeakMap();

var ArgError = /** @class */ (function (_super) {
    __extends(ArgError, _super);
    function ArgError(target, fieldName, argIndex, msg) {
        var _this = this;
        var paramNames = getParameterNames(target.prototype[fieldName]);
        var paramName = paramNames[argIndex];
        var fullMsg = "@Type " + target.name + "." + fieldName + "(" + paramName + " <-------): " + msg;
        _this = _super.call(this, fullMsg) || this;
        _this.message = fullMsg;
        return _this;
    }
    return ArgError;
}(BaseError));

var defaultArgOptions = {
    isNullable: false,
};

function compileInferedAndRegisterdArgs(infered, registeredArgs) {
    if (registeredArgs === void 0) { registeredArgs = {}; }
    var argsMerged = infered.map(function (inferedType, index) {
        var registered = registeredArgs[index];
        if (registered && registered.type) {
            return registered.type;
        }
        return inferedType;
    });
    var resolvedArgs = argsMerged.map(function (rawType, index) {
        return resolveType(rawType);
    });
    return resolvedArgs;
}
function validateArgs(target, fieldName, types) {
    types.forEach(function (argType, argIndex) {
        var isInjectedArg = injectorRegistry.has(target, fieldName, argIndex);
        if (!isInjectedArg && !argType) {
            throw new ArgError(target, fieldName, argIndex, "Could not infer type of argument. Make sure to use native GraphQLInputType, native scalar like 'String' or class decorated with @InputObjectType");
        }
        if (!isInjectedArg && !graphql.isInputType(argType)) {
            throw new ArgError(target, fieldName, argIndex, "Argument has incorrect type. Make sure to use native GraphQLInputType, native scalar like 'String' or class decorated with @InputObjectType");
        }
        if (isInjectedArg && argRegistry.has(target, fieldName, argIndex)) {
            throw new ArgError(target, fieldName, argIndex, "Argument cannot be marked wiht both @Arg and @Inject or custom injector");
        }
    });
    return true;
}
function enhanceType(originalType, isNullable) {
    var finalType = originalType;
    if (!isNullable) {
        finalType = new graphql.GraphQLNonNull(finalType);
    }
    return finalType;
}
function convertArgsArrayToArgsMap(target, fieldName, argsTypes, registeredArgs) {
    if (registeredArgs === void 0) { registeredArgs = {}; }
    var functionDefinition = target.prototype[fieldName];
    var argNames = getParameterNames(functionDefinition);
    if (!argNames || !argNames.length) {
        return {};
    }
    var argsMap = {};
    argNames.forEach(function (argName, index) {
        var argConfig = registeredArgs[index] || __assign({}, defaultArgOptions);
        var argType = argsTypes[index];
        // don't publish args marked as auto Injected
        if (injectorRegistry.has(target, fieldName, index)) {
            return;
        }
        var finalType = enhanceType(argType, argConfig.isNullable);
        argsMap[argName] = {
            type: finalType,
            description: argConfig.description,
        };
    });
    return argsMap;
}
function compileFieldArgs(target, fieldName) {
    var registeredArgs = argRegistry.getAll(target)[fieldName];
    var inferedRawArgs = Reflect.getMetadata('design:paramtypes', target.prototype, fieldName);
    // There are no arguments
    if (!inferedRawArgs) {
        return {};
    }
    var argTypes = compileInferedAndRegisterdArgs(inferedRawArgs, registeredArgs);
    if (!validateArgs(target, fieldName, argTypes)) {
        return;
    }
    return convertArgsArrayToArgsMap(target, fieldName, argTypes, registeredArgs);
}

function Arg(options) {
    if (options === void 0) { options = {}; }
    return function (target, fieldName, argIndex) {
        argRegistry.set(target.constructor, [fieldName, argIndex], __assign({}, defaultArgOptions, options));
    };
}

function resolveTypeOrThrow(type, target, fieldName) {
    var resolvedType = resolveType(type);
    if (!resolvedType) {
        throw new FieldError(target, fieldName, "Forced type is incorrect. Make sure to use either native graphql type or class that is registered with @Type decorator");
    }
    return resolvedType;
}
function inferTypeOrThrow(target, fieldName) {
    var inferedType = inferTypeByTarget(target.prototype, fieldName);
    if (!inferedType) {
        throw new FieldError(target, fieldName, "Could not infer return type and no type is forced. In case of circular dependencies make sure to force types of instead of infering them.");
    }
    return resolveType(inferedType);
}
function validateNotInferableField(target, fieldName) {
    var inferedType = inferTypeByTarget(target.prototype, fieldName);
    if (inferedType === Array) {
        throw new FieldError(target, fieldName, "Field returns list so it's required to explicitly set list item type. You can set list type like: @Field({ type: [ItemType] })");
    }
    if (inferedType === Promise) {
        throw new FieldError(target, fieldName, "Field returns Promise so it's required to explicitly set resolved type as it's not possible to guess it. You can set resolved type like: @Field({ type: ItemType })");
    }
    return true;
}

var schemaRootsRegistry = new WeakMap();
var queryFieldsRegistry$1 = new DeepWeakMap();
var mutationFieldsRegistry = new DeepWeakMap();

var SchemaRootError = /** @class */ (function (_super) {
    __extends(SchemaRootError, _super);
    function SchemaRootError(target, msg) {
        var _this = this;
        var fullMsg = "@Schema " + target.name + ": " + msg;
        _this = _super.call(this, fullMsg) || this;
        _this.message = fullMsg;
        return _this;
    }
    return SchemaRootError;
}(BaseError));
var SchemaFieldError = /** @class */ (function (_super) {
    __extends(SchemaFieldError, _super);
    function SchemaFieldError(target, fieldName, msg) {
        var _this = this;
        var fullMsg = "@Schema " + target.name + "." + fieldName + ": " + msg;
        _this = _super.call(this, fullMsg) || this;
        _this.message = fullMsg;
        return _this;
    }
    return SchemaFieldError;
}(BaseError));

function validateSchemaRoots(roots) {
    for (var _i = 0, roots_1 = roots; _i < roots_1.length; _i++) {
        var root = roots_1[_i];
        if (!schemaRootsRegistry.has(root)) {
            throw new SchemaRootError(root, "Schema root must be registered with @SchemaRoot");
        }
    }
}
function getAllRootFieldsFromRegistry(roots, registry, name) {
    var allRootFields = {};
    var _loop_1 = function (root) {
        var rootFields = registry.getAll(root);
        Object.keys(rootFields).forEach(function (fieldName) {
            var fieldConfigGetter = rootFields[fieldName];
            var fieldConfig = fieldConfigGetter();
            // throw error if root field with this name is already registered
            if (!!allRootFields[fieldName]) {
                throw new SchemaRootError(root, "Duplicate of root field name: '" + fieldName + "'. Seems this name is also used inside other schema root.");
            }
            allRootFields[fieldName] = fieldConfig;
        });
    };
    for (var _i = 0, roots_2 = roots; _i < roots_2.length; _i++) {
        var root = roots_2[_i];
        _loop_1(root);
    }
    var isEmpty = Object.keys(allRootFields).length < 1;
    if (isEmpty) {
        return null;
    }
    return new graphql.GraphQLObjectType({
        name: name,
        fields: allRootFields,
    });
}
function compileSchema(config) {
    var roots = typeof config === 'function' ? [config] : config.roots;
    if (typeof config === 'function') {
        showDeprecationWarning("Passing schema root to compileSchema is deprecated. Use config object with 'roots' field. compileSchema(SchemaRoot) --> compileSchema({ roots: [SchemaRoot] })", config);
    }
    validateSchemaRoots(roots);
    var query = getAllRootFieldsFromRegistry(roots, queryFieldsRegistry$1, 'Query');
    var mutation = getAllRootFieldsFromRegistry(roots, mutationFieldsRegistry, 'Mutation');
    if (!query) {
        throw new Error('At least one of schema roots must have @Query root field.');
    }
    return new graphql.GraphQLSchema({
        query: query || undefined,
        mutation: mutation || undefined,
    });
}

function validateRootSchemaField(targetInstance, fieldName) {
    if (!targetInstance[fieldName] &&
        !targetInstance.constructor.prototype[fieldName]) {
        throw new SchemaFieldError(targetInstance.constructor, fieldName, "Every root schema field must regular class function");
    }
}
function requireSchemaRoot(target, fieldName) {
    if (schemaRootsRegistry.has(target)) {
        return;
    }
    throw new SchemaFieldError(target, fieldName, "Root field must be registered on class decorated with @Schema");
}
// special fields
function Query(options) {
    return function (targetInstance, fieldName) {
        validateRootSchemaField(targetInstance, fieldName);
        Field(options)(targetInstance, fieldName);
        var fieldCompiler = function () {
            requireSchemaRoot(targetInstance.constructor, fieldName);
            var compiledField = compileFieldConfig$$1(targetInstance.constructor, fieldName);
            compiledField.type;
            return compiledField;
        };
        queryFieldsRegistry$1.set(targetInstance.constructor, fieldName, fieldCompiler);
    };
}
function Mutation(options) {
    return function (targetInstance, fieldName) {
        Field(options)(targetInstance, fieldName);
        var fieldCompiler = function () {
            var compiledField = compileFieldConfig$$1(targetInstance.constructor, fieldName);
            compiledField.type;
            return compiledField;
        };
        mutationFieldsRegistry.set(targetInstance.constructor, fieldName, fieldCompiler);
    };
}

function SchemaRoot(config) {
    if (config === void 0) { config = {}; }
    return function (target) {
        schemaRootsRegistry.set(target, config);
    };
}
function Schema(config) {
    if (config === void 0) { config = {}; }
    showDeprecationWarning('Use @SchemaRoot instead and compile like: compileSchema({ roots: [RootA, RootB] })', Schema);
    return SchemaRoot(config);
}

function resolveRegisteredOrInferedType(target, fieldName, forcedType) {
    if (forcedType) {
        return resolveTypeOrThrow(forcedType, target, fieldName);
    }
    return inferTypeOrThrow(target, fieldName);
}
function validateResolvedType(target, fieldName, type) {
    if (!graphql.isOutputType(type)) {
        throw new FieldError(target, fieldName, "Validation of type failed. Resolved type for @Field must be GraphQLOutputType.");
    }
    return true;
}
function enhanceType$1(originalType, isNullable) {
    var finalType = originalType;
    if (!isNullable) {
        finalType = new graphql.GraphQLNonNull(finalType);
    }
    return finalType;
}
function isRootFieldOnNonRootBase(base, fieldName) {
    var isRoot = schemaRootsRegistry.has(base);
    if (isRoot) {
        return false;
    }
    if (mutationFieldsRegistry.has(base, fieldName)) {
        return true;
    }
    if (queryFieldsRegistry$1.has(base, fieldName)) {
        return true;
    }
    return false;
}

function compileFieldConfig$$1(target, fieldName) {
    var _a = fieldsRegistry.get(target, fieldName), type = _a.type, description = _a.description, isNullable = _a.isNullable;
    var args = compileFieldArgs(target, fieldName);
    var resolvedType = resolveRegisteredOrInferedType(target, fieldName, type);
    // if was not able to resolve type, try to show some helpful information about it
    if (!resolvedType && !validateNotInferableField(target, fieldName)) {
        return;
    }
    // show error about being not able to resolve field type
    if (!validateResolvedType(target, fieldName, resolvedType)) {
        validateNotInferableField(target, fieldName);
        return;
    }
    var finalType = enhanceType$1(resolvedType, isNullable);
    return {
        description: description,
        type: finalType,
        resolve: compileFieldResolver(target, fieldName),
        args: args,
    };
}
function getAllFields(target) {
    var fields = fieldsRegistry.getAll(target);
    var finalFieldsMap = {};
    Object.keys(fields).forEach(function (fieldName) {
        if (isRootFieldOnNonRootBase(target, fieldName)) {
            throw new FieldError(target, fieldName, "Given field is root field (@Query or @Mutation) not registered inside @Schema type. ");
        }
        var config = fieldsRegistry.get(target, fieldName);
        finalFieldsMap[config.name] = compileFieldConfig$$1(target, fieldName);
    });
    return finalFieldsMap;
}
function compileAllFields$$1(target) {
    var targetWithParents = getClassWithAllParentClasses(target);
    var finalFieldsMap = {};
    targetWithParents.forEach(function (targetLevel) {
        Object.assign(finalFieldsMap, getAllFields(targetLevel));
    });
    return finalFieldsMap;
}

var FieldError = /** @class */ (function (_super) {
    __extends(FieldError, _super);
    function FieldError(target, fieldName, msg) {
        var _this = this;
        var fullMsg = "@ObjectType " + target.name + "." + fieldName + ": " + msg;
        _this = _super.call(this, fullMsg) || this;
        _this.message = fullMsg;
        return _this;
    }
    return FieldError;
}(BaseError));

function Field(options) {
    return function (targetInstance, fieldName) {
        var finalConfig = __assign({ property: fieldName, name: fieldName, isNullable: true }, options);
        fieldsRegistry.set(targetInstance.constructor, fieldName, __assign({}, finalConfig));
    };
}

var compileOutputTypeCache = new WeakMap();
function createTypeFieldsGetter(target) {
    var targetWithParents = getClassWithAllParentClasses(target);
    var hasFields = targetWithParents.some(function (ancestor) {
        return !fieldsRegistry.isEmpty(ancestor);
    });
    if (!hasFields) {
        throw new ObjectTypeError(target, "There are no fields inside this type.");
    }
    return createCachedThunk(function () {
        return compileAllFields$$1(target);
    });
}
function compileObjectTypeWithConfig(target, config) {
    if (compileOutputTypeCache.has(target)) {
        return compileOutputTypeCache.get(target);
    }
    var compiled = new graphql.GraphQLObjectType(__assign({}, config, { isTypeOf: function (value) { return value instanceof target; }, fields: createTypeFieldsGetter(target) }));
    compileOutputTypeCache.set(target, compiled);
    return compiled;
}
function compileObjectType$$1(target) {
    if (!objectTypeRegistry.has(target)) {
        throw new ObjectTypeError(target, "Class is not registered. Make sure it's decorated with @ObjectType decorator");
    }
    var compiler = objectTypeRegistry.get(target);
    return compiler();
}

var objectTypeRegistry = new WeakMap();

var ObjectTypeError = /** @class */ (function (_super) {
    __extends(ObjectTypeError, _super);
    function ObjectTypeError(target, msg) {
        var _this = this;
        var fullMsg = "@ObjectType '" + target.name + "': " + msg;
        _this = _super.call(this, fullMsg) || this;
        _this.message = fullMsg;
        return _this;
    }
    return ObjectTypeError;
}(BaseError));

function ObjectType(options) {
    return function (target) {
        var config = __assign({ name: target.name }, options);
        var outputTypeCompiler = function () { return compileObjectTypeWithConfig(target, config); };
        objectTypeRegistry.set(target, outputTypeCompiler);
    };
}

var inputFieldsRegistry = new DeepWeakMap();

function resolveTypeOrThrow$1(type, target, fieldName) {
    var resolvedType = resolveType(type);
    if (!resolvedType) {
        throw new InputFieldError(target, fieldName, "Forced type is incorrect. Make sure to use either native graphql type or class that is registered with @Type decorator");
    }
    return resolvedType;
}
function inferTypeOrThrow$1(target, fieldName) {
    var inferedType = inferTypeByTarget(target.prototype, fieldName);
    if (!inferedType) {
        throw new InputFieldError(target, fieldName, "Could not infer return type and no type is forced. In case of circular dependencies make sure to force types of instead of infering them.");
    }
    return resolveType(inferedType);
}

function getFinalInputFieldType(target, fieldName, forcedType) {
    if (forcedType) {
        return resolveTypeOrThrow$1(forcedType, target, fieldName);
    }
    return inferTypeOrThrow$1(target, fieldName);
}
function validateResolvedType$1(target, fieldName, type) {
    if (!graphql.isInputType(type)) {
        throw new InputFieldError(target, fieldName, "Validation of type failed. Resolved type for @Field must be GraphQLInputType.");
    }
    return true;
}
function enhanceType$2(originalType, isNullable) {
    var finalType = originalType;
    if (!isNullable) {
        finalType = new graphql.GraphQLNonNull(finalType);
    }
    return finalType;
}
function compileInputFieldConfig$$1(target, fieldName) {
    var _a = inputFieldsRegistry.get(target, fieldName), type = _a.type, description = _a.description, defaultValue = _a.defaultValue, isNullable = _a.isNullable;
    var resolvedType = getFinalInputFieldType(target, fieldName, type);
    if (!validateResolvedType$1(target, fieldName, resolvedType)) {
        return;
    }
    var finalType = enhanceType$2(resolvedType, isNullable);
    return {
        description: description,
        defaultValue: defaultValue,
        type: finalType,
    };
}
function compileAllInputFieldsForSingleTarget(target) {
    var fields = inputFieldsRegistry.getAll(target);
    var finalFieldsMap = {};
    Object.keys(fields).forEach(function (fieldName) {
        var config = inputFieldsRegistry.get(target, fieldName);
        finalFieldsMap[config.name] = compileInputFieldConfig$$1(target, fieldName);
    });
    return finalFieldsMap;
}
function compileAllInputFields$$1(target) {
    var targetWithParents = getClassWithAllParentClasses(target);
    var finalFieldsMap = {};
    targetWithParents.forEach(function (targetLevel) {
        Object.assign(finalFieldsMap, compileAllInputFieldsForSingleTarget(targetLevel));
    });
    return finalFieldsMap;
}

var InputFieldError = /** @class */ (function (_super) {
    __extends(InputFieldError, _super);
    function InputFieldError(target, fieldName, msg) {
        var _this = this;
        var fullMsg = "@InputField " + target.name + "." + fieldName + ": " + msg;
        _this = _super.call(this, fullMsg) || this;
        _this.message = fullMsg;
        return _this;
    }
    return InputFieldError;
}(BaseError));

function InputField(options) {
    return function (targetInstance, fieldName) {
        var finalConfig = __assign({ property: fieldName, name: fieldName }, options);
        inputFieldsRegistry.set(targetInstance.constructor, fieldName, finalConfig);
    };
}

var compileOutputTypeCache$1 = new WeakMap();
function createTypeInputFieldsGetter(target) {
    var targetWithParents = getClassWithAllParentClasses(target);
    var hasFields = targetWithParents.some(function (ancestor) {
        return !inputFieldsRegistry.isEmpty(ancestor);
    });
    if (!hasFields) {
        throw new InputObjectTypeError(target, "There are no fields inside this type.");
    }
    return createCachedThunk(function () {
        return compileAllInputFields$$1(target);
    });
}
function compileInputObjectTypeWithConfig(target, config) {
    if (compileOutputTypeCache$1.has(target)) {
        return compileOutputTypeCache$1.get(target);
    }
    var compiled = new graphql.GraphQLInputObjectType(__assign({}, config, { fields: createTypeInputFieldsGetter(target) }));
    compileOutputTypeCache$1.set(target, compiled);
    return compiled;
}
function compileInputObjectType$$1(target) {
    if (!inputObjectTypeRegistry.has(target)) {
        throw new InputObjectTypeError(target, "Class is not registered. Make sure it's decorated with @InputObjectType decorator");
    }
    var compiler = inputObjectTypeRegistry.get(target);
    return compiler();
}

var inputObjectTypeRegistry = new WeakMap();

var InputObjectTypeError = /** @class */ (function (_super) {
    __extends(InputObjectTypeError, _super);
    function InputObjectTypeError(target, msg) {
        var _this = this;
        var fullMsg = "@InputObjectType '" + target.name + "': " + msg;
        _this = _super.call(this, fullMsg) || this;
        _this.message = fullMsg;
        return _this;
    }
    return InputObjectTypeError;
}(BaseError));

function InputObjectType(options) {
    return function (target) {
        var config = __assign({ name: target.name }, options);
        var inputTypeCompiler = function () { return compileInputObjectTypeWithConfig(target, config); };
        inputObjectTypeRegistry.set(target, inputTypeCompiler);
    };
}

var EnumError = /** @class */ (function (_super) {
    __extends(EnumError, _super);
    function EnumError(name, msg) {
        var _this = this;
        var fullMsg = "Enum " + name + ": " + msg;
        _this = _super.call(this, fullMsg) || this;
        _this.message = fullMsg;
        return _this;
    }
    return EnumError;
}(BaseError));

var enumsRegistry = new WeakMap();

function convertNativeEnumToGraphQLEnumValues(enumDef) {
    var valueConfigMap = {};
    Object.keys(enumDef).map(function (key) {
        if (!isNaN(key)) {
            return;
        }
        var value = enumDef[key];
        valueConfigMap[key] = {
            value: value,
        };
    });
    return valueConfigMap;
}

function registerEnum(enumDef, options) {
    if (typeof options === 'string') {
        options = { name: options };
    }
    var name = options.name, description = options.description;
    if (enumsRegistry.has(enumDef)) {
        throw new EnumError(name, "Enum is already registered");
    }
    var values = convertNativeEnumToGraphQLEnumValues(enumDef);
    var enumType = new graphql.GraphQLEnumType({
        name: name,
        description: description,
        values: values,
    });
    enumsRegistry.set(enumDef, enumType);
    return enumType;
}

var unionRegistry = new WeakMap();

var UnionError = /** @class */ (function (_super) {
    __extends(UnionError, _super);
    function UnionError(target, msg) {
        var _this = this;
        var fullMsg = "@Union '" + target.name + "': " + msg;
        _this = _super.call(this, fullMsg) || this;
        _this.message = fullMsg;
        return _this;
    }
    return UnionError;
}(BaseError));

var compileUnionCache = new WeakMap();
function getDefaultResolver(types) {
    return function (value, context, info) {
        for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
            var type = types_1[_i];
            if (type.isTypeOf && type.isTypeOf(value, context, info)) {
                return type;
            }
        }
    };
}
/**
 * Resolves type, and if needed, tries to resolve it using typegql-aware types
 */
function enhanceTypeResolver(originalResolver) {
    return function (value, context, info) {
        var rawResolvedType = originalResolver(value, context, info);
        return resolveType(rawResolvedType);
    };
}
function validateResolvedTypes(target, types) {
    for (var _i = 0, types_2 = types; _i < types_2.length; _i++) {
        var type = types_2[_i];
        if (!isObjectType(type)) {
            throw new UnionError(target, "Every union type must be of type GraphQLObjectType. '" + type + "' is not.");
        }
    }
    return true;
}
function compileUnionType(target, config) {
    if (compileUnionCache.has(target)) {
        return compileUnionCache.get(target);
    }
    var types = config.types, resolveTypes = config.resolveTypes, name = config.name;
    var resolvedTypes = resolveTypesList(types);
    if (!validateResolvedTypes(target, resolvedTypes)) {
        return;
    }
    var typeResolver = resolveTypes
        ? enhanceTypeResolver(resolveTypes)
        : getDefaultResolver(resolvedTypes);
    var compiled = new graphql.GraphQLUnionType({
        name: name,
        resolveType: typeResolver,
        types: resolvedTypes,
    });
    compileUnionCache.set(target, compiled);
    return compiled;
}

function Union(config) {
    return function (target) {
        unionRegistry.set(target, function () {
            return compileUnionType(target, __assign({ name: target.name }, config));
        });
    };
}

exports.Float = graphql.GraphQLFloat;
exports.Int = graphql.GraphQLInt;
exports.ID = graphql.GraphQLID;
exports.Arg = Arg;
exports.Field = Field;
exports.Info = Info;
exports.SchemaRoot = SchemaRoot;
exports.Context = Context;
exports.ObjectType = ObjectType;
exports.Query = Query;
exports.Mutation = Mutation;
exports.InputField = InputField;
exports.InputObjectType = InputObjectType;
exports.Union = Union;
exports.Inject = Inject;
exports.Source = Source;
exports.compileSchema = compileSchema;
exports.compileObjectType = compileObjectType$$1;
exports.compileInputObjectType = compileInputObjectType$$1;
exports.registerEnum = registerEnum;
exports.Schema = Schema;
exports.After = After;
exports.Before = Before;
