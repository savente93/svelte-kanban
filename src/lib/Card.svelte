<script lang="ts">
  import { store, updateCardTitle } from "./stores/store";


export let columnIdx: number;
export let cardIdx: number;

let card = $store[columnIdx].cards[cardIdx];
let cardTitle = card.title;
$: card.title = cardTitle;

</script>

<div class='card'>
<h4><input type="text" bind:value={cardTitle} on:change={() => updateCardTitle(columnIdx, cardIdx, cardTitle)}/></h4> 
</div>

<style lang="scss">
.card h4 {
  text-align: center;
}
input {
    border-style: hidden;
    background-color: transparent;
    font-size: medium;
    text-align: center;
  }
.card {
  border: 1px white solid;
  border-radius: 1rem;
  justify-self: center;
  margin-bottom: 2rem;
}
</style>