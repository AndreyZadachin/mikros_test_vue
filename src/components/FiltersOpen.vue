<template>
  <div class="products__filters-open">
    <h4 class="products__items-filters">Фильтры:</h4>
    <div class="products__items-filters-container">
      <div class="products__items-filters-item">
        <p class="products__items-filters-text">17 см</p>
        <a class="products__items-filters-line" href=""
          ><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0H0V20H20V0Z" fill="white" fill-opacity="0.01" />
            <path d="M4 4L16 16" stroke="#000C0C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 16L16 4" stroke="#000C0C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg
        ></a>
      </div>
      <div class="products__items-filters-item">
        <p class="products__items-filters-text">Белый</p>
        <a class="products__items-filters-line" href=""
          ><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0H0V20H20V0Z" fill="white" fill-opacity="0.01" />
            <path d="M4 4L16 16" stroke="#000C0C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 16L16 4" stroke="#000C0C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg
        ></a>
      </div>
      <div class="products__items-filters-item">
        <p class="products__items-filters-text">Красный</p>
        <a class="products__items-filters-line" href=""
          ><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0H0V20H20V0Z" fill="white" fill-opacity="0.01" />
            <path d="M4 4L16 16" stroke="#000C0C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 16L16 4" stroke="#000C0C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg
        ></a>
      </div>
      <a href="" class="products__items-filters-reset">Сбросить все</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.products__items-filters {
  font-weight: 900;
  font-size: 23px;
  line-height: 25px;
  color: #000c0c;
  margin-bottom: 32px;
}
.products__items-filters-container {
  display: flex;
  align-items: center;
  margin-bottom: 41px;
}
.products__items-filters-item {
  height: 40px;
  display: flex;
  background: #dddddd;
  border-radius: 10px;
  align-items: center;
  padding-left: 14px;
  padding-right: 14px;
  margin-right: 12px;
}
.products__items-filters-text {
  font-weight: 400;
  font-size: 13px;
  line-height: 12px;
  color: #000c0c;
  letter-spacing: 0.08em;
  margin-right: 14px;
  align-self: center;
  margin-top: 2px;
}
.products__items-filters-line {
  line-height: 0;
}
.products__items-filters-reset {
  font-weight: 400;
  font-size: 17px;
  line-height: 120%;
  color: #5c5c5c;
}
</style>
