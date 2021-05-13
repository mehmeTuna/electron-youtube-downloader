<script>
  const { ipcRenderer } = require("electron");
  import { inputValue } from "./store.js";
  import SearchInput from "./components/SearchInput.svelte";

  const searchData = () => {
    console.log("calisti");
    ipcRenderer.sendSync("yt-data", "a");
  };
</script>

<main>
  <SearchInput {searchData} />
  {$inputValue}
</main>
