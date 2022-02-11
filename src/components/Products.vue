<template>
  <div class="products">
    <ProductsFilter />
    <ProductsItems />
  </div>
</template>

<script>
import ProductsFilter from '@/components/ProductsFilter.vue';
import ProductsItems from '@/components/ProductsItems.vue';

export default {
  name: 'products',
  components: {
    ProductsFilter,
    ProductsItems,
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {},
};
</script>

<style>
.products {
  display: flex;
  justify-content: space-between;
  margin-top: 93px;
}
</style>
