<template>
  <div class="product">
    <label>Product Name</label>
    <p>{{ name }}</p>

    <label>Product Price</label>
    <p>{{ price }}</p>

    <router-link to="/search">Back to Search</router-link>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState('Product', ['name', 'price']),
    }
  }
</script>

<style lang="scss" scoped>
.product {
  padding: 10px;

  label {
    font-size: 16px;
    font-weight: bold;
  }
}
</style>


