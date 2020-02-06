import vue from 'vue';
import axios from 'axios';


new vue({
    el: '#form',    
    data: {
        errors: [],

        message: {
            name: '',
            email: '',
            comment: ''
        }
    },

    methods: {
        validateForm: function (e) {

            this.errors = [];

            if (!this.name) {
                this.errors.push('Ой, кажется вы забыли указать имя');
            } 

            if (!this.email) {
                this.errors.push('Ой, кажется вы забыли указать email');
            }

            if (!this.errors.length) {
                return true;
            }
              
            e.preventDefault();
        },
        
        submission() {
            console.log(this.message);
        },

    }
})