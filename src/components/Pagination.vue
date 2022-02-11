<template>
  <div class="products__pagination">
    <div class="products__wholesale">
      <h4 class="products__wholesal-title">Внимание!</h4>
      <p class="products__wholesale-subtitle">Оптовые цены на сайте действуют при покупке от 3000 руб.</p>
    </div>
    <div class="products__pagination-container">
      <p class="products__pagination-pages">Страница</p>
      <span class="products__pagination-first-page"> 1</span>
      <p class="products__pagination-pages-text">из <span class="products__pagination-last-page">10</span></p>
      <a
        ><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.66669 10.8335L4.33335 6.50013L8.66669 2.16679"
            stroke="#A8A8A8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          /></svg
      ></a>
      <a
        ><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.33331 2.16679L8.66665 6.50012L4.33331 10.8335"
            stroke="#0097FF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          /></svg
      ></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.products__pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 90px;
}
.products__wholesal-title {
  font-weight: 900;
  font-size: 23px;
  line-height: 25px;
  color: #9cc330;
  margin-bottom: 4px;
}
.products__wholesale-subtitle {
  font-weight: 400;
  font-size: 17px;
  line-height: 120%;
  color: #000c0c;
}
.products__pagination-container {
  display: flex;

  align-items: center;
}
.products__pagination-pages {
  font-weight: 400;
  font-size: 17px;
  line-height: 120%;
  color: #000c0c;
}
.products__pagination-first-page {
  font-weight: 900;
  font-size: 17px;
  line-height: 20px;
  color: #0097ff;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 13.5px 45px 13.5px 12px;
  margin-left: 12px;
  margin-right: 12px;
}
.products__pagination-pages-text {
  font-weight: 400;
  font-size: 17px;
  line-height: 120%;
  color: #000c0c;
}
.products__pagination-last-page {
  font-weight: 400;
  font-size: 17px;
  line-height: 120%;
  color: #000c0c;
}
svg {
  margin-left: 12px;
}
</style>
