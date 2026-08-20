<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
    <header class="flex justify-between items-center p-3 border-b border-indigo-200 relative">
      <h1 class="whitespace-nowrap">Contadores y Asesores</h1>

      <button @click="toggleMenu" class="md:hidden focus:outline-none cursor-pointer text-3xl" aria-label="Abrir Menu">
        <span>☰</span>
      </button>

      <div v-show="isMenuOpen" class="fixed inset-0 bg-indigo-500 text-white z-40 flex flex-col justify-center items-center md:static md:!flex md:flex-row md:justify-between md:items-center md:w-full md:bg-transparent md:text-gray-800">
        <button class="md:hidden absolute top-3 right-3 text-3xl"  @click="toggleMenu" >
          ✕
        </button>

        <ul class="flex flex-col gap-5 text-center md:flex-row md:mx-auto">
          <li>
            <a href="" @click="isMenuOpen = false">Servicio</a>
          </li>
          <li>
            <a href="" @click="isMenuOpen = false">Nosotros</a>
          </li>
          <li>
            <a href="" @click="isMenuOpen = false">Contactos</a>
          </li>
        </ul>

        <div class="bg-blue-600 rounded-lg">
          <button class="w-32 pt-2 pb-2 text-center">Agendar Cita</button>
        </div>
        
      </div>
      
    </header>
</template>
