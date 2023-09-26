<script setup>
//import { RouterLink, RouterView } from 'vue-router'
import BlogHeader from './views/BlogHeader.vue';
import Blogfooter from './views/Blogfooter.vue';
</script>

<template>
    <BlogHeader></BlogHeader>
    <router-view></router-view>
    <Blogfooter></Blogfooter>
</template>
