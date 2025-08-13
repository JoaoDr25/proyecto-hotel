<template>
  <q-card class="my-card">
    <q-img :src="plato.imagen" :alt="plato.nombre" />

    <q-card-section>
      <div class="text-h6">{{ plato.nombre }}</div>
      <div class="text-subtitle2">{{ plato.descripcion }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ plato.ingredientes }}
    </q-card-section>

    </q-card>
</template>

<script setup>

defineProps({
  plato: {
    type: Object,
    required: true,
    default: () => ({})
  }
});
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 350px;
}
</style>