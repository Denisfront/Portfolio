export default {
    namespaced: true,
    actions: {
        async addSkill({commit}, skill ) {
          const {data} = await this.$axios.post('/skills', skill)
          .catch((error) => {
            error.response.data.error || error.response.data.message
          })
          commit('categories/ADD_SKILL', data, {root: true});
        }
    }
};