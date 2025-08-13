<template>
  <q-page-sticky position="bottom-right" :offset="[18, 18]">
    <q-btn fab icon="chat" color="primary" @click="toggleChat" />
  </q-page-sticky>

  <q-dialog v-model="chatOpen">
    <q-card style="width: 350px; max-width: 90vw;">
      <q-card-section class="bg-primary text-white row items-center q-pb-none">
        <div class="text-h6">Asistente Virtual</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section style="max-height: 50vh; overflow-y: auto;">
        <p>Hola, ¿en qué puedo ayudarte hoy?</p>
        </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input outlined dense v-model="userMessage" label="Escribe tu mensaje..." />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from 'vue';

const chatOpen = ref(false);
const userMessage = ref('');

function toggleChat() {
  chatOpen.value = !chatOpen.value;
}
</script>