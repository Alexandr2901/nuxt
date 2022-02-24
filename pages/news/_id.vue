<template>
  <div class="NewsCard">
    <!-- <span class="title">{{ news.data.title }} </span>
		<div maxlength="100" class="text">{{ news.data.text }}</div>
		<div class="items users">
			Authors:&nbsp;
			<div v-for="user in news.data.users" class="user" :key="user.id">
				{{ user.name }}
			</div>
		</div>
		<div class="items tags">
			<div class="tag" v-for="tag in news.data.tags" :key="tag.id">
				{{ tag.name }}
			</div>
		</div> -->

    <span class="title">{{ data.title }} </span>
    <div maxlength="100" class="text">{{ data.text }}</div>
    <div class="items users">
      Authors:&nbsp;
      <div v-for="user in data.users" :key="user.id" class="user">
        {{ user.name }}
      </div>
    </div>
    <div class="items tags">
      <div v-for="tag in data.tags" :key="tag.id" class="tag">
        {{ tag.name }}
      </div>
    </div>

    <!-- <span>{{news.title}}</span>
    <div>{{news.text}}</div>
    <div>{{news}}</div> -->
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  async asyncData({ $axios, params }) {
    const news = await $axios.$get('news/' + params.id)
    // console.log(news);
    // return {news}
    return { ...news }
  },
}
</script>

<style scoped>
.NewsCard {
  display: flex;
  flex-direction: column;
  background-color: var(--second-color);

  padding: 0.75rem;
  margin-bottom: 0.5rem;
  /* border-radius: 1rem; */

  /* border: 0.25rem var(--third-color) solid; */
  overflow: hidden;
  text-overflow: ellipsis;
}
.title {
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.text {
  /* max-height: 8.4rem; */
  line-height: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  text-indent: 2rem;
}
.items {
  display: flex;
  margin-bottom: 0.5rem;
}
.users {
  justify-content: flex-end;
  text-align: right;
}
.items > div {
  margin-left: 0.5rem;
}
.tag {
  background-color: var(--main-color);
  text-transform: uppercase;
  font-weight: bold;
}
</style>
