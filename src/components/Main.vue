<template>
  <main class="main">
    <Menu />
    <Results />
    <Products />
  </main>
</template>

<script>
import Menu from '@/components/Menu.vue';
import Results from '@/components/Results.vue';
import Products from '@/components/Products.vue';

export default {
  name: 'main',
  components: {
    Menu,
    Results,
    Products,
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
.main {
  margin-top: 62px;
  margin-left: 142px;
  margin-right: 142px;
}
</style>
