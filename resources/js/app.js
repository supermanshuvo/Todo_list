import Vue from 'vue'
import App from './vue/app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)



require('./bootstrap');


Vue.component('app', require('./vue/app.vue').default);
const app = new Vue({
    el: "#app",
    comments: {App}
});
