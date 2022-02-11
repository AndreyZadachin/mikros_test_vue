<template>
  <div class="products__item">
    <div class="products__item-container">
      <p class="products__item-vendorcode">
        Артикул: <span class="products__item-vendorcode-change">{{ product_data._source.RM_ARTICLE }}</span>
      </p>

      <a href=""
        ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.6912 30.2762L5.21527 18.3259C1.98283 14.9599 2.18638 9.44067 5.65721 6.34272C9.10053 3.26931 14.3215 3.86612 17.0425 7.64416L17.5 8.27931L17.9575 7.64416C20.6786 3.86612 25.8994 3.26931 29.3428 6.34272C32.8137 9.44067 33.0173 14.9599 29.7847 18.3259L18.3088 30.2762C17.8621 30.7412 17.1379 30.7412 16.6912 30.2762Z"
            fill="white"
            stroke="#5C5C5C"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          /></svg
      ></a>
    </div>
    <div>
      <a class="products__item-img">
        <h5 class="products__item-day">Товар дня</h5>
      </a>
    </div>
    <p class="products__item-description">{{ product_data._source.PROPERTYS.NAIMENOVANIE_DLYA_SAYTA }}</p>
    <div class="products__item-price-container">
      <h4 class="products__item-price">{{ product_data._source.PRICE.BASE }} &#8381;</h4>
      <p class="products__item-price-old">{{ product_data._source.PRICE.OLD_PRICE }}</p>
      <p class="products__item-discount">-50%</p>
    </div>

    <div class="products__item-availability">
      <div class="products__item-availability-warehouse">
        <p class="products__item-availability-title">Наличие на складах:</p>
        <p class="products__item-availability-city">
          Ростов-на-Дону -
          <span class="products__item-availability-number"
            >{{ product_data._source.STORE[475] }} {{ product_data._source.PROPERTYS.CML2_BASE_UNIT }}</span
          >
        </p>
        <p class="products__item-availability-city">
          Воронеж -
          <span class="products__item-availability-number"
            >{{ product_data._source.STORE[472] }} {{ product_data._source.PROPERTYS.CML2_BASE_UNIT }}</span
          >
        </p>
      </div>
      <button class="products__item-button button">В корзину</button>
    </div>

    <div class="products__item-promotion">
      <p class="products__item-promotion-title">До конца акции: <span class="products__item-promotion-time">06:55:47</span></p>
      <p class="products__item-lot">
        Мин. партия:
        <span class="products__item-lot-number"
          >{{ product_data._source.PROPERTYS.MINIMALNAYA_PARTIYA }} {{ product_data._source.PROPERTYS.CML2_BASE_UNIT }}</span
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {},
  method: {},
};
</script>

<style>
.products__item {
  width: 362px;
  height: 465px;
  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 12px;
  box-sizing: border-box;
}
.products__item-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.products__item-vendorcode {
  font-weight: 400;
  font-size: 17px;
  line-height: 120%;
  color: #a8a8a8;
}
.products__item-vendorcode-change {
  font-weight: 400;
  font-size: 17px;
  line-height: 120%;
  color: #000c0c;
}
.products__item-img {
  display: flex;
  width: 338px;
  height: 192px;
  background-image: url('../../public/images/image.jpg');
  margin-bottom: 12px;
}
.products__item-day {
  width: 128px;
  font-weight: 900;
  font-size: 17px;
  line-height: 20px;
  color: #9cc330;
  background: #ffffff;
  border-radius: 0px 25px 0px 0px;
  margin: 0;
  text-align: center;
  align-self: end;
  padding-top: 16px;
  padding-bottom: 8px;
}
.products__item-description {
  font-weight: 400;
  font-size: 17px;
  line-height: 20.4px;
  color: #000c0c;
  margin-bottom: 12px;
}
.products__item-price-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.products__item-price {
  font-weight: 900;
  font-size: 23px;
  line-height: 25px;
  color: #0097ff;
}
.products__item-price-old {
  font-weight: 400;
  font-size: 17px;
  line-height: 120%;
  color: #a8a8a8;
  text-decoration: line-through #ff464b;
}
.products__item-discount {
  font-weight: 900;
  font-size: 20px;
  line-height: 25px;
  color: #ffffff;
  background-image: url('../../public/images/discount.png');
  background-repeat: no-repeat;
  padding: 10px 37px 10px 10px;
}
.products__item-availability {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
}
.products__item-availability-warehouse {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
}
.products__item-availability-title {
  font-weight: 400;
  font-size: 13px;
  line-height: 130%;
  color: #a8a8a8;
}
.products__item-availability-city {
  font-weight: 400;
  font-size: 13px;
  line-height: 130%;
  color: #000c0c;
}
.products__item-button {
  width: 147px;
  height: 48px;
  font-weight: 400;
  font-size: 15px;
  line-height: 14px;
  letter-spacing: 0.08em;
  color: #ffffff;
  text-transform: uppercase;
  background: #0097ff;
  border-radius: 10px;
}
.products__item-promotion {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
}
.products__item-promotion-title {
  font-weight: 400;
  font-size: 13px;
  line-height: 130%;
  color: #1b2121;
}
.products__item-promotion-time {
  color: #9cc330;
}
.products__item-lot {
  font-weight: 400;
  font-size: 13px;
  line-height: 130%;
  color: #a8a8a8;
}
.products__item-lot-number {
  color: #1b2121;
}
</style>
