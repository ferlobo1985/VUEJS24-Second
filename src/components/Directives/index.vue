<template>
    <div v-awesome.red.big="textToRender"></div>
    <div v-user-lastname="lastname"></div>
    <!-- <div v-awesome.blue.small="textToRender"></div> -->
    <button @click="textToRender = 'Someting else'">
        Trigger update
    </button>
</template>

<script setup>
    import {ref} from 'vue';
    const textToRender = ref('Some text');
    const lastname = ref('jones')

    const vUserLastname = {
        beforeMount(el,binding){
            el.innerHTML =  binding.value;
            el.style.color = 'red'
        }
    }
</script>