export const state = () => ({
    locales: [
      {
        name: "Arabic",
        value: "ar",
      },
      {
        name: "English",
        value: "en",
        
      },
    ],
    locale: { lang: "en" },
    loading: true,
  });

  export const getters = {
    locales: (state) => state.locales,
    locale: (state) => state.locale,
    loading: (state) => state.loading,
};
  export const mutations = {
    SET_LANG(state, locale) {
      state.locale = locale;
      this.$cookies.set("lang", locale);
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
   
  };
  export const actions = {
    // async fetchChairs({ state, commit },page) {
    //   try {
    //     const response = await this.$axios.get(`/chairs?page=${page}`);
    //     commit("setChairs", response.data.data);
    //     commit("SET_total_page", response.data.meta.last_page);
    //   } catch (error) {
    //     console.error({ fetchChairs: error });
    //   }
    // },
    
    
  };

