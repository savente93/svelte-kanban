<script lang="ts">
  import Column from "./Column.svelte";
  import { store, addColumn } from "./stores/store";
</script>

<div class="board">
  {#each $store as column, idx (column.id)}
    <Column columnIdx={idx} />
  {/each}

  <!-- special column that should never contain cards -->
  <!-- <Column columnIdx={-1}>
    <button slot="body" on:click={addColumn}>+</button>
  </Column> -->
</div>

<style lang="scss">
  .board {
    // border: 1px dashed white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
</style>
