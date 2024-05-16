# Vue Pinia

When using `vitest`, `pinia`, and `vue`. 
I have experienced some issues with testing that gave different results on the same tests depending on what `vue` version I am running.

Notes about the environment:

| | | 
| --- | --- |
| OS | MacOS 14.5 |
| Node.js | v20.13.1 |
| npm | 10.5.2 |

The setup is very simple, a `pinia` counterStore that has `ref` `n`.
`vitest` for the inital state of the store.

The test includes two almost identical tests, that checks the value of `n`.

Vue2 => `store.n.value`

Vue3 => `store.n` 

It is created two folders, one for vue2 and one for vue3.

## Vue 2

Running 

```sh
 ❯ npm run test

> test
> vitest run


 RUN  v1.6.0 /Users/kenneth.fossen/GIT/vue-pinia/vue2

 ❯ src/counterStore.test.js (2)
   ❯ Counter Store test (2)
     ✓ Initial Store Vue2 <-- OK
     × Initial Store Vue3 <-- Fails

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  src/counterStore.test.js > Counter Store test > Initial Store Vue3
AssertionError: expected { __v_isRef: true, …(3) } to be +0 // Object.is equality

- Expected: 
0

+ Received: 
Object {
  "value": 0,
}

 ❯ src/counterStore.test.js:21:25
     19|         const store = useCounterStore();
     20|         
     21|         expect(store.n).toBe(0);
       |                         ^
     22|     })
     23| });

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯

 Test Files  1 failed (1)
      Tests  1 failed | 1 passed (2)
   Start at  10:49:07
   Duration  216ms (transform 22ms, setup 0ms, collect 28ms, tests 6ms, environment 0ms, prepare 55ms)

```

## Vue 3

```sh
❯ npm run test

> test
> vitest run


 RUN  v1.6.0 /Users/kenneth.fossen/GIT/vue-pinia/vue3

 ❯ src/counterStore.test.js (2)
   ❯ Counter Store test (2)
     × Initial Store Vue2 <-- Fails
     ✓ Initial Store Vue3 <-- OK

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  src/counterStore.test.js > Counter Store test > Initial Store Vue2
AssertionError: expected undefined to be +0 // Object.is equality

- Expected: 
0

+ Received: 
undefined

 ❯ src/counterStore.test.js:15:31
     13|         const store = useCounterStore();
     14|         
     15|         expect(store.n.value).toBe(0);
       |                               ^
     16|     })
     17| 

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯

 Test Files  1 failed (1)
      Tests  1 failed | 1 passed (2)
   Start at  10:52:26
   Duration  307ms (transform 27ms, setup 0ms, collect 62ms, tests 5ms, environment 0ms, prepare 81ms)
```

## Culporate


`npm config set ignore-scipts=true`


This setting will alter the behavior of installed packages.
'vue-demi' is dependent on running a post-install script after installing the package into the project.
We first noticed this in our pipeline; finding this setting that altered the behavior was challenging.

```json
  "scripts": {
    "postinstall": "node -e \"try{require('./scripts/postinstall.js')}catch(e){}\"",
    "release": "npx bumpp --tag --commit --push && npm publish"
  }
```

Other strange error messages I have had issues with because of vue-demi is missing `hasInjectionContext`.

This also comes from the post-install script.
`export declare function hasInjectionContext(): boolean`
