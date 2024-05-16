import { defineStore } from "pinia";
import { ref } from 'vue';

export const useCounterStore = defineStore('counter', () => {
    const n = ref(0);

    return {
        n
    }
})