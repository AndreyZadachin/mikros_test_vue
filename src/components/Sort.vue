<template>
  <div class="products__items-sort-container">
    <vue-collapsible-panel-group>
      <vue-collapsible-panel :expanded="false">
        <template #title
          ><a class="products__items-sort">
            <p class="products__items-sort-text">Сортировать по</p>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.25 8.75L12.5 15L18.75 8.75" stroke="#0097FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </template>
        <template #content>
          <p><a>Алфавиту</a></p>
          <p><a>Цене</a></p></template
        >
      </vue-collapsible-panel>

      <vue-collapsible-panel :expanded="false">
        <template #title
          ><a class="products__items-sort">
            <p class="products__items-sort-text">Отображать по <span class="products__items-sort-text-color">20</span></p>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.25 8.75L12.5 15L18.75 8.75" stroke="#0097FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </template>
        <template #content
          ><p><a>20</a></p>
          <p><a>40</a></p>
          <p><a>60</a></p>
        </template>
      </vue-collapsible-panel>
    </vue-collapsible-panel-group>

    <div class="products__items-sort-display">
      <a class="products__items-sort-display-first"
        ><svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="13.8182" width="10.3636" height="11.2667" rx="2" fill="#0097FF" />
          <rect x="13.8182" y="13.8667" width="10.3636" height="11.2667" rx="2" fill="#0097FF" />
          <rect x="13.8182" y="27.7334" width="10.3636" height="11.2667" rx="2" fill="#0097FF" />
          <rect x="27.6364" width="10.3636" height="11.2667" rx="2" fill="#0097FF" />
          <rect x="27.6364" y="13.8667" width="10.3636" height="11.2667" rx="2" fill="#0097FF" />
          <rect x="27.6364" y="27.7334" width="10.3636" height="11.2667" rx="2" fill="#0097FF" />
          <rect width="10.3636" height="11.2667" rx="2" fill="#0097FF" />
          <rect y="13.8666" width="10.3636" height="11.2667" rx="2" fill="#0097FF" />
          <rect y="27.7333" width="10.3636" height="11.2667" rx="2" fill="#0097FF" /></svg
      ></a>
      <a
        ><svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="39" height="11" rx="2" fill="#DDDDDD" />
          <rect y="14" width="39" height="11" rx="2" fill="#DDDDDD" />
          <rect y="28" width="39" height="11" rx="2" fill="#DDDDDD" /></svg
      ></a>
    </div>
  </div>
</template>

<script>
import { VueCollapsiblePanelGroup, VueCollapsiblePanel } from '@dafcoe/vue-collapsible-panel';

export default {
  data() {
    return {};
  },
  components: {
    VueCollapsiblePanelGroup,
    VueCollapsiblePanel,
  },
  methods: {},
};
</script>

<style scoped>
.products__items-sort-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 35px;
  margin-bottom: 31px;
  border-bottom: 1px solid #dddddd;
}
.vcpg {
  display: flex;
  text-align: end;
}
.vcp--expandable {
  margin-bottom: 0;
  margin-right: 354px;
}
.vcp--expandable:last-child {
  margin-right: 0;
}
p {
  margin-bottom: 10px;
}
a {
  color: #000c0c;
}
.products__items-sort {
  display: flex;
  align-items: center;
}
.products__items-sort-text {
  font-weight: 400;
  font-size: 17px;
  line-height: 120%;
  color: #000c0c;
}
.products__items-sort-text-color {
  color: #0097ff;
}
.products__items-sort-display-first {
  margin-right: 11px;
}
</style>
