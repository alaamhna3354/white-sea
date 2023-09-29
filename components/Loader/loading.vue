<template>
    <div v-if="loading">>
    <div class="water"></div>
    <div class="overlay"></div>
    </div>

</template>

<script>
import { mapState} from "vuex";
export default {
  data: () => ({
  }),
  
  methods: {
      stopLoading() {
        const self = this;
        $( document ).ready(function() {
        self.$store.commit("setLoading", false);
    });
    },
  },
  computed: {
    ...mapState(["loading"]),
  },
  created() {
     this.stopLoading();
  },
};
</script>
<style lang="scss" scoped>
.overlay{
    width: 100%;
    height: 100%;
    background-color: #234d5d;
    position: fixed;
    z-index: 99;
    top: 0;
}
.water{
    width:400px;
    height: 400px;
    background-color: skyblue;
    border-radius: 50%;
    position: fixed;
    box-shadow: inset 0 0 30px 0 rgba(0,0,0,.5), 0 4px 10px 0 rgba(0,0,0,.5);
    overflow: hidden;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 100;
}
.water:before, .water:after{
    content:'';
    position: absolute;
    width:400px;
    height: 400px;
    top:-150px;
    background-color: #fff;
}
.water:before{
    border-radius: 45%;
    background:rgba(255,255,255,.7);
    animation:wave 5s linear infinite;
}
.water:after{
    border-radius: 35%;
    background:rgba(255,255,255,.3);
    animation:wave 5s linear infinite;
}
@keyframes wave{
    0%{
        transform: rotate(0);
    }
    100%{
        transform: rotate(360deg);
    }
}
</style>
