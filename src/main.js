import { createApp } from "vue";
import App from './App.vue';

import Header from '@/components/header_footer/header.vue';

const app = createApp(App);

app.directive('awesome',{
    beforeMount(el, binding){
        el.style.color = binding.modifiers.red ? 'red':'blue';
        el.style.fontSize = binding.modifiers.big ? '20px':'10px';

        el.innerHTML = binding.value;
    }
})
app.component('app-header',Header)
app.mount('#app')