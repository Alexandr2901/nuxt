<template>
  <div>
    <div class="filters">
      <!-- <div>Selected: {{ user }}</div> -->
      <select v-model.lazy="user" @change="update()">
        <option disabled value="">Please select one</option>
        <option v-for="item in filters.users" :key="item.id">
          {{ item.name }}
        </option>
      </select>
      <!-- <div>Selected: {{ tag }}</div> -->
      <select v-model.lazy="tag" @change="update()">
        <option disabled value="">Please select one</option>
        <option v-for="item in filters.tags" :key="item">{{ item }}</option>
      </select>
    </div>
    <!-- {{filters.tags}} -->

    <div class="news">
      <NewsCard v-for="item in news" :key="item.id" :data="{ ...item }" />
    </div>
    <div v-show="!newsOver" class="end"></div>
  </div>
</template>

<script>
import NewsCard from '@/components/news-card'

export default {
  omponents: {
    NewsCard,
  },
  data() {
    return {
      newsOver: false,
      news: [],
      page: 1,
      count: 30,
      user: '',
      tag: '',
      // options: [
      //   { text: 'One', value: 'A' },
      //   { text: 'Two', value: 'B' },
      //   { text: 'Three', value: 'C' }
      // ]
    }
  },
  // async asyncData({ $axios }) {
  //   const data  = await $axios.$get(`news?count=30`)
  //   const news = data.data
  //   const lastPage = data.meta.last_page
  //   return { news,lastPage }
  // },
  fetch() {
    this.$axios
      .$get(`news?count=${this.count}&page=` + this.page)
      .then((res) => {
        // console.log(res);
        this.news.push(...res.data)
      })
  },
  computed: {
    filters() {
      return this.$store.getters.filters
    },
  },
  mounted() {
    this.setLoadingObserver()
  },
  methods: {
    update() {
      this.newsOver = true
      this.page = 1
      this.$axios.$get(this.getUrl()).then((res) => {
        this.news = []
        this.news.push(...res.data)
        this.newsOver = false
        this.setLoadingObserver()
      })
    },
    getUrl() {
      const id = this.filters.users.find((item) => item.name === this.user)
      let url = `news?page=${this.page}&count=${this.count}`
      if (id) {
        // console.log(id);
        url += '&users[0]=' + id.id
      }
      if (this.tag) {
        // console.log(id);
        url += '&tags[0]=' + this.tag
      }
      // console.log(url);
      return url
    },
    addNews() {
      this.page++
      this.$axios.$get(this.getUrl()).then((res) => {
        this.newsOver = !(res.meta.from || res.meta.to)
        // console.log(res);
        this.news.push(...res.data)
      })
    },
    setLoadingObserver() {
      const loadingObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (this.newsOver) {
              return
            }
            this.addNews()
          }
        })
      })
      loadingObserver.observe(document.querySelector('.end'))
    },
  },
}
</script>

<style>
.filters {
  display: flex;
  flex-direction: row;
}
.filters > * {
  margin-right: 1rem;
}
.news {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  /* flex: 1 0 12.5%; */
}
.end {
  /* border: 5px black solid; */
  padding-top: 100px;
  width: 100%;
  height: 300px;
}
</style>
