<template>
  <q-card class="my-card">
    <q-img :src="deporte.imagen" :alt="deporte.nombre" />

    <q-card-section>
      <div class="text-h6">{{ deporte.nombre }}</div>
      <div class="text-subtitle2 text-primary">{{ deporte.descripcion }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="text-caption text-grey-6">Requisitos: {{ deporte.requisitos }}</div>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn flat label="Más información" color="primary" />
    </q-card-actions>
  </q-card>
</template>

<script setup>
defineProps({
  deporte: {
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