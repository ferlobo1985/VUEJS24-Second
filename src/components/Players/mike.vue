<template>
    <h3>Mike is on</h3>
</template>

<script setup>
    import { onUnmounted, onActivated, onDeactivated  } from 'vue'


    onActivated(()=>{
        console.log('x-onActivated')
    })

    onDeactivated(()=>{
        console.log('o-onDeactivated')
    })

    onUnmounted(()=>{
        console.log('Mike unmounted')
    })
</script>