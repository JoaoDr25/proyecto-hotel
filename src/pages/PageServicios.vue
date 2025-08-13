<template>
  <q-page class="q-pa-md">
    <h1 class="text-h4 text-primary text-center">SERVICIOS ADICIONALES</h1>
    
    <div class="row q-col-gutter-lg q-mt-md justify-center">
      <div class="col-12 col-sm-6 col-md-4" v-for="(servicio, index) in servicios" :key="index">
        <CardServicio :servicio="servicio" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import CardServicio from 'components/CardServicio.vue';

const servicios = [
  {
    nombre: 'Spa y Masajes',
    imagen: 'https://cdn.quasar.dev/img/parallax1.jpg',
    horario: 'Lunes a Sábado: 9:00 - 20:00',
    beneficios: 'Relájate con masajes terapéuticos, sauna y baño turco para renovar tu energía.'
  },
  {
    nombre: 'Transporte al Aeropuerto',
    imagen: 'https://cdn.quasar.dev/img/mountains.jpg',
    horario: '24 horas, previa reservación.',
    beneficios: 'Servicio de transporte privado para tu llegada y salida, garantizando comodidad y seguridad.'
  },
  {
    nombre: 'WiFi de Alta Velocidad',
    imagen: 'https://cdn.quasar.dev/img/material.png',
    horario: '24/7',
    beneficios: 'Conexión a internet gratuita en todo el hotel, ideal para trabajar o compartir tu experiencia.'
  },
  {
    nombre: 'Gimnasio Equipado',
    imagen: 'https://cdn.quasar.dev/img/parallax2.jpg',
    horario: '24/7',
    beneficios: 'Mantén tu rutina de ejercicios con equipos de última generación en nuestro gimnasio.'
  },
  {
    nombre: 'Piscina y Jacuzzi',
    imagen: 'https://cdn.quasar.dev/img/quasar.jpg',
    horario: '8:00 - 22:00',
    beneficios: 'Disfruta de nuestra piscina al aire libre y relájate en los jacuzzis climatizados.'
  },
  {
    nombre: 'Clases de Yoga',
    imagen: 'https://cdn.quasar.dev/img/sf.jpg',
    horario: 'Martes y Jueves: 7:00',
    beneficios: 'Inicia tu día con una clase de yoga en la playa para conectar cuerpo y mente.'
  }
];
</script>