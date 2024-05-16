import { createPinia, setActivePinia } from 'pinia';
import { describe, beforeEach, test, expect } from 'vitest';
import { useCounterStore } from './couterStore.js';

describe("Counter Store test", () => {

    beforeEach(() => {
        const pinia = createPinia();
        setActivePinia(pinia);
    })

    test("Initial Store Vue2", () => {
        const store = useCounterStore();
        
        expect(store.n.value).toBe(0);
    })

    test("Initial Store Vue3", () => {
        const store = useCounterStore();
        
        expect(store.n).toBe(0);
    })
});