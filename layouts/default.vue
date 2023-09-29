<template>
  <div>
      <div class="video">
    <img src="../public/assets/images/cover.png" alt="">
   </div>
    <Loading/>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Loading from "~/components/Loader/loading.vue";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
// import {mapGetters,mapState} from "vuex";
export default {
  name: "app",
  components: {
    Header,
    Footer,
    Loading
  },
   head() {
    return {
      title:
        this.$i18n.locale === "ar"
          ? "White Sea"
          : "White Sea",
      htmlAttrs: {
        lang: this.$i18n.locale,
        dir: this.$i18n.locale === "ar" ? "ltr" : "ltr",
      },
    };
  },
   data() {
    return {
     
    }
   },
computed: {
//  ...mapState({
//       blog: "blog",
//     }),
    // ...mapGetters({ 
    //   isUserLogged: "auth/logged",
    //   }),

  },
  methods: {
    // async  fetch() {
    //        await this.$axios
    //             .get(`/boolean`)
    //             .then((response) => {
    //                this.$store.commit("setblog", response.data.value);
    //                 // console.log("blog:",this.blog);
                    
    //             })
    //             .catch(function (error) {
    //                 console.warn('------ Error ------: ', error);
    //             });
    //     },
  },
  mounted(){
 
  },
  created(){
    // this.fetch();
    // this.$axios.setHeader('Authorization', `Bearer ${localStorage.getItem('UserToken')}`);
  }
};
</script>
<style scoped>
.not-active{
  display: none;
}
</style>
