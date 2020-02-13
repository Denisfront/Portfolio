export default {
    namespaced: true,
    state: {
        categories: []
    },

    mutations: {
        SET_CATEGORY: (state, data) => state.categories = data
    },
    actions: {
        async addCategory(store, title) {  

            const response = await this.$axios.post('/categories', { title })   
            .catch((error) => {
                error.response.data.error || error.response.data.message
                // console.log(error.message);
            });
        // try {
        //     const response = await this.$axios.post('/categories', { title })   
        // } catch (error) {
        //     throw new Error ( 
        //         error.response.data.error || error.response.data.message  
        //     );
           
        // }


        },
        async fetchCategories({ commit }) {
            try {
             const { data } = await this.$axios.get('/categories/256') 
             commit("SET_CATEGORY", data);
             console.log(data); 
            } catch (error) {
                
            }
        } 
    }
};