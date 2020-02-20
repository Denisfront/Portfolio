export default {
    namespaced: true,
    actions: {
        async addSkill({commit}, skill ) {
          const {data} = await this.$axios.post('/skills', skill)
          .catch((error) => {
            error.response.data.error || error.response.data.message
          });
          commit('categories/ADD_SKILL', data, {root: true});
        },

        async removeSkill({commit}, skill) {
          const {data} = await this.$axios.delete(`/skills/${skill.id}`)
          .catch((error) => {
            error.response.data.error || error.response.data.message
          });
          commit('categories/REMOVE_SKILL', skill, {root: true});
        },
        async editSkill({commit}, skill) {
          const { data } = await this.$axios.post(`/skills/${skill.id}`, skill)
          .catch((error) => {
            error.response.data.error || error.response.data.message
          });
          commit('categories/EDIT_SKILL', data.skill, {root: true});
        }
    }
};