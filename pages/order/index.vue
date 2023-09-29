<template>
 <div>
     <main class="main-des order-tracking">
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
        <form class="content-section" v-if="request"  data-aos="fade-down">
          <h3 class="title">
            <img src="../../public/assets/images/WhiteSea-Figma.png" alt="">
            {{ $t("Order") }}
            <img style="transform: rotateZ(180deg);" src="../../public/assets/images/WhiteSea-Figma.png" alt="">
          </h3>
          <p>
            {{ $t("Enter_number") }}
          </p>
          <input type="number" v-model="formData.item_id" placeholder=" _ _ _ _" required  @input="updateValue">
          <button v-if="load" class="Request" >
                        <div class="spinner-border" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
          </button>
          <button v-else @click.prevent="requestOeder"
          class="Request" :class="formData.item_id.length <4? 'disabled':''" :disabled="formData.item_id.length <4">{{ $t("Request") }}
          <span></span><span></span><span></span><span></span>
          </button>
          <div class="alert alert-danger" role="alert" v-if="invaild != false" @click="invaild = false">
                        {{ invaild }}
          </div>
        </form>
        <div class="content-section response" v-else  data-aos="fade-down">
          <h3 class="title">
            <img src="../../public/assets/images/WhiteSea-Figma.png" alt="">
            {{ $t("Order") }}
            <img style="transform: rotateZ(180deg);" src="../../public/assets/images/WhiteSea-Figma.png" alt="">
          </h3>
          <div class="response-info">
            <div>
              <span>{{ $t("Notice_number") }}</span>
              <h6>{{response.item.item_id}}</h6>
            </div>
            <div class="bord-un">
            <hr class="h-left">
              <span>{{ $t("Status") }}</span>
              <h6>{{response.status}}</h6>
            <hr class="h-right">
            </div>
            <div>
              <span>{{ $t("Expected_Time") }}</span>
              <h6>{{response.estimation}}</h6>
            </div>
          </div>
          <button class="Request" @click="request = !request">
            {{ $t("New_Request") }}
            <span></span><span></span><span></span><span></span>
            </button>
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
    <main class="main-mob order-tracking">
      <div class="d-flex justify-content-between">
          <div class="side-bar">
            <ul>
              <li data-aos="fade-right" data-aos-delay="300">
                <img class="m-1" src="../../public/assets/images/log-in.png" alt="">
                {{ $t("login") }}
              </li>
              <NuxtLink to="/"><li data-aos="fade-right" data-aos-delay="400">{{ $t("Home") }}</li></NuxtLink>
              <NuxtLink to="/services"><li data-aos="fade-right" data-aos-delay="500">{{ $t("Services") }}</li></NuxtLink>
              <NuxtLink to="/order"><li data-aos="fade-right" data-aos-delay="600">{{ $t("Order") }}</li></NuxtLink>
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
        <form class="content-section" v-if="request" data-aos="fade-down">
          <h3 class="title">
            <img src="../../public/assets/images/WhiteSea-Figma.png" alt="">
            {{ $t("Order") }}
            <img style="transform: rotateZ(180deg);" src="../../public/assets/images/WhiteSea-Figma.png" alt="">
          </h3>
          <p>
            {{ $t("Enter_number") }}
          </p>
          <input type="number" v-model="formData.item_id" placeholder=" _ _ _ _" required  @input="updateValue">
          <button v-if="load" class="Request" >
                        <div class="spinner-border" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
          </button>
          <button v-else @click.prevent="requestOeder"
          class="Request" :class="formData.item_id.length <4? 'disabled':''" :disabled="formData.item_id.length <4">{{ $t("Request") }}
          <span></span><span></span><span></span><span></span>
          </button>
          <div class="alert alert-danger" role="alert" v-if="invaild != false" @click="invaild = false">
                        {{ invaild }}
          </div>
        </form>
        <div class="content-section response" v-else data-aos="fade-down">
          <h3 class="title">
            <img src="../../public/assets/images/WhiteSea-Figma.png" alt="">
            {{ $t("Order") }}
            <img style="transform: rotateZ(180deg);" src="../../public/assets/images/WhiteSea-Figma.png" alt="">
          </h3>
          <div class="response-info">
            <div>
              <span>{{ $t("Notice_number") }}</span>
              <h6>{{response.item.item_id}}</h6>  
            </div>
            <div class="bord-un">
            <hr class="h-left">
              <span>{{ $t("Status") }}</span>
              <h6>{{response.status}}</h6>
            <hr class="h-right">
            </div>
            <div>
              <span>{{ $t("Expected_Time") }}</span>
              <h6>{{response.estimation}}</h6>
            </div>
          </div>
          <button class="Request" @click="request = !request">
            {{ $t("New_Request") }}
            <span></span><span></span><span></span><span></span>
            </button>
        </div>
      </div>
       <div class="side-bar" >
          <ul>
          <NuxtLink to="/contact"><li data-aos="fade-right" data-aos-delay="300">{{ $t("Contact") }}</li></NuxtLink>
          <NuxtLink to="/about"><li data-aos="fade-right" data-aos-delay="400">{{ $t("About") }}</li></NuxtLink>
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
import "../../locales/ar";
import "../../locales/en";
export default {
  name: "home",
  components: {
   
  },
  data() {
    return {
      formData:{
    "action":"status",
    "item_id":""
                    },
      request:true,
      invaild:false,
      load:false,
      response:{}
    };
  },
   computed: {
    ...mapState({
      locale: "locale",
      locales: "locales",
    }),
    },
  methods: {
    requestOeder(){
      var slef = this;
		  slef.load = true;
      slef.$axios
            .post(`https://whiteseaqar.com/admin/api/v1`, this.formData)
            .then(function(res) {
              if (res.data.error != "Invalid Item Id") { 
               		  slef.load = false;
               		  slef.request = false;
               		  slef.response = res.data;
                    slef.invaild ="";
              }
              else{
                 slef.load = false;
                  if(slef.$i18n.locale === "ar"){
                    slef.invaild = 'كود غير صحيح تأكد من صحة الرقم';
                  }
                  else{
                     slef.invaild = 'Invalid code Make sure the number is correct';
                  }
                 setTimeout(() => {
                    slef.invaild ="";
                 }, 5000);
              }
            })
            .catch(function(error) {
              if (error.response) {
                self.load = false;
                if(slef.$i18n.locale === "ar"){
                    slef.invaild = 'خطأ!! الرجاء المحاولة مرة أخرى';
                  }
                  else{
                     slef.invaild = 'Wrong!! Try Again Please';
                  }
                setTimeout(() => {
                    slef.invaild ="";
                 }, 5000);
              }
            });
    },
    updateValue(event) {
      const value = event.target.value
      if (String(value).length <= 4) {
        this.formData.item_id = value
      }
      this.$forceUpdate()
    },
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
  mounted(){

  }

};
</script>

<style lang="scss" scoped>
.main-mob .social {
  bottom: 15px !important;
}
.disabled{
  cursor: no-drop !important;
  opacity: .7;
  &:hover {
    color: #0a5bc7 !important;
  }
  &:hover span{
   transform: translateY(150%) !important;
  }
}
</style>