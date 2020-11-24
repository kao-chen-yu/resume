<template>
  <div class="hello">
    <h5>姓名：{{ name }}</h5>
	<h5>希望求職地點 : {{ location }}</h5>
	<h5>科系 : {{ system }}</h5>
	<h5>E-mail : {{ e_mail }}</h5>
	<h5>手機 : {{ phone }}</h5>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  props: {
    msg: String,
	name : String ,
	location : String ,
	system : String ,
	e_mail : String ,
	phone : String ,
  }
}
</script>
