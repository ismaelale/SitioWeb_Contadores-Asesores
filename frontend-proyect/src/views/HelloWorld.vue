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

      <nav v-show="isOpenMenu" class="fixed inset-0 flex flex-col z-50 items-center justify-center gap-8 bg-blue-400 md:static md:!flex md:justify-between md:flex-row md:items-center md:bg-transparent md:w-full">

        <button @click="toggleMenu" class="md:hidden absolute top-3 right-3 text-2xl cursor-pointer">
          ✕
        </button>

        <ul class="flex flex-col gap-7 md:flex-row md:mx-auto lg:gap-20">
          <li>
            <a href="#" class="text-white font-semibold text-lg" @click="isOpenMenu = false">Preguntas</a>
          </li>
          <li>
            <a href="#" class="text-white font-semibold text-lg" @click="isOpenMenu = false">Servicios</a>
          </li>
          <li>
            <a href="#" class="text-white font-semibold text-lg" @click="isOpenMenu = false">Nosotros</a>
          </li>
        </ul>

        <div>
          <button class="lg:mr-5 w-35 bg-blue-500 p-2 rounded-lg font-semibold">Agendar Cita</button>
        </div>
      </nav>

    </header>

    <main class="flex p-4 flex-col">

      <section class="mt-8 mb-12">
        <div class="bg-blue-200 p-3 rounded-xl text-center mb-6 inline-block w-full">  
          <p class="text-center">
            ASESORIA FISCAL & ASESORIA CONTABLE
          </p>
        </div>

        <h2 class="text-3xl mb-4">Rigurosidad Contable y Planeación Fiscal Estratégica</h2>

        <p class="mb-6 text-base leading-relaxed">Impulsamos el crecimiento de su empresa con una gestión financiera impecable, 
          total transparencia y cumplimiento normativo estricto bajo el respaldo de González & Asociados.</p>
        
        <a class="block bg-blue-200 p-4 text-center text-lg font-bold rounded-xl cursos-pointer mb-6">Nuestros Servicios</a>
        
        <img class="w-full rounded-xl aspect-square object-cover" src="@/assets/mesa_ejecutiva.jpg" alt="">
          
      </section>

      <section class="mb-12">
        
        <div class="bg-blue-200 inline-block mb-6 p-3 rounded-xl">
           <h3 class="text-sm font-semibold">Sobre Nosotros</h3>
        </div>
        <p class="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam earum quidem accusamus iste, 
          vero cumque blanditiis esse sed error, officiis facilis repellat itaque unde architecto veniam dolorem at distinctio rem? Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Minima odit labore nostrum fugiat consequuntur placeat quasi voluptates autem dolorem, 
          qui neque praesentium omnis, quidem deserunt hic ab veritatis sunt laboriosam.
        </p>
      </section>
    </main>

    <footer class="pie-pagina pb-10 pt-5">
        <div class="py-6 px-4">
          <div class="bg-blue-200 p-3 rounded-xl inline-block font-bold mb-6">
            <p class="text-sm">Contacto Directo</p>
          </div>
          <h2 class="text-2xl font-bold mb-4 text-white">
            Comencemos a optimizar tus finanzas hoy mismo
          </h2>

          <p class="text-white leading-relaxed mb-4">
            Completa el formulario para una pre-evaluación gratuita de tu situación contable y fiscal. 
            Uno de nuestros socios principales se pondrá en contacto contigo en un plazo menor a 24 horas hábiles.
          </p>
          
          <div class="space-y-2 mb-8">
            <p class="text-sm">Celular: <strong>+504 000-000</strong></p>
            <p class="text-sm">Correo: <strong>contadoresyasesores@contadoreshn.com</strong></p>
            <p class="text-sm">Dirección: <strong>Barrio tamarindo, 3 cuadras al norte</strong></p>
          </div>

        </div>

        <form action="" class="formulario bg-white m-10 rounded-2xl p-6 space-y-4">
          
          <div class="space-y-2">
            <label for="" class="text-sm font-semibold">Nombre Completo</label>
            <input type="text" class="bg-white w-3xs border rounded-lg">
          </div>
          
          <div class="space-y-2">
            <label for="" class="text-sm font-semibold">Correo Electronico</label>
            <input type="text" class="bg-white w-3xs border rounded-lg">
          </div>
          <div class="space-y-2">
            <label for="" class="text-sm font-semibold">Nombre de tu Empresa / Sector</label>
            <input type="text" class="bg-white w-3xs border rounded-lg">
          </div>
          <div class="space-y-2">
            <label for="" class="text-sm font-semibold">Mensaje o Consulta</label>
            <textarea name="" id="" rows="3" class="bg-white w-3xs border rounded-lg w-full"></textarea>
          </div>
          
          <div class="">
            <button class="bg-blue-200 w-full p-3 rounded-xl font-bold hover:bg-blue-300 transition duration-300">Enviar Solicitud</button>
          </div>
        </form>

    </footer>

</template> 

<!-- <template>
    
    <header class="flex justify-between items-center p-4 border-b border-indigo-100">

      <h1 class="text-xl font-bold">Contadores y Asesores</h1>

      <button @click="toggleMenu" class="text-2xl cursor-pointer">☰</button>

      <nav v-show="isOpenMenu" class="fixed inset-0 flex flex-col z-50 items-center justify-center gap-8 bg-blue-400">

        <button @click="toggleMenu" class="absolute top-4 right-4 text-2xl cursor-pointer">✕</button>

        <ul class="flex flex-col gap-6 text-center">
          <li>
            <a href="#preguntas" @click="isOpenMenu = false">Preguntas</a>
          </li>
          <li>
            <a href="#servicios" @click="isOpenMenu = false">Servicios</a>
          </li>
          <li>
            <a href="#nosotros" @click="isOpenMenu = false">Nosotros</a>
          </li>
        </ul>

        <button class="bg-blue-500 px-6 py-2 rounded-lg font-semibold">Agendar Cita</button>

      </nav>

    </header>

    <main class="flex flex-col p-4">

      <section class="mt-8 mb-12">
        <div class="bg-blue-200 p-3 rounded-xl text-center mb-6 inline-block w-full">
          <p class="text-sm font-semibold">ASESORIA FISCAL & ASESORIA CONTABLE</p>
        </div>
        
        <h2 class="text-2xl font-bold mb-4">Rigurosidad Contable y Planeación Fiscal Estratégica</h2>
        
        <p class="text-base leading-relaxed mb-6">Impulsamos el crecimiento de su empresa con una gestión financiera impecable, 
          total transparencia y cumplimiento normativo estricto bajo el respaldo de González & Asociados.</p>
        
        <a href="#servicios" class="block bg-blue-300 p-4 text-center text-lg font-bold rounded-xl cursor-pointer mb-6">Nuestros Servicios</a>
        
        <img class="w-full rounded-xl aspect-square object-cover" src="@/assets/mesa_ejecutiva.jpg" alt="Equipo de Contadores y Asesores">
          
      </section>

      <section class="mb-12" id="nosotros">
        <div class="bg-blue-200 p-3 rounded-xl text-center mb-6 inline-block">
          <h3 class="text-sm font-semibold">Sobre Nosotros</h3>
        </div>

        <p class="text-base leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam earum quidem accusamus iste, 
          vero cumque blanditiis esse sed error, officiis facilis repellat itaque unde architecto veniam dolorem at distinctio rem? Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Minima odit labore nostrum fugiat consequuntur placeat quasi voluptates autem dolorem, 
          qui neque praesentium omnis, quidem deserunt hic ab veritatis sunt laboriosam.
        </p>
      </section>

    </main>

    <footer class="py-8 px-4">

      <div class="mb-12">
        <div class="bg-blue-200 p-3 rounded-xl text-center mb-6 inline-block font-bold">
          <p class="text-sm">Contacto Directo</p>
        </div>

        <h2 class="text-2xl font-bold mb-4">Comencemos a optimizar tus finanzas hoy mismo</h2>

        <p class="text-base leading-relaxed mb-4">
          Completa el formulario para una pre-evaluación gratuita de tu situación contable y fiscal. 
          Uno de nuestros socios principales se pondrá en contacto contigo en un plazo menor a 24 horas hábiles.
        </p>

        <div class="space-y-2 mb-8">
          <p class="text-sm"><strong>Celular:</strong> +504 XXXX-XXXX</p>
          <p class="text-sm"><strong>Correo:</strong> info@gonzalezasociados.com</p>
          <p class="text-sm"><strong>Dirección:</strong> Tegucigalpa, Honduras</p>
        </div>
      </div>

      <form class="bg-white rounded-2xl p-6 space-y-4">
        <div class="space-y-2">
          <label for="nombre" class="block text-sm font-semibold">Nombre Completo</label>
          <input type="text" id="nombre" name="nombre" class="w-full bg-gray-100 p-3 rounded-lg border border-gray-300" required>
        </div>

        <div class="space-y-2">
          <label for="correo" class="block text-sm font-semibold">Correo Electrónico</label>
          <input type="email" id="correo" name="correo" class="w-full bg-gray-100 p-3 rounded-lg border border-gray-300" required>
        </div>

        <div class="space-y-2">
          <label for="empresa" class="block text-sm font-semibold">Nombre de tu Empresa / Sector</label>
          <input type="text" id="empresa" name="empresa" class="w-full bg-gray-100 p-3 rounded-lg border border-gray-300" required>
        </div>

        <div class="space-y-2">
          <label for="mensaje" class="block text-sm font-semibold">Mensaje o Consulta</label>
          <textarea id="mensaje" name="mensaje" rows="4" class="w-full bg-gray-100 p-3 rounded-lg border border-gray-300"></textarea>
        </div>

        <button type="submit" class="w-full bg-blue-300 p-4 rounded-lg font-bold text-lg">Enviar Solicitud</button>
      </form>

    </footer>

</template>  -->
