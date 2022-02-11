import { createApp } from 'vue';
import App from './App.vue';
import store from './vuex/store';
import VueCollapsiblePanel from '@dafcoe/vue-collapsible-panel';

createApp(App).use(store).use(VueCollapsiblePanel).mount('#app');
