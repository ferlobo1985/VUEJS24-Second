<template>
    <div>
        <app-header/>
        <div class="container">
            Content
        </div>
        <Footer/>
    </div>
</template>

<script setup>
    import Footer from '@/components/header_footer/footer.vue'
</script>

<style>
    body {
        padding: 0;
        margin: 0;
        font-family: 'Roboto',sans-serif;
    }
    .container { 
        min-height: 84vh;
        box-sizing: border-box;
        padding: 20px;
    }
</style>

