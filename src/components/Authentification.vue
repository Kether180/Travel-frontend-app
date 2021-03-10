<template>
  <div id="app">
    <div class='authentification'>
      <h2>VueJS + Google Calendar Example</h2>
      Authentification
      <button v-if='!authorized' @click="handleAuthClick">Sign In</button>
      <button v-if='authorized' @click="handleSignoutClick">Sign Out</button>
    </div>
    <hr>
    <button v-if='authorized' @click="getData">Get Data</button>
    <div class="item-container" v-if="authorized && items">
      <pre v-html="items"></pre>
    </div>
  </div>
</template>