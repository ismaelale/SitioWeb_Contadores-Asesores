<script setup>
import { ref } from 'vue'

const isOpenMenu = ref(false)

const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value
}

</script>

<template>
    
    <header class="relative flex justify-between p-3 border-b border-indigo-100">

      <h1 class="lg:ml-5 mt-2 md:whitespace-nowrap">Contadores y Asesores</h1>

      <button @click="toggleMenu" class="md:hidden text-2xl cursor-pointer">☰</button>

      <div v-show="isOpenMenu" class="fixed inset-0 flex flex-col z-50 items-center justify-center gap-8 bg-blue-400 md:static md:!flex md:justify-between md:flex-row md:items-center md:bg-transparent md:w-full">

        <button @click="toggleMenu" class="md:hidden absolute top-3 right-3 text-2xl cursor-pointer">
          ✕
        </button>

        <ul class="flex flex-col gap-7 md:flex-row md:mx-auto lg:gap-20">
          <li>
            <a href="#" @click="isOpenMenu = false">Preguntas</a>
          </li>
          <li>
            <a href="#" @click="isOpenMenu = false">Servicios</a>
          </li>
          <li>
            <a href="#" @click="isOpenMenu = false">Nosotros</a>
          </li>
        </ul>

        <div>
          <button class="lg:mr-5 w-35 bg-blue-500 p-2 rounded-lg">Agendar Cita</button>
        </div>
      </div>

    </header>

    <main class="h-screen flex items-center p-7 flex-col">

      <section class="mt-5">
        <p class="bg-blue-200 p-2 pr-3 pl-3 rounded-xl text-center">ASESORIA FISCAL & ASESORIA CONTABLE</p>
        
        <h2 class="text-3xl mt-7">Rigurosidad Contable y Planeación Fiscal Estratégica</h2>
        <p class="mt-6">Impulsamos el crecimiento de su empresa con una gestión financiera impecable, 
          total transparencia y cumplimiento normativo estricto bajo el respaldo de González & Asociados.</p>
        <a class="flex justify-center mt-5 bg-blue-300 p-4 w-full text-lg font-bold rounded-xl cursor-pointer">Nuestros Servicios</a>
        <img class="mt-7 rounded-xl aspect-2/2" src="@/assets/mesa_ejecutiva.jpg" alt="">
          
      </section>

      <section>
      </section>

    </main>

</template>
