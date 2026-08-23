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

    <main class="flex items-center p-7 flex-col">

      <section class="mt-5">
        <p class="border-2 bg-blue-200 p-2 pr-3 pl-3 rounded-xl text-center md:w-sm">ASESORIA FISCAL & ASESORIA CONTABLE</p>
        
        <h2 class="text-3xl mt-7">Rigurosidad Contable y Planeación Fiscal Estratégica</h2>
        <p class="mt-6">Impulsamos el crecimiento de su empresa con una gestión financiera impecable, 
          total transparencia y cumplimiento normativo estricto bajo el respaldo de González & Asociados.</p>
        <a class="flex justify-center mt-5 bg-blue-300 p-4 w-full text-lg font-bold rounded-xl cursor-pointer">Nuestros Servicios</a>
        <img class="mt-7 rounded-xl aspect-2/2" src="@/assets/mesa_ejecutiva.jpg" alt="">
          
      </section>

      <section class="m-15">
        <h3 class="border-2 bg-blue-200 p-2 pr-3 pl-3 rounded-xl text-center w-3xs">Sobre Nosotros</h3>
        <p class="indent-8 mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam earum quidem accusamus iste, 
          vero cumque blanditiis esse sed error, officiis facilis repellat itaque unde architecto veniam dolorem at distinctio rem? Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Minima odit labore nostrum fugiat consequuntur placeat quasi voluptates autem dolorem, 
          qui neque praesentium omnis, quidem deserunt hic ab veritatis sunt laboriosam.
        </p>
      </section>
    </main>

    <footer class="pie-pagina pb-10 pt-5">
        <div class="p-7 flex flex-col gap-6">
          <p class="contacto-directo border-2 p-2 pr-3 pl-3 rounded-xl text-center w-3xs font-bold">Contacto Directo</p>
          <p class="text-4xl text-white">
            Comencemos a optimizar tus finanzas hoy mismo
          </p>
          <p class="">
            Completa el formulario para una pre-evaluación gratuita de tu situación contable y fiscal. 
            Uno de nuestros socios principales se pondrá en contacto contigo en un plazo menor a 24 horas hábiles.
          </p>
          <p>Celular</p>
          <p>Correo</p>
          <p>Dirección</p>
        </div>

        <form action="" class="bg-white m-10 rounded-2xl p-8">
          <div class="formulario-items flex flex-col gap-4">
            <label for="">Nombre Completo</label>
            <input type="text" class="bg-white w-3xs">
            <label for="">Correo Electronico</label>
            <input type="text" class="bg-white w-3xs">
            <label for="">Nombre de tu Empresa / Sector</label>
            <input type="text" class="bg-white w-3xs">
            <label for="">Mensaje o Consulta</label>
            <textarea name="" id="" class="bg-white w-3xs"></textarea>
          </div>
          <div class="mt-5">
            <button class="bg-blue-300 w-full p-3 rounded-xl font-bold">Enviar Solicitud</button>
          </div>
        </form>

    </footer>

</template>
