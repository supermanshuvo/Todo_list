import Vue from 'vue'
import App from './vue/app'
require('./bootstrap');

Vue.component('app', require('./vue/app.vue').default);
const app = new Vue({
    el: "#app",
    comments: {App}
});
