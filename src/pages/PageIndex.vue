<template>
  <q-page>
    <div class="column items-center q-gutter-md">
      <div class="welcome-section" style="position: relative; width: 85%; overflow: hidden; margin: 0; padding: 0;">

        <video src="/video.mp4" autoplay muted loop playsinline style="width: 100%; object-fit: cover;"></video>
      </div>

      <h2 class="text-h4 q-mt-xl">NUESTRAS INSTALACIONES</h2>

      <div class="row q-col-gutter-md justify-center" style="width: 100%; max-width: 1200px;">
        <div class="col-12 col-sm-6 col-md-4">
          <q-img src="/pool01.png" class="rounded-borders" />
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <q-img src="/garden01.png" class="rounded-borders" />
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <q-img src="/lounge01.png" class="rounded-borders" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>

</script>


<style scoped>
.q-pa-md h1 {
  padding-top: 30px;
  margin-bottom: 0%;
}

.welcome-section {
  position: relative;
  border: 2px solid #ffb4a2;
  border-radius: 16px;
  padding: 6px;
  margin-top: 0%;
}


.q-mt-xl {
  font-family: sans-serif;
  font-size: 2rem;
  padding-left: 20px;
  margin-bottom: 40px;
  text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.8);
  color: #6d4122;
}

.col-md-4 {
  position: relative;
  border: 2px solid #ffb4a2;
  border-radius: 16px;
  padding: 6px;
}

.col-md-4::before {
  top: -12px;
  left: -12px;
}

.col-md-4::after {
  bottom: -12px;
  right: -12px;
}
</style>
