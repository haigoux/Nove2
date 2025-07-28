<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/navbar.vue';
</script>

<template>
<navbar />
<div class="flexrow">
    <div class="space"></div>
    <div class="content">
        <RouterView />
    </div>
    <div class="space"></div>
</div>
</template>

<style scoped lang="scss">
.flexrow{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: calc(100vh - 70px);
    .content{
        width: 100%;
        height: calc(100vh - 70px);
        background: linear-gradient(0deg, #ffffff, #d1d1d1);
        padding: 20px;
        box-sizing: border-box;
        max-width: 1300px;
        
    }
    .space{
        // space used for advertisements or other content
        height: 100%;
        width: 100%;
        max-width: 200px;

        @media (max-width: 1300px){
            display: none;
        }
        
    }
}
</style>
