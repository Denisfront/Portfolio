export default {
    namespaced: true,
    state: {
        categories: []
    },

    mutations: {
        SET_CATEGORIES: (state, data) => (state.categories = data),
        ADD_CATEGORY: (state, category) => state.categories.push(category),
        ADD_SKILL: (state, newSkill) => {
            state.categories = state.categories.map(category => {
                if(category.id === newSkill.category) {
                    category.skills.push(newSkill);
                }
                return category;
            })
        }
    },
    actions: {
        async addCategory({commit}, title) {  

            const {data} = await this.$axios.post('/categories', { title })   
            commit('ADD_CATEGORY', data)
            // .catch((error) => {
            //     throw new Error (
            //         error.response.data.error || error.response.data.message
            //     );
            // });
        },
        async fetchCategories({ commit }) {
            try {
             const { data } = await this.$axios.get('/categories/256') 
             commit("SET_CATEGORIES", data);
             console.log(data); 
            } catch (error) {
                
            }
        },
    }
};