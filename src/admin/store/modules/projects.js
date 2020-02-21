export default {
    namespaced: true,

    state: {
        projects: [],
    },

    mutations: {
        SET_PROJECT: (state, data) => (state.projects = data),
        ADD_PROJECT: (state, project) => state.projects.push(project),
        REMOVE_PROJECT: (state, deletedProject) => {
            const removeProjectInReviews = projects => {
                projects = projects.filter(
                    projects => projects.id !== deletedProject.id
                );
            };

            const findProject = projects => {
                if(projects.id === deletedProject.projects) {
                    removeProjectInReviews(projects);
                }
                return projects;
            };
            state.projects = state.projects.map(findProject)
        },
    },                                                                                                                                                      

    actions: {
        async addProject({commit}, project) {

            const formData = new FormData();

            Object.keys(project).forEach(key => {
                const value = project[key];
                formData.append(key, value);  
            });
          const { data } = await this.$axios.post('/works', formData);
          
          commit("ADD_PROJECT", data);
        },

        async fetchProjects({ commit }) {
            try {
             const { data } = await this.$axios.get('/works/256') 
             commit("SET_PROJECT", data);
             console.log(data);
            } catch (error) {
                
            }
        },
        async removeProject({ commit }, project) {
            const { data } = await this.$axios.delete(`/works/${project.id}`, project)
            .catch((error) => {
                error.response.data.error || error.response.data.message
              });
            console.log(project);
            commit("REMOVE_PROJECT", project);               
       },
    //     async editReview({ commit }, review) {
    //         const { data } = await this.$axios.post(`/reviews/${review.id}`, review)
    //         .catch((error) => {
    //             error.response.data.error || error.response.data.message
    //           });
    //         console.log(review);
    //         commit("REMOVE_REVIEW", data.review);                      
    //    },
      
    }

}