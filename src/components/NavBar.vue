<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light" id="navtop">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#">個人履歷</a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#" @click="test">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" @click="test">個人資料</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" tabindex="-1" aria-disabled="true" @click="test2">工作經歷</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" tabindex="-1" aria-disabled="true" @click="test">工作技能</a>
      </li>

    </ul>

  </div>
</nav>
</template>
<script>
    export default 
	{ 
	
	data() { return { meal: '' } }, 
	methods: { 
	
		getMeal() {} ,
		test(){this.$router.push({ name: 'HelloWorld'})},
		test2(){this.$router.push({ name: 'Experience'})}
	
	
	} 
	}
</script>