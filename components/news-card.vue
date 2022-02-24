<template>
  <div class="NewsCard" @click.prevent="toNews(data.id)">
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

    <!-- <div class="users">{{ data.users }} </div> -->
  </div>
</template>

<script>
export default {
  name: 'NewsCard',
  props: {
    data: {
      id: Number,
      title: String,
      text: String,
      tags: Array,
      users: Array,
    },
  },
  methods: {
    toNews(id) {
      this.$router.push('/news/' + id)
    },
  },
}
</script>

<style scoped>
.NewsCard {
  /* margin: auto; */
  display: flex;
  width: 40vmax;
  min-width: 250px;
  flex-direction: column;
  /* ba-color: white; */
  /* background-color: white; */
  background-color: var(--second-color);

  padding: 0.75rem;
  margin-bottom: 0.5rem;
  border-radius: 1rem;

  border: 0.25rem var(--third-color) solid;
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
  max-height: 8.4rem;
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
