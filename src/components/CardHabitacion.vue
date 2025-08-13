<template>
  <q-card class="my-card">
    <q-img :src="habitacion.imagen" :alt="habitacion.nombre" />

    <q-card-section>
      <div class="text-h6">{{ habitacion.nombre }}</div>
      <div class="text-subtitle2">{{ habitacion.precio }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ habitacion.descripcion }}
    </q-card-section>

    <q-card-actions align="right">
      <q-btn flat label="Ver más" color="primary" />
      <q-btn flat label="Reservar" color="primary" />
    </q-card-actions>
  </q-card>
</template>

<script setup>


defineProps({
  habitacion: {
    type: Object,
    required: true,
    default: () => ({})
  }
});
</script>

