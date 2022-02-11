<template>
  <section class="results">
    <div class="results__info">
      <h2 class="results__title">Полиграфия ко дню рождения</h2>
      <span class="results__total">(1300 товаров)</span>
    </div>
    <div class="results__container">
      <button class="results__button">Открытки</button>
      <button class="results__button">Конверты для денег</button>
      <button class="results__button">Приглашения</button>
      <button class="results__button">Плакаты, гирлянды</button>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.results {
  display: flex;
  flex-direction: column;
  margin-top: 58px;
}
.results__info {
  display: flex;
  align-items: center;
  margin-bottom: 66px;
}
.results__title {
  font-weight: 900;
  font-size: 40px;
  line-height: 38px;
  color: #000c0c;
  margin: 0;
  margin-right: 30px;
}
.results__total {
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  color: #a8a8a8;
}
.results__container {
  display: flex;
}
.results__button {
  height: 60px;
  font-weight: 400;
  font-size: 17px;
  line-height: 16px;
  letter-spacing: 0.1em;
  color: #5c5c5c;
  background: rgba(64, 171, 244, 0.1);
  border-radius: 10px;
  margin-right: 60px;
  padding-left: 14px;
  padding-right: 14px;
}
.results__button:last-child {
  margin-right: 0;
}
</style>
