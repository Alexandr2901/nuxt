<template>
	<div id="Navbar">
		<ul>
			<li>
				<nuxt-link active-class="highlighted" exact to="/"> Home </nuxt-link>
			</li>
			<li>
				<nuxt-link active-class="highlighted" to="aboutPage"> About </nuxt-link>
			</li>
			<li>
				<nuxt-link  active-class="highlighted" to="news"> news </nuxt-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'navigation-bar'
}
</script>

<style scoped>
#Navbar {
	padding: 1rem;
}
ul {
	list-style-type: none;
}
li {
	display: inline;
	margin: 1rem;
	font-size: 1.5rem;
}
a {
	text-decoration: none;
	color: var(--text-color);
}
.highlighted{
    font-weight: bold;
}
</style>
