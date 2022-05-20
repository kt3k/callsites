# callsites v0.0.0

> A Deno utility to get call sites information from the
> [V8 stack trace API](https://v8.dev/docs/stack-trace-api).

Note: This tool is forked from
[sindresorhus/callsites](https://github.com/sindresorhus/callsites).

## Usage

In Deno:

```ts
import callsites from "https://raw.githubusercontent.com/kt3k/callsites/v0.0.0/mod.ts";

const sites = callsites();
console.log(sites[0].getFileName());
// => Returns the filename of this file

export function foo() {
  const sites = callsites();
  console.log(sites[1].getFileName());
  // => returns the filename of the caller of this function.
}
```

The latter example is useful for getting the information about the caller of your function.

## API

Returns an array of callsite objects with the following methods:

- `getThis`: Returns the value of `this`.
- `getTypeName`: Returns the type of `this` as a string. This is the name of the
  function stored in the constructor field of `this`, if available, otherwise
  the object's `[[Class]]` internal property.
- `getFunction`: Returns the current function.
- `getFunctionName`: Returns the name of the current function, typically its
  `name` property. If a name property is not available an attempt will be made
  to try to infer a name from the function's context.
- `getMethodName`: Returns the name of the property of `this` or one of its
  prototypes that holds the current function.
- `getFileName`: If this function was defined in a script returns the name of
  the script.
- `getLineNumber`: If this function was defined in a script returns the current
  line number.
- `getColumnNumber`: If this function was defined in a script returns the
  current column number
- `getEvalOrigin`: If this function was created using a call to `eval` returns a
  string representing the location where `eval` was called.
- `isToplevel`: Is this a top-level invocation, that is, is this the global
  object?
- `isEval`: Does this call take place in code defined by a call to `eval`?
- `isNative`: Is this call in native V8 code?
- `isConstructor`: Is this a constructor call?

## License

MIT
