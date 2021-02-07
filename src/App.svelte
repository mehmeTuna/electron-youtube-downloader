<script>
  import { inputValue } from "./store.js";

  import SearchInput from "./components/SearchInput.svelte";

  const searchData = () => {
    console.log("calisti");
  };
</script>

<main>
  <SearchInput {searchData} />
  {$inputValue}
</main>
