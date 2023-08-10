<script lang="ts">
  import { onMount } from "svelte";
 import AppLayout from "$lib/layouts/AppLayout.svelte";
  import PortrayalMessage from "$lib/portrayal/PortrayalMessage.svelte";

 let mounted = false;
 onMount(() => {
   setTimeout(() => {
     dispatchEvent(new CustomEvent("ranjanified:app:loaded"));
     mounted = true;
   }, 3000);
 });
</script>
{#if mounted}
  <AppLayout>
    <PortrayalMessage />
  </AppLayout>
{/if}

<style lang="scss">
  :global(body) {
    margin: 0;
  }
</style>

