interface IFoo {
    bar?: {
        baz: string;
    }
}

const foo1: IFoo = {};

/* Should produce an error if "target" is ES5 or older */
(async () => { })();

/* Should produce "Object is possibly undefined" if "strict" is true (enabled). */
console.log(foo1.bar.baz);