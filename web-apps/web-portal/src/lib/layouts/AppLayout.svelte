<script>
  /** @type {{children?: import('svelte').Snippet}} */
  let { children } = $props();
</script>

<div class="app-layout">
  {@render children?.()}
</div>

<style lang="scss">
  .app-layout {
    min-height: 100vh;

    background-color: bisque;

    display: grid;
  }
</style>
