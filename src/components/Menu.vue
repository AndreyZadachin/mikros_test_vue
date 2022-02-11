<template>
  <section class="menu">
    <a href="" class="menu__item">Главная</a>
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.75 12.5L5.20833 12.5" stroke="#000C0C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M13.5417 18.75L19.7917 12.5L13.5417 6.25"
        stroke="#000C0C"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <a href="" class="menu__item">Праздники</a>
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.75 12.5L5.20833 12.5" stroke="#000C0C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M13.5417 18.75L19.7917 12.5L13.5417 6.25"
        stroke="#000C0C"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <a href="" class="menu__item">День рождения</a>
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.75 12.5L5.20833 12.5" stroke="#000C0C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M13.5417 18.75L19.7917 12.5L13.5417 6.25"
        stroke="#000C0C"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <a href="" class="menu__item">Полиграфия</a>
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.25 8.75L12.5 15L18.75 8.75" stroke="#0097FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </section>
</template>

<script>
export default {};
</script>

<style>
.menu {
  display: flex;
  align-items: center;
}
.menu__item {
  font-weight: 400;
  font-size: 17px;
  line-height: 120%;
  color: #0097ff;
  margin-right: 25px;
  margin-left: 25px;
}
.menu__item:first-child {
  margin-left: 0;
}
.menu__item:last-of-type {
  margin-right: 10px;
}
</style>
