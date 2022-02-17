<template>
	<div>
		<div v-if="news.length !== 0">
			<div v-for="item in news" :key="item.id">
				{{ item.id }}
			</div>
		</div>

		<div class="end">this is end</div>

		<!-- <h1>{{ news.data[0] }}</h1> -->
	</div>
</template>

<script>
export default {
  // validate({params}) {
  //   // alert(params.page)
  //   if (!params.page) {
  //     params.page=1
  //   }
  //   // return /^\d+$/.test(params.id)
  // },
    data() {
      return {
        news: [],
        page:1,
        count:30
      }
    },
//   async fetch({$axios, params}) {
//     const news = await $axios.$get('news?page='+ 1)
//     return {news}
//   },
  async fetch() {
    await this.$axios.$get(`news?count=${this.count}`).then((res)=>{
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
      // console.log(this.news);
    })
    },
    setLoadingObserver() {
      /* создаём наблюдение */
      const loadingObserver = new IntersectionObserver(entries => {
        // console.log('hi');
        entries.forEach(entry => { /* для каждого элемента */
          if (entry.isIntersecting) { /* если элемент в видимой области браузера */
            // if (this.page > 10) { /* если значение страницы уже больше 10 */
            //   this.more = false /* то назначаем значение false */
            //   return /* и прекращаем выполнение функции */
            // }
            this.addNews()
            // setTimeout(() => { 
            //   this.addNews() 
            // }, 1000) 

          }
        })
      });
      /* указываем, что наблюдаем за лоадером */
      loadingObserver.observe(document.querySelector('.end'))
    },

  },
//   computed: {
//     users() {
//       return this.$store.getters['users/users']
//     }
//   },

}
</script>

<style>
.end {
	border: 5px black solid;
	padding-top: 100px;
	width: 100%;
	height: 300px;
	visibility: hidden;
}
</style>