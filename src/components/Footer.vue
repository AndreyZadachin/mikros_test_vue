<template>
  <footer class="footer">
    <div class="footer__top"></div>
    <div class="footer__container">
      <div class="footer__items">
        <h4 class="footer__title">Контакты</h4>
        <ul class="footer__lists">
          <li class="footer__list"><a class="footer__list-link" href="">Адреса магазинов</a></li>
          <li class="footer__list"><a class="footer__list-link" href="">Отдел продаж</a></li>
          <li class="footer__list"><a class="footer__list-link" href="">Отдел по работе с сетями</a></li>
          <li class="footer__list"><a class="footer__list-link" href="">Отдел закупок</a></li>
          <li class="footer__list"><a class="footer__list-link" href="">Бухгалтерия</a></li>
          <li class="footer__list"><a class="footer__list-link" href="">Руководство</a></li>
        </ul>
      </div>
      <div class="footer__items">
        <h4 class="footer__title">Условия работы</h4>
        <ul class="footer__lists">
          <li class="footer__list"><a class="footer__list-link" href="">Как сделать заказ</a></li>
          <li class="footer__list"><a class="footer__list-link" href="">Оплата</a></li>
          <li class="footer__list"><a class="footer__list-link" href="">Оплатить</a></li>
          <li class="footer__list"><a class="footer__list-link" href="">Доставка</a></li>
          <li class="footer__list"><a class="footer__list-link" href="">Система скидок</a></li>
          <li class="footer__list"><a class="footer__list-link" href="">Документы</a></li>
          <li class="footer__list"><a class="footer__list-link" href="">Реквизиты</a></li>
          <li class="footer__list"><a class="footer__list-link" href="">Обмен и возврат</a></li>
          <li class="footer__list"><a class="footer__list-link" href="">Частые вопросы</a></li>
          <li class="footer__list"><a class="footer__list-link" href="">Обмен и возврат</a></li>
        </ul>
      </div>
      <div class="footer__items">
        <h4 class="footer__title">Обучение</h4>
        <ul class="footer__lists">
          <li class="footer__list"><a class="footer__list-link" href="">Для сотрудников</a></li>
          <li class="footer__list"><a class="footer__list-link" href="">Статьи</a></li>
          <li class="footer__list"><a class="footer__list-link" href="">Видеоуроки</a></li>
          <li class="footer__list"><a class="footer__list-link" href="">Семинары</a></li>
        </ul>
      </div>
      <div class="footer__items">
        <h4 class="footer__title">О компании</h4>
        <ul class="footer__lists">
          <li class="footer__list"><a class="footer__list-link" href="">Новости</a></li>
          <li class="footer__list"><a class="footer__list-link" href="">Награды</a></li>
          <li class="footer__list"><a class="footer__list-link" href="">Благотворительность</a></li>
          <li class="footer__list"><a class="footer__list-link" href="">Вакансии</a></li>
          <li class="footer__list"><a class="footer__list-link" href="">Политика конфиденциальности</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__info">
      <p class="footer__info-text">&COPY; 1994-2021 ООО НПП «МИКРОС», сеть магазинов товаров для праздника</p>
      <p class="footer__info-text">
        Вся информация на сайте – собственность интернет-магазина Микрос.рф. Все данные, представленные на сайте, носят сугубо
        информационный характер. Для более подробной информации следует обращаться к менеджерам компании по указанным на сайте телефонам.
        Информация на сайте микрос.рф не является публичной офертой.
      </p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
.footer {
  margin-top: 378px;
  margin-bottom: 20px;
}
.footer__top {
  height: 50px;
  background: #9cc330;
  margin: 0 auto;
  padding-left: 142px;
  padding-right: 142px;
}
.footer__container {
  display: flex;
  text-align: left;
  margin: 55px 171px;
}
.footer__items {
  margin-right: 73px;
}
.footer__items:last-child {
  margin-right: 0;
}
.footer__title {
  font-weight: 900;
  font-size: 23px;
  line-height: 25px;
  color: #000c0c;
  margin-bottom: 13px;
}
.footer__lists {
  padding: 0;
}
.footer__list {
  font-weight: 400;
  font-size: 17px;
  line-height: 120%;
  margin-bottom: 12px;
}
.footer__list:last-child {
  margin-bottom: 0;
}
.footer__list-link {
  color: #5c5c5c;
}
.footer__info {
  max-width: 1054px;
  margin-left: 171px;
  margin-right: 171px;
  text-align: left;
}
.footer__info-text {
  font-weight: 400;
  font-size: 13px;
  line-height: 130%;
  color: #000c0c;
}
</style>
