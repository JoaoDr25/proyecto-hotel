<template>
  <q-card class="my-card">
    <q-img :src="servicio.imagen" :alt="servicio.nombre" />

    <q-card-section>
      <div class="text-h6">{{ servicio.nombre }}</div>
      <div class="text-subtitle2">{{ servicio.horario }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ servicio.beneficios }}
    </q-card-section>

    <q-card-actions align="right">
      <q-btn flat label="Detalles" color="primary" />
    </q-card-actions>
  </q-card>
</template>

<script setup>
defineProps({
  servicio: {
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