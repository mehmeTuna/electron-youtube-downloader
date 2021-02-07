<script>
  import { inputValue } from "./../store.js";

  export let searchData;
</script>

<main>
  <input bind:value={$inputValue} />
  <button on:click={searchData}> Arama yap </button>
</main>
