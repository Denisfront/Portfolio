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
        },
        REMOVE_CATEGORY: (state, deletedCategory) => {
            const removeCategoryInReviews = categories => {
                categories = categories.filter(
                    categories => categories.id !== deletedCategory.id
                );
            };

            const findCategory = categories => {
                if(categories.id === deletedCategory.categories) {
                    removeCategoryInReviews(categories);
                }
                return categories;
            };
            state.categories = state.categories.map(findCategory)
        },
        REMOVE_SKILL: (state, deletedSkill) => {
            const removeSkillInCategory = category => {
                category.skills = category.skills.filter(
                    skill => skill.id !== deletedSkill.id
                );
            };

            const findCategory = category => {
                if(category.id === deletedSkill.category) {
                    removeSkillInCategory(category);
                }
                return category;
            };
            state.categories = state.categories.map(findCategory)
        },
        EDIT_SKILL: (state, editedSkill) => {
            const editSkillInCategory = category => {
                category.skills = category.skills.map( skill => {
                    return skill.id === editedSkill.id ? editedSkill : skill
                });
            };

            const findCategory = category => {
                if(category.id === editedSkill.category) {
                    editSkillInCategory(category);
                }
                return category;
            };
            state.categories = state.categories.map(findCategory)
        }
    },
    actions: {
        async addCategory({commit}, title) {  

            const {data} = await this.$axios.post('/categories', { title })   
            .catch((error) => {
                throw new Error (
                    error.response.data.error || error.response.data.message
                );
            })
            commit('ADD_CATEGORY', data)
        },
        async fetchCategories({ commit }) {
            try {
             const { data } = await this.$axios.get('/categories/256') 
             commit("SET_CATEGORIES", data);
             console.log(data); 
            } catch (error) {
                
            }
        },
        async removeCaregorirs({ commit }, category) {
             const { data } = await this.$axios.delete(`/categories/${category.id}`, category) 
             console.log('category');
             commit("REMOVE_CATEGORY", category);
             
        },
    }
};