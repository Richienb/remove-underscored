import test from "ava"
import removeUnderscored from "."

test("main", (t) => {
    t.deepEqual(removeUnderscored({
        a: {
            _a: "a",
            b: 1,
        },
        _b: ["b"],
    }), { a: { b: 1 } })
})
