export default {
    namespaced: true,

    state: {
        reviews: []
    },

    mutations: {
        SET_REVIEWS: (state, data) => (state.reviews = data),
        ADD_REVIEWS: (state, review) => state.reviews.push(review),
        REMOVE_REVIEW: (state, deletedReview) => {
            const removeReviewInReviews = reviews => {
                reviews = reviews.filter(
                    reviews => reviews.id !== deletedReview.id
                );
            };

            const findReview = reviews => {
                if(reviews.id === deletedReview.reviews) {
                    removeReviewInReviews(reviews);
                }
                return reviews;
            };
            state.reviews = state.reviews.map(findReview)
        },
    },

    actions: {
        async addReview({commit}, review) {

            const formData = new FormData();

            Object.keys(review).forEach(key => {
                const value = review[key];
                formData.append(key, value);  
            });
           
          const { data } = await this.$axios.post('/reviews', formData);
          commit("ADD_REVIEWS", data);
        },

        async fetchReview({ commit }) {
            try {
             const { data } = await this.$axios.get('/reviews/256') 
             commit("SET_REVIEWS", data);
             console.log(data);
            } catch (error) {
                
            }
        },
        async removeReviews({ commit }, review) {
            const { data } = await this.$axios.delete(`/reviews/${review.id}`, review)
            .catch((error) => {
                error.response.data.error || error.response.data.message
              });
            console.log(review);
            commit("REMOVE_REVIEW", review);               
       },
        async editReview({ commit }, review) {
            const { data } = await this.$axios.post(`/reviews/${review.id}`, review)
            .catch((error) => {
                error.response.data.error || error.response.data.message
              });
            console.log(review);
            commit("REMOVE_REVIEW", data.review);                      
       },
      
    }

}