<template>
  <q-page class="q-pa-md">
    <div class="column items-center q-gutter-md">
      <h1 class="text-h3 text-primary text-center">BIENVENIDO AL HOTEL GREGORITS</h1>
      <p class="text-body1 text-center text-grey-8" style="max-width: 800px;">
        Una experiencia única de tranquilidad y aventura. Ubicado en el corazón de la naturaleza, 
        nuestro hotel ofrece el equilibrio perfecto entre lujo y desconexión.
      </p>

      <div class="q-mt-lg" style="width: 100%; max-width: 800px;">
        <q-video
          :ratio="16/9"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        />
      </div>

      <h2 class="text-h4 text-secondary q-mt-xl">NUESTRAS INSTALACIONES</h2>
      <div class="row q-col-gutter-md justify-center" style="width: 100%; max-width: 1200px;">
        <div class="col-12 col-sm-6 col-md-4">
          <q-img src="https://cdn.quasar.dev/img/parallax1.jpg" class="rounded-borders" />
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <q-img src="https://cdn.quasar.dev/img/mountains.jpg" class="rounded-borders" />
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <q-img src="https://cdn.quasar.dev/img/material.png" class="rounded-borders" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>

</script>

<style scoped>
.q-pa-md h1{
  padding-top: 30px;
  margin-bottom: 0%;
}
</style>
