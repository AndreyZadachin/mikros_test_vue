<template>
  <div class="products__items-sort-container">
    <a class="products__items-sort">
      <p @click="areOptionsVisible = !areOptionsVisible" class="products__items-sort-text">
        {{ selected }} <span>{{ categories }}</span>
      </p>
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.25 8.75L12.5 15L18.75 8.75" stroke="#0097FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </a>
    <div v-if="areOptionsVisible" class="options">
      <p v-for="option in options" :key="option.value" @click="selectOption(option)">{{ option.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'select',
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      areOptionsVisible: false,
    };
  },
  methods: {
    selectOption(option) {
      this.$emit('select', option);
      this.areOptionsVisible = false;
    },
  },
};
</script>

<style></style>
