<template>
  <v-app>
    <NavBar/>

    <default-view />

    <FooterBar/>
    
  </v-app>
</template>

<script setup>
  import FooterBar from '@/layouts/default/FooterBar.vue'
  import NavBar from '@/layouts/default/NavBar.vue'
  import DefaultView from './View.vue'
</script>
