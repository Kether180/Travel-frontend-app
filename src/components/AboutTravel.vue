<template>
<title> About Us </title>
  <h1 class="bg-blue text-center text-white bg-gray-800">{{msg}} </h1>

</template>

<script>
export default {
  name: 'About',
  props: {
      msg: String
  }
}
</script>
