<script setup>
import { ref } from 'vue'

const isOpenMenu = ref(false)

const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value
}

</script>

<template>
    
    <header class="p-3 relative flex justify-between border-b border-indigo-100">
      <h1 class="ml-4 mt-1 whitespace-nowrap text-center">Contadores y Asesores</h1>

      <button @click="toggleMenu" class="md:hidden mr-4 text-2xl">☰</button>

      <div v-show="isOpenMenu" class="bg-blue-400 fixed inset-0 z-50 flex justify-center flex-col gap-8 items-center md:static md:!flex md:flex-row md:justify-between md:items-center md:bg-transparent md:w-full">
        
        <button @click="toggleMenu" class="md:hidden absolute top-2 right-4 text-2xl">✕</button>
        
        <ul class="flex flex-col gap-8 md:flex-row md:mx-auto">
          <li>
            <a href="" @click="isOpenMenu = false">Servicios</a>
          </li>
          <li>
            <a href="" @click="isOpenMenu = false">Contacto</a>
          </li>
          <li>
            <a href="" @click="isOpenMenu = false">Nosotros</a>
          </li>
        </ul>

        <div>
            <button class="w-34 bg-blue-300 p-1 rounded-lg">Agentar Cita</button>
          </div>
      </div>

    </header>

</template>
