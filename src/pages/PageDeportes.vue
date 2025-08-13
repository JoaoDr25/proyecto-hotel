<template>
  <q-page class="q-pa-md">
    <h1 class="text-h4 text-primary text-center">DEPORTES EXTREMOS</h1>
    
    <div class="row q-col-gutter-lg q-mt-md justify-center">
      <div class="col-12 col-sm-6 col-md-4" v-for="(deporte, index) in deportes" :key="index">
        <CardDeporte :deporte="deporte" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import CardDeporte from 'components/CardDeporte.vue';

const deportes = [
  {
    nombre: 'Rafting',
    imagen: 'https://cdn.quasar.dev/img/parallax1.jpg',
    descripcion: 'Descenso en balsas por ríos de aguas bravas. Adrenalina y trabajo en equipo.',
    requisitos: 'Saber nadar, edad mínima 12 años.'
  },
  {
    nombre: 'Escalada en Roca',
    imagen: 'https://cdn.quasar.dev/img/mountains.jpg',
    descripcion: 'Supera tus límites escalando formaciones rocosas naturales. Diversión y desafío garantizados.',
    requisitos: 'Buena condición física, equipo de seguridad proporcionado.'
  },
  {
    nombre: 'Canopy',
    imagen: 'https://cdn.quasar.dev/img/material.png',
    descripcion: 'Deslízate por cables a gran velocidad entre copas de árboles, disfrutando de vistas increíbles.',
    requisitos: 'Peso máximo de 100 kg, no recomendado para personas con vértigo.'
  },
  {
    nombre: 'Buceo',
    imagen: 'https://cdn.quasar.dev/img/parallax2.jpg',
    descripcion: 'Explora el fascinante mundo submarino, sus arrecifes y fauna marina.',
    requisitos: 'Certificación de buceo o curso introductorio en el hotel.'
  },
  {
    nombre: 'Senderismo de Montaña',
    imagen: 'https://cdn.quasar.dev/img/quasar.jpg',
    descripcion: 'Recorre senderos a través de la naturaleza, con guías expertos que te mostrarán la flora y fauna local.',
    requisitos: 'Calzado cómodo y ropa adecuada para el clima.'
  },
  {
    nombre: 'Kayaking',
    imagen: 'https://cdn.quasar.dev/img/sf.jpg',
    descripcion: 'Navega en kayaks por aguas tranquilas, explorando la costa del hotel a tu propio ritmo.',
    requisitos: 'Flotador y chaleco salvavidas obligatorios.'
  }
];
</script>