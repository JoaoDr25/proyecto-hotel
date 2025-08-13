<template>
  <q-page class="q-pa-md">
    <h1 class="text-h4 text-primary text-center">NUESTRA GASTRONOMÍA</h1>
    
    <div class="row q-col-gutter-lg q-mt-md justify-center">
      <div class="col-12 col-sm-6 col-md-4" v-for="(plato, index) in gastronomia" :key="index">
        <CardPlato :plato="plato" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import CardPlato from 'components/CardPlato.vue';

const gastronomia = [
  {
    nombre: 'Ceviche de la Casa',
    imagen: 'https://cdn.quasar.dev/img/parallax1.jpg',
    descripcion: 'El plato estrella del restaurante. Pescado fresco marinado con limón, cilantro y especias.',
    ingredientes: 'Pescado blanco, jugo de limón, cebolla morada, cilantro.'
  },
  {
    nombre: 'Paella Valenciana',
    imagen: 'https://cdn.quasar.dev/img/mountains.jpg',
    descripcion: 'Auténtica paella con mariscos y pollo. Un sabor del Mediterráneo.',
    ingredientes: 'Arroz, pollo, camarones, mejillones, pimientos.'
  },
  {
    nombre: 'Pasta Artesanal',
    imagen: 'https://cdn.quasar.dev/img/material.png',
    descripcion: 'Pasta hecha a mano, acompañada de una salsa de tomate y albahaca fresca.',
    ingredientes: 'Pasta fresca, tomates cherry, albahaca, queso parmesano.'
  },
  {
    nombre: 'Steak con Papas',
    imagen: 'https://cdn.quasar.dev/img/parallax2.jpg',
    descripcion: 'Jugoso filete de res a la parrilla, servido con papas fritas rústicas y vegetales asados.',
    ingredientes: 'Corte de res, papas, sal, pimienta, romero.'
  },
  {
    nombre: 'Risotto de Champiñones',
    imagen: 'https://cdn.quasar.dev/img/quasar.jpg',
    descripcion: 'Cremoso risotto con una selección de champiñones locales y un toque de trufa.',
    ingredientes: 'Arroz Arborio, champiñones, caldo de verduras, queso Parmesano.'
  },
  {
    nombre: 'Hamburguesa Gourmet',
    imagen: 'https://cdn.quasar.dev/img/sf.jpg',
    descripcion: 'Hamburguesa de autor con ingredientes de primera calidad. Queso, tocino y cebolla caramelizada.',
    ingredientes: 'Carne de res, pan brioche, queso cheddar, tocino, lechuga.'
  }
];
</script>