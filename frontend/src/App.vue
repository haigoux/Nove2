<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/navbar.vue';
</script>

<template>
    <navbar />
    <div class="flexrow">
        <div class="space">
            <div class="cloudjuice-ad">

            </div>
        </div>
        <div class="content">
            <RouterView />
        </div>
        <div class="space"></div>
    </div>
    <div class="footer">
        <p>© 2023 Nove. All rights reserved.</p>
    </div>
</template>

<style scoped lang="scss">
.flexrow {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: calc(100vh - 70px);

    .content {
        width: 100%;
        height: calc(100vh - 70px);
        background: linear-gradient(0deg, #ffffff, #d1d1d1);
        padding: 20px;
        box-sizing: border-box;
        max-width: 1300px;
        overflow-y: auto;


    }

    .space {
        // space used for advertisements or other content
        height: 100%;
        width: 100%;
        max-width: 200px;

        @media (max-width: 1300px) {
            display: none;
        }

    }
}

.footer {
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // background: 
    background-image: url('@/assets/images/example.jpg'), linear-gradient(0deg, #23ffe2, #d1d1d1);;
    color: #333;
    font-size: 0.9rem;
}
</style>
