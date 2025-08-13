<template>
  <q-page class="q-pa-md">
    <h1 class="text-h4 text-primary text-center">NUESTRAS HABITACIONES</h1>

    <div class="row q-col-gutter-lg q-mt-md justify-center">
      <div class="col-12 col-sm-6 col-md-4" v-for="(habitacion, index) in habitaciones" :key="index">
        <CardHabitacion :habitacion="habitacion" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import CardHabitacion from 'components/CardHabitacion.vue';

// Datos de ejemplo para las habitaciones
const habitaciones = [
  {
    nombre: 'Suite Presidencial',
    imagen: 'https://cdn.quasar.dev/img/parallax1.jpg',
    descripcion: 'Lujo y confort en un espacio de ensueño. Equipada con jacuzzi, cama king size y vistas panorámicas.',
    precio: '$500 USD por noche'
  },
  {
    nombre: 'Habitación Familiar',
    imagen: 'https://cdn.quasar.dev/img/mountains.jpg',
    descripcion: 'Ideal para familias con niños. Cama queen y literas, con área de juegos y espacio adicional.',
    precio: '$300 USD por noche'
  },
  {
    nombre: 'Habitación Doble',
    imagen: 'https://cdn.quasar.dev/img/material.png',
    descripcion: 'Perfecta para parejas o amigos. Dos camas individuales o una cama matrimonial, con balcón privado.',
    precio: '$200 USD por noche'
  },
  {
    nombre: 'Habitación Sencilla',
    imagen: 'https://cdn.quasar.dev/img/parallax2.jpg',
    descripcion: 'Un espacio acogedor y funcional para viajeros solitarios o estancias cortas. Incluye todas las comodidades.',
    precio: '$120 USD por noche'
  },
  {
    nombre: 'Bungalow con Vista al Mar',
    imagen: 'https://cdn.quasar.dev/img/quasar.jpg',
    descripcion: 'Una experiencia exclusiva con vista directa al mar. Privacidad total y acceso a la playa. ',
    precio: '$450 USD por noche'
  },
  {
    nombre: 'Suite Nupcial',
    imagen: 'https://cdn.quasar.dev/img/sf.jpg',
    descripcion: 'Decoración especial para lunas de miel y escapadas románticas. Servicio de champagne y desayuno a la cama.',
    precio: '$600 USD por noche'
  }
];
</script>

