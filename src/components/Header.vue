<template>
  <header class="header">
    <div class="header__container-top">
      <div class="header__geo">
        <svg class="header__geo-img" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.5 32.0833C17.5 32.0833 28.4375 23.3333 28.4375 13.8541C28.4375 7.81349 23.5406 2.91663 17.5 2.91663C11.4594 2.91663 6.5625 7.81349 6.5625 13.8541C6.5625 23.3333 17.5 32.0833 17.5 32.0833Z"
            stroke="#A8A8A8"
            stroke-width="2.5"
            stroke-linejoin="round"
          />
          <path
            d="M17.5 18.2291C19.9162 18.2291 21.875 16.2704 21.875 13.8541C21.875 11.4379 19.9162 9.47913 17.5 9.47913C15.0838 9.47913 13.125 11.4379 13.125 13.8541C13.125 16.2704 15.0838 18.2291 17.5 18.2291Z"
            stroke="#A8A8A8"
            stroke-width="2.5"
            stroke-linejoin="round"
          />
        </svg>
        <a href="" class="header__geo-city">Воронеж</a>
      </div>
      <nav class="header__nav">
        <ul class="header__nav-items">
          <li class="header__nav-item"><a href="">Новости</a></li>
          <li class="header__nav-item"><a href="">Контакты</a></li>
          <li class="header__nav-item"><a href="">Условия работы</a></li>
          <li class="header__nav-item"><a href="">Доставка</a></li>
          <li class="header__nav-item"><a href="">Оставить отзыв</a></li>
        </ul>
      </nav>
      <span class="header__open-time">Пн - Пт: 08:00 - 17:00</span>
    </div>

    <div class="header__search">
      <img class="header__search-logo" src="../assets/logo.png" />
      <div class="header__search-container">
        <h4 class="header__search-title">Крупнейший выбор товаров для праздника</h4>
        <p class="header__search-subtitle">Оптовый интернет - магазин</p>
        <div class="header__search-wrapper">
          <button class="header__search-button button">Каталог</button>
          <form class="header__search-input-group">
            <input type="search" class="header__search-input" placeholder="Название товара или артикул" />
            <button type="submit" class="header__search-input-button button" />
          </form>
        </div>
      </div>
      <div class="header__container-info">
        <div class="header__contacts-container-phones">
          <div class="header__contacts-container-phone">
            <p class="header__contacts-phone">8 (900) 949 83-73</p>
            <a href="" class="header__contacts-text-link">Заказать звонок</a>
          </div>
          <div class="header__contacts-container-phone">
            <p class="header__contacts-phone">8 (900) 949 83-73</p>
            <p class="header__contacts-text">Бесплатно по РФ</p>
          </div>
        </div>
        <div class="header__users">
          <a href="" class="header__users-container">
            <img class="header__users-icon" src="../../public/images/icon/Person.svg" alt="Иконка входа на сайт" />
            <p class="header__users-text">Войти</p>
          </a>
          <a href="" class="header__users-container">
            <img class="header__users-icon" src="../../public/images/icon/basket.svg" alt="Иконка полной корзины" />
            <p class="header__users-text header__users-text_active">1144.50р.</p>
          </a>
          <a href="" class="header__users-container">
            <img class="header__users-icon" src="../../public/images/icon/love.svg" alt="Иконка избранного" />
            <p class="header__users-text">Избранное</p>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
.header {
  margin-left: 142px;
  margin-right: 142px;
  margin-top: 10px;
}

input[type='text']::-ms-clear {
  display: none;
  width: 0;
  height: 0;
}
input[type='text']::-ms-reveal {
  display: none;
  width: 0;
  height: 0;
}
input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-results-button,
input[type='search']::-webkit-search-results-decoration {
  display: none;
}

.header__container-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #5c5c5c;
}
.header__geo {
  display: flex;
  align-items: center;
}
.header__geo-img {
  padding-bottom: 15px;
  margin-right: 10px;
}
.header__geo-city {
  font-weight: 400;
  font-size: 17px;
  line-height: 120%;
  color: #0097ff;
}
.header__nav {
  width: 1138px;
  margin-right: 71px;
}
.header__nav-items {
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin-left: 106px;
}
.header__nav-item {
  font-weight: 400;
  font-size: 17px;
  line-height: 120%;
  color: #5c5c5c;
}
.header__nav-item:last-child {
  margin-right: 0;
}
.header__open-time {
  font-weight: 400;
  font-size: 17px;
  line-height: 120%;
  color: #000c0c;
}
.header__search {
  margin-top: 77px;
  display: flex;
  justify-content: space-between;
}
.header__search-logo {
  width: 190px;
  height: 110px;
}
.header__search-container {
  display: flex;
  flex-direction: column;
}
.header__search-title {
  font-weight: 900;
  font-size: 23px;
  line-height: 25px;
  color: #0097ff;
  margin-bottom: 2px;
}
.header__search-subtitle {
  font-weight: 400;
  font-size: 17px;
  line-height: 120%;
  color: #000c0c;
  margin-bottom: 12px;
}
.header__search-wrapper {
  display: flex;
}
.header__search-button {
  width: 172px;
  height: 49px;
  font-weight: 400;
  font-size: 15px;
  line-height: 14px;
  letter-spacing: 0.07em;
  color: #ffffff;
  background: #0097ff;
  background-repeat: no-repeat;
  background-position: center left 15px;
  border-radius: 10px;
  text-transform: uppercase;
  background-image: url('../../public/images/catalog.png');
  padding-left: 45px;
  margin-right: 16px;
}
.header__search-input-group {
  position: relative;
}
.header__search-input {
  position: relative;
  width: 653px;
  height: 49px;
  font-weight: 400;
  font-size: 17px;
  line-height: 120%;
  color: #5c5c5c;
  border: 2px solid #dddddd;
  box-sizing: border-box;
  border-radius: 10px;
  padding-left: 8px;
  padding-top: 5px;
}
.header__search-input-button {
  position: absolute;
  right: 17px;
  top: 12px;
  width: 25px;
  height: 25px;
  border: none;
  background: url('../../public/images/search.png') no-repeat 50% 50%;
}
.header__contacts-container-phones {
  display: flex;
}
.header__contacts-container-phone {
  margin-right: 108px;
}
.header__contacts-container-phone:last-child {
  margin-right: 0;
}
.header__contacts-phone {
  font-weight: 400;
  font-size: 17px;
  line-height: 120%;
  color: #000c0c;
}
.header__contacts-text {
  font-weight: 400;
  font-size: 13px;
  line-height: 130%;
  color: #a8a8a8;
}
.header__contacts-text-link {
  font-weight: 400;
  font-size: 13px;
  line-height: 130%;
  color: #0097ff;
}
.header__users {
  display: flex;
  justify-content: space-between;
  margin-top: 17px;
}
.header__users-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.header__users-container:last-child {
  margin-right: 0;
}
.header__users-icon {
  width: 35px;
  height: 35px;
}
.header__users-text {
  font-weight: 400;
  font-size: 17px;
  line-height: 120%;
  color: #5c5c5c;
  margin-top: 5px;
}
.header__users-text_active {
  color: #0097ff;
}
</style>
