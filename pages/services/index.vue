<template>
  <div>
      <main class="main-des">
      <div class="side-bar">
        <ul>
          <NuxtLink to="/"><li data-aos="fade-right" data-aos-delay="300">{{ $t("Home") }}</li></NuxtLink>
          <NuxtLink to="/services"><li data-aos="fade-right" data-aos-delay="400">{{ $t("Services") }}</li></NuxtLink>
          <NuxtLink to="/order"><li data-aos="fade-right" data-aos-delay="500">{{ $t("Order") }}</li></NuxtLink>
          <NuxtLink to="/contact"><li data-aos="fade-right" data-aos-delay="600">{{ $t("Contact") }}</li></NuxtLink>
          <NuxtLink to="/about"><li data-aos="fade-right" data-aos-delay="700">{{ $t("About") }}</li></NuxtLink>
        </ul>
      </div>
      <div class="center-section"> 
        <div class="content-section" data-aos="fade-down">
          <h3 class="title">
            <img src="../../public/assets/images/WhiteSea-Figma.png" alt="">
            {{ $t("Services") }}
            <img style="transform: rotateZ(180deg);" src="../../public/assets/images/WhiteSea-Figma.png" alt="">
          </h3>
          <div class="d-flex justify-content-around our-services">
            <img src="../../public/assets/images/Commercial.png" alt="">
            <img src="../../public/assets/images/Electrical.png" alt="">
            <img src="../../public/assets/images/Personal.png" alt="">
          </div>
          <div class="d-flex justify-content-around mt-2">
            <span style="font-weight: bold;">{{ $t("Commercial_Goods") }}</span>
            <span style="font-weight: bold;">{{ $t("Electrical_Devices") }}</span>
            <span style="font-weight: bold;">{{ $t("Personal_Luggage") }}</span>
          </div>
        </div>
      </div>
      <div class="fin-bar">
        <nav data-aos="fade-left" data-aos-delay="300">
          <input id="toggle" type="checkbox" checked>
         <h2>{{ $i18n.locale === "ar" ? "العربية" : "English" }}</h2>
       <ul>
         <li @click="changeLanuage()">English</li>
         <li @click="changeLanuage()">العربية</li>
       </ul>
    </nav>
      </div>
    </main>
    <!-- ******************* for Mobile screen ******************* -->
    <main class="main-mob">
      <div class="d-flex justify-content-between">
          <div class="side-bar">
            <ul>
              <li data-aos="fade-right" data-aos-delay="300">
                <img class="m-1" src="../../public/assets/images/log-in.png" alt="">
                {{ $t("login") }}
              </li>
               <NuxtLink to="/"><li data-aos="fade-right" data-aos-delay="400">{{ $t("Home") }}</li></NuxtLink>
               <NuxtLink to="/services"><li data-aos="fade-right" data-aos-delay="500">{{ $t("Services") }}</li></NuxtLink>
            </ul>
          </div>
          <div class="fin-bar">
            <nav data-aos="fade-left" data-aos-delay="300">
              <input id="toggle" type="checkbox" checked>
             <h2>{{ $i18n.locale === "ar" ? "العربية" : "English" }}</h2>
           <ul>
             <li @click="changeLanuage()">English</li>
             <li @click="changeLanuage()">العربية</li>
           </ul>
        </nav>
          </div>
      </div>

      <div class="center-section"> 
        <div class="content-section" data-aos="fade-down">
          <h3 class="title">
            <img src="../../public/assets/images/WhiteSea-Figma.png" alt="">
            {{ $t("Services") }}
            <img style="transform: rotateZ(180deg);" src="../../public/assets/images/WhiteSea-Figma.png" alt="">
          </h3>
          <div class="d-flex justify-content-around our-services">
            <img src="../../public/assets/images/Commercial.png" alt="">
            <img src="../../public/assets/images/Electrical.png" alt="">
            <img src="../../public/assets/images/Personal.png" alt="">
          </div>
          <div class="d-flex justify-content-around mt-2">
            <span style="font-weight: bold;">{{ $t("Commercial_Goods") }}</span>
            <span style="font-weight: bold;">{{ $t("Electrical_Devices") }}</span>
            <span style="font-weight: bold;">{{ $t("Personal_Luggage") }}</span>
          </div>
        </div>
      </div>
        <div class="side-bar" >
          <ul>
          <NuxtLink to="/order"><li data-aos="fade-right" data-aos-delay="300">{{ $t("Order") }}</li></NuxtLink>
          <NuxtLink to="/contact"><li data-aos="fade-right" data-aos-delay="400">{{ $t("Contact") }}</li></NuxtLink>
          <NuxtLink to="/about"><li data-aos="fade-right" data-aos-delay="500">{{ $t("About") }}</li></NuxtLink>
          </ul>
        </div>
        <div class="social">
        <div class="social">
          <a target="_blank" href="https://instagram.com/whitseashipping?igshid=YmMyMTA2M2Y=">
            <img class="mb-2" src="../../public/assets/images/instagram.png" alt="">
          </a>
          <a target="_blank" href="https://www.facebook.com/profile.php?id=100087797435148">
            <img class="mb-2" width="40" src="../../public/assets/images/facebook.png" alt="">
          </a>
          <a target="_blank" href="">
            <img class="mb-2" width="40" src="../../public/assets/images/twitter.png" alt="">
          </a>
        </div>
        </div>
  </main>
  </div>
</template>

<script>
import { mapState} from "vuex";
export default {
  name: "home",
  components: {
    
  },
  data() {
    return {
    };
  },
  mounted() {
  },
   computed: {
    ...mapState({
      locale: "locale",
      locales: "locales",
    }),
    },
  methods: {
   async changeLanuage() {
      await new Promise((resolve) => setTimeout(resolve, 500));
      let lang =
        this.locale.lang == "ar"
          ? this.locales[1].value
          : this.locales[0].value;
      this.$store.commit("SET_LANG", { lang });
      this.$i18n.locale = lang;
    },
  },
};
</script>

<style scoped>
.main-mob .social {
  bottom: 60px !important;
}
</style>
