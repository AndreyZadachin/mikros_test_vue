<template>
  <div class="products__items">
    <FiltersOpen />
    <Sort />
    <div class="products__grid">
      <ProductsItem v-for="product in sortProducts" :key="product._id" :product_data="product" />
    </div>
    <Pagination />
  </div>
</template>

<script>
import FiltersOpen from '@/components/FiltersOpen.vue';
import Sort from '@/components/Sort.vue';
import ProductsItem from '@/components/ProductsItem.vue';
import Pagination from '@/components/Pagination.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'productsItems',
  components: {
    FiltersOpen,
    Sort,
    ProductsItem,
    Pagination,
  },
  props: {},
  data() {
    return {
      categories: [
        { name: 'Алфавиту', value: '' },
        { name: 'Цене', value: '' },
      ],
      sortedProducts: [],
    };
  },
  computed: {
    ...mapGetters(['PRODUCTS']),
    sortProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.PRODUCTS;
      }
    },
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API']),
    sortedAltha() {
      this.sortedProducts = [];
      return [...this.PRODUCTS._source.RM_NAME].sort((a, b) => a.name.localeCompare(b.name));
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
};
</script>

<style>
.products__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
}
</style>
