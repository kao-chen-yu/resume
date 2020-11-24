import Vue from 'vue';
import Router from 'vue-router';

import HelloWorld from './../components/HelloWorld.vue';
import Experience from './../components/Experience.vue';

Vue.use(Router);


export default new Router({
	routes: [
    { 
			path: '/',  
			name: 'HelloWorld',
			component: HelloWorld,
			afterEach:() => {
							document.body.scrollTop = 0;
							document.documentElement.scrollTop = 0;
			}			
	},
	{ 
			path: '/experience',  
			name: 'Experience',
			component: Experience,
			afterEach:() => {
							document.body.scrollTop = 0;
							document.documentElement.scrollTop = 0;
			}	
	}
  ]
	
	
});