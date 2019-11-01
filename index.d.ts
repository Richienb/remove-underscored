/**
 * Remove keys that start with an underscore from an object or array of objects.
 * @param obj The object or array to handle.
 * @example
 * ```
 * const removeUnderscored = require("remove-underscored");
 *
 * removeUnderscored(
 *     {
 *         a: {
 *             _a: "a",
 *             b: 1
 *         },
 *         _b: ["b"]
 *     }
 * );
 * //=> { a: { b: 1 } }
 * ```
*/
declare function removeUnderscored<T extends object | any[]>(obj: T): Partial<T>;
declare function removeUnderscored<T>(obj: T): T;

export = removeUnderscored;
