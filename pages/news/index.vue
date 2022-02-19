<template>
	<div>
		<div class="news" v-if="news.length !== 0">
      <NewsCard  v-for="item in news" :key="item.id"
      :data="{...item}"
      />
		</div>
		<div v-show="page<lastPage" class="end"></div>
	</div>
</template>

<script>
import NewsCard from '@/components/news-card'

export default {
  omponents: {
    NewsCard
  },
    data() {
      return {
        news: [],
        page:1,
        count:30,
        lastPage:2
      }
    },
    // async asyncData({ $axios }) {
    //   const data  = await $axios.$get(`news?count=30`)
    //   const news = data.data
    //   const lastPage = data.meta.last_page
    //   return { news,lastPage }
    // },
  fetch() {
    this.$axios.$get(`news?count=${this.count}`).then((res)=>{
      // console.log(res);
      this.lastPage = res.meta.last_page
      this.news.push(...res.data)
    })
  },
  mounted () {
  this.setLoadingObserver()
},
  methods:{
    addNews() {
      this.page++
      this.$axios.$get(`news?count=${this.count}&page=`+ this.page).then((res)=>{
        this.news.push(...res.data)
    })
    },
    setLoadingObserver() {
      const loadingObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => { 
          if (entry.isIntersecting) { 
            if (this.page>=this.lastPage) {
            return
          }
            this.addNews()
          }
        })
      });
      loadingObserver.observe(document.querySelector('.end'))
    },

  },
}
</script>

<style>
.news{
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