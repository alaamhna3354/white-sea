<template>
  <header>
      <div class="row">
        <div class="head-left">
            <div class="login"><img src="../../public/assets/images/log-in.png" alt="log-in">{{ $t("login") }}</div>
            <div class="logo"><img src="../../public/assets/images/logo.png" alt="logo"> White Sea For Shipping Services</div>
        </div>
        <div class="head-right">
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
    </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
    };
  },
   components: {
  },
  computed: {
  
  },
  methods: {

  },
  mounted() {

  },
  created() {},
};
</script>

<style lang="scss"></style>
