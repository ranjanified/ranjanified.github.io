<script lang="ts">
 import { onMount } from "svelte";

 let mounted = false;
 onMount(() => {
   setTimeout(() => {
     dispatchEvent(new CustomEvent("ranjanified:app:loaded"));
     mounted = true;
   }, 3000);
 });
</script>
{#if mounted}
  <div>
    Build In Progress
  </div>
{/if}
