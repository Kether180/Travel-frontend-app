<template>
  <footer class="footer relative  bottom-0  w-full  mt-32 bg-center bg-no-repeat bg-cover pt-24 text-center h-72 z-0">
    <div class=" text-sm text-gray-900">
      <a href="https://.com/" target="_blank">
        &copy; 2021 Alexander Garcia Angus
      </a>
    </div>
    <div >
      <a class="m-2 inline-block text-3xl md:text-2xl transform hover:scale-110 hover:-translate-y-px transition-transform duration-300 ease-in-out " href="mailto:conscientia.digitaltech@gmail.com">
        <i class="fas fa-envelope"></i>
      </a>
      <a class="m-2 inline-block text-3xl md:text-2xl transform hover:scale-110 hover:-translate-y-px transition-transform duration-300 ease-in-out " target="_blank" href="https://github.com/kether180">
        <i class="fab fa-github"></i>
      </a>
      <a class="m-2 inline-block text-3xl md:text-2xl transform hover:scale-110 hover:-translate-y-px transition-transform duration-300 ease-in-out " target="_blank" href="https://www.facebook.com/conscientia.digitaltech">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a class="m-2 inline-block text-3xl md:text-2xl transform hover:scale-110 hover:-translate-y-px transition-transform duration-300 ease-in-out " target="_blank" href="https://www.instagram.com/conscientia.digitaltech/">
        <i class="fab fa-instagram"></i>
      </a>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
  };
</script>

<style scoped>
  .footer {
    background-image: linear-gradient(to top, rgba(238, 240, 228, 0.972), rgb(242, 241, 247), rgba(255, 255, 255, 1))
  }
</style>