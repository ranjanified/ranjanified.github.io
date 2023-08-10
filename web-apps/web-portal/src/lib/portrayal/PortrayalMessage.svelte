<script lang="ts">
  console.log('base url:', import.meta.env.BASE_URL);
</script>

<div class="portrayal-message covered">
  <div class="picture-container">
    <img
      class="portrayal-image"
      src="{import.meta.env.BASE_URL}/assets/images/NalinRanjan-ProfilePic.png"
      alt=""
    />
  </div>
  <div class="portrayal-title">
    <a href = "mailto: nalin39@gmail.com">Nalin Ranjan</a>
    <p>I am about to open myself up, Here !!!</p>
  </div>
</div>

<style lang="scss">
  .portrayal-message {
    display: grid;

    justify-content: center;
    grid-auto-rows: max-content;

    gap: 10px;
  }

  .covered .portrayal-image {
    margin: 12px;
    height: 30em;

    border-radius: 50%;
  }

  .portrayal-title {
    display: flex;

    flex-direction: column;

    a, p {
      text-align: center;
      margin: 4px;
    }
  }
</style>
