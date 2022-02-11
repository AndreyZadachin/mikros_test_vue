<template>
  <div class="discount">
    <h4 class="discount__title">Скидка 10% на покупку от 3000 рублей при регистрации</h4>
    <a
      ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 7L28 28" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M7 28L28 7" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" /></svg
    ></a>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.discount {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #9cc330;
  margin: 0 auto;
  padding-left: 142px;
  padding-right: 142px;
}
.discount__title {
  font-weight: 900;
  font-size: 23px;
  line-height: 25px;
  color: #ffffff;
  margin: 0;
}
</style>
