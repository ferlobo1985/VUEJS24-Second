<template>
    <div>
        <app-header/>
        <div class="container">
            <Cars/>
            <hr/>
            <CarBrands>
                <div>Content at the top</div>
                <template v-slot:brands>
                    <ul>
                        <li v-for="(brand,index) in brands" :key="index">
                            {{ brand }}
                        </li>
                    </ul>
                </template>
                <template v-slot:other>
                    <div>Some other content</div>
                </template>
                <strong>Default slots</strong>
            </CarBrands>
        </div>
    </div>
</template>

<script setup>
    import Cars from '@/components/Cars/index.vue';
    import CarBrands from '@/components/Cars/brands.vue'
    import { reactive, provide } from 'vue'

    const brands = reactive(['Mazda','Honda','Renault'])
    const cars = reactive([
        {model:'F9',brand:'Ferrari'},
        {model:'911',brand:'Porsche'},
        {model:'Fiesta',brand:'Ford'}
    ])

    const updateCar = () => {
        cars[0].brand = 'Fiat';
    }

    provide('cars',{
        cars,
        updateCar
    })
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

