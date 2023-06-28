<template>
  <v-container d-flex flex-column justify-center align-center>
    <v-img
      contain
      max-height="100px"
      max-width="auto"
      src="../assets/ucsc_logo.png"
      class="my-10"
    ></v-img>

    <video-background
      :src="require('@/assets/intro2.mp4')"
      style="max-height: 300px; height: 100vh"
    >
    </video-background>

    <h1 class="text-center my-2" style="color: #003c6c">
      Computer Science and Engineering Mentoring
    </h1>

    <v-row class="my-10" justify="center">
      <v-btn
        color="#1b77d2"
        class="text-white"
        prepend-icon="mdi-home"
        elevation="12"
        raised
        size="large"
      >
        Login / Register
      </v-btn>
    </v-row>
  </v-container>
</template>

<script setup></script>
