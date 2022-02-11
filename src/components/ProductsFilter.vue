<template>
  <div class="products__filter">
    <vue-collapsible-panel-group>
      <vue-collapsible-panel :expanded="false">
        <template #title>
          <a class="products__filter-item-container-label">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 20L15 10L25 20" stroke="#0097FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <h4 class="products__filter-title">Цена, &#8381;:</h4>
          </a>
        </template>
        <template #content>
          <div class="products__filter-item">
            <div class="products__filter-rangeslider">
              <p class="products__filter-range">от {{ minPrice }}</p>
              <p class="products__filter-range">до {{ maxPrice }}</p>
            </div>
            <div class="range-slider">
              <input type="range" min="0" max="10000" step="100" v-model.number="minPrice" @change="setRangeSlider" />
              <input type="range" min="0" max="10000" step="100" v-model.number="maxPrice" @change="setRangeSlider" />
            </div>
          </div>
        </template>
      </vue-collapsible-panel>
      <vue-collapsible-panel :expanded="false">
        <template #title>
          <a class="products__filter-item-container-label">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 20L15 10L25 20" stroke="#0097FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <h4 class="products__filter-title">Размер, см:</h4>
          </a>
        </template>
        <template #content>
          <div class="products__filter-item-container">
            <input class="products__filter-chekbox" type="checkbox" />
            <label class="products__filter-text">17</label>
          </div>
          <div class="products__filter-item-container">
            <input class="products__filter-chekbox" type="checkbox" />
            <label class="products__filter-text">24</label>
          </div>
          <div class="products__filter-item-container">
            <input class="products__filter-chekbox" type="checkbox" />
            <label class="products__filter-text">32</label>
          </div>
          <div class="products__filter-item-container">
            <input class="products__filter-chekbox" type="checkbox" />
            <label class="products__filter-text">40</label>
          </div>
          <a class="products__filter-showall">Показать все</a>
        </template>
      </vue-collapsible-panel>
      <vue-collapsible-panel :expanded="false">
        <template #title>
          <a class="products__filter-item-container-label">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 20L15 10L25 20" stroke="#0097FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <h4 class="products__filter-title">Цвет</h4>
          </a>
        </template>
        <template #content>
          <div class="products__filter-item-container">
            <input type="checkbox" id="1" class="products__filter-chekbox-circle" />
            <label for="1" class="products__filter-text">Красный</label>
          </div>
          <div class="products__filter-item-container">
            <input type="checkbox" id="2" class="products__filter-chekbox-circle" />
            <label for="2" class="products__filter-text">Зеленый</label>
          </div>
          <div class="products__filter-item-container">
            <input type="checkbox" id="3" class="products__filter-chekbox-circle" />
            <label for="3" class="products__filter-text">Синий</label>
          </div>
          <div class="products__filter-item-container">
            <input type="checkbox" id="4" class="products__filter-chekbox-circle" />
            <label for="4" class="products__filter-text">Фиолетовый</label>
          </div>
          <div class="products__filter-item-container">
            <input type="checkbox" id="5" class="products__filter-chekbox-circle" />
            <label for="5" class="products__filter-text">Белый</label>
          </div>
          <div class="products__filter-item-container">
            <input type="checkbox" id="6" class="products__filter-chekbox-circle" />
            <label for="6" class="products__filter-text">Черный</label>
          </div>
          <a class="products__filter-showall">Показать все</a>
        </template>
      </vue-collapsible-panel>
      <vue-collapsible-panel :expanded="false">
        <template #title>
          <a class="products__filter-item-container-label">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 10L15 20L5 10" stroke="#0097FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <h4 class="products__filter-title">Коллекция</h4>
          </a>
        </template>
        <template #content> Content </template>
      </vue-collapsible-panel>
      <vue-collapsible-panel :expanded="false">
        <template #title>
          <a class="products__filter-item-container-label">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 10L15 20L5 10" stroke="#0097FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <h4 class="products__filter-title">Товар Микроса</h4>
          </a>
        </template>
        <template #content> Content </template>
      </vue-collapsible-panel>
      <vue-collapsible-panel :expanded="false">
        <template #title>
          <a class="products__filter-item-container-label">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 10L15 20L5 10" stroke="#0097FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <h4 class="products__filter-title">Без текста</h4>
          </a>
        </template>
        <template #content> Content </template>
      </vue-collapsible-panel>
    </vue-collapsible-panel-group>
  </div>
</template>

<script>
import { VueCollapsiblePanelGroup, VueCollapsiblePanel } from '@dafcoe/vue-collapsible-panel';

export default {
  data() {
    return {
      minPrice: 200,
      maxPrice: 10000,
    };
  },
  components: {
    VueCollapsiblePanelGroup,
    VueCollapsiblePanel,
  },
  methods: {
    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        let temp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = temp;
      }
    },
  },
};
</script>

<style>
.products__filter {
  width: 372px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.products__filter-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 34px;
}
.products__filter-item:last-child {
  margin-bottom: 0;
}
.products__filter-title {
  font-weight: 900;
  font-size: 23px;
  line-height: 25px;
  color: #000c0c;
  margin-left: 10px;
}
.products__filter-wrapper {
  display: flex;
  align-items: center;
}
.products__filter-text {
  font-weight: 400;
  font-size: 17px;
  line-height: 120%;
  color: #000c0c;
  margin-left: 8px;
  margin-bottom: 24px;
}
.products__filter-chekbox {
  width: 24px;
  height: 24px;
  border: 2px solid #dddddd;
  border-radius: 5px;
  margin-bottom: 24px;
  align-items: center;
}
.products__filter-chekbox:last-child {
  margin-bottom: 0;
}

.products__filter-item-container {
  display: flex;
  align-items: center;
}
.products__filter-item-container-label {
  display: flex;
  align-items: center;
  margin-bottom: 37px;
}

.products__filter-showall {
  font-weight: 400;
  font-size: 17px;
  line-height: 120%;
  color: #0097ff;
  margin-left: 5px;
}

.products__filter-rangeslider {
  display: flex;
  justify-content: space-between;
}
.products__filter-range {
  width: 132px;
  font-weight: 900;
  font-size: 17px;
  line-height: 120%;
  color: #000c0c;
  background: #dddddd;
  border: 2px solid #dddddd;
  box-sizing: border-box;
  border-radius: 10px;
  text-align: center;
  margin-right: 108px;
  padding-top: 13px;
  padding-bottom: 13px;
}
.products__filter-range:last-child {
  margin-right: 0;
}
.products__filter-range::placeholder {
  color: #000c0c;
}

.range-slider {
  width: 346px;
  text-align: center;
  position: relative;
  margin-top: 42px;
}

.range-slider svg,
.range-slider input[type='range'] {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 372px;
}
input[type='range']::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -7px;
}

.products__filter-chekbox-circle {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.products__filter-chekbox-circle + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}
.products__filter-chekbox-circle + label::before {
  content: '';
  display: inline-block;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  border-radius: 50%;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

.products__filter-chekbox-circle:not(:disabled):not(:checked) + label:hover::before {
  border-color: #b3d7ff;
}
.products__filter-chekbox-circle:not(:disabled):active + label::before {
  background-color: #b3d7ff;
  border-color: #b3d7ff;
}
.products__filter-chekbox-circle:focus + label::before {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
.products__filter-chekbox-circle:focus:not(:checked) + label::before {
  border-color: #80bdff;
}
.products__filter-chekbox-circle:checked + label::before {
  border-color: #0b76ef;
  background-color: #0b76ef;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}
.products__filter-chekbox-circle:disabled + label::before {
  background-color: #e9ecef;
}

.vcp__header-icon {
  display: none;
}
.vcp--expandable {
  margin-bottom: 37px;
}
.vcp--expandable:last-child {
  margin-bottom: 0;
}
</style>
