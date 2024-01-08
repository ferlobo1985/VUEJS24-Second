<template>
    <h1>Welcome to cars</h1>
    <hr/>
    <CarsList
        :cars="cars"
    />
</template>

<script setup>
    import CarsList from './list.vue'
    const props = defineProps(['cars'])
</script>