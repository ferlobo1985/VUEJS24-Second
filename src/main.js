import { createApp } from "vue";
import App from './App.vue';

import Header from '@/components/header_footer/header.vue';

const app = createApp(App);

app.directive('awesome',{
    created(el){
        console.log('Created')
        console.log(el.parentNode)
    },
    beforeMount(el, binding){
        el.style.color = binding.modifiers.red ? 'red':'blue';
        el.style.fontSize = binding.modifiers.big ? '20px':'10px';
        el.innerHTML = binding.value;

        console.log('beforeMount')
        console.log(el.parentNode)
    },
    mounted(el){
        console.log('mounted')
        console.log(el.parentNode)
    },
    beforeUpdate(el,binding){
        console.log('beforeUpdate')
        console.log(el.parentNode)
        el.innerHTML = binding.value;
    },
    updated(){
        console.log('UPDATED')
    },
    beforeUnmount(){},
    unmounted(){}
})
app.component('app-header',Header)
app.mount('#app')