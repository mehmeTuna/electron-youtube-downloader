import { writable } from "svelte/store";

function createInputValue() {
  const { subscribe, set, update } = writable("");
  return {
    subscribe,
    set: (e) => set(e),
  };
}

export const inputValue = createInputValue();
