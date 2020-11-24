<template>
  <div id="app" :style ="login">		
		<Navbar />	
		<router-view />	
  </div>


</template>

<script>
import Navbar from './components/NavBar.vue';

  export default {
    name: 'App',
	components: {Navbar},
	data () {
	return {
		login: {
            backgroundImage:"url(" + require("./assets/background.jpg") + ")"
        }
	}
	
  }

  }
</script>

