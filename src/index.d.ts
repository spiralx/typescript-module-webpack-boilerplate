/// <reference path="../typings/index.d.ts" />

// ----------------------------------------------------------------------------

declare module "config" {
  var config: Object;
  export default config;
}

// ----------------------------------------------------------------------------

interface RequireContext {
    keys(): string[];
    <T>(id: string): T;
    resolve(id: string): string;
}

interface RequireFunction {
    <T>(path: string): T;
    context(path: string, deep?: boolean, filter?: RegExp): RequireContext;
    resolve(path: string): number;
}

declare var require: RequireFunction;
