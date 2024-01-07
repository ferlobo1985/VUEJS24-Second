<template>
    <h1>{{ name }}</h1>
</template>

<script setup>
    import {ref} from 'vue';
    const name = ref('Francis');
</script>

<style>
    div {
        color:red
    }
</style>
