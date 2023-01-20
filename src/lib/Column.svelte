<script lang="ts">
  import Card from "./Card.svelte";
  import { store, uid } from "./stores/store";
  export let columnIdx: number;

  let column = $store[columnIdx];

  const addCard = () => {
    column.cards = [
      ...column.cards,
      { id: uid(), title: "title", description: "", status: "Not Started" },
    ];
  };
</script>

<div class="column">
  <h3><input type="text" bind:value={column.title} /></h3>
  {#if $$slots.body}
    <slot name="body" />
  {:else}
    <ul>
      {#each column.cards as card, idx (card.id)}
        <li><Card {columnIdx} cardIdx={idx} /></li>
      {/each}
    </ul>

    <button on:click={addCard}>+</button>
  {/if}
</div>

<style lang="scss">
  .column {
    border: 1px dotted white;
    width: 50rem;

    }

  input {
    border-style: hidden;
    border-bottom-style: solid;
    background-color: transparent;
    font-size: large;
    text-align: center;
  }

  button {

    margin-bottom: 2rem;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 2rem;

  }
</style>
