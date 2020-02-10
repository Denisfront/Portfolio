import vue from 'vue';
import SimpleVueValidator from 'simple-vue-validator';
import axios from 'axios';

vue.use(SimpleVueValidator);
import {Validator} from 'simple-vue-validator';

new vue({
    // mixins: [require(simple-vue-validator).mixins],
    mixins: [SimpleVueValidator.mixin],
    validators: {
        'message.name'(value) {
            return Validator.value(value).required('Ой, кажется вы забыли ввести имя');
        }
    },

    el: '#form',    
    data: {
        errors: [],

        message: {
            name: '',
            email: '',
            comment: ''
        }
    }

//     methods: {
//         validateForm: function (e) {
//             // @submit="validateForm"
//             // v-on:submit="submission"
//             this.errors = [];

//             if (!this.name) {
//                 this.errors.push('Ой, кажется вы забыли указать имя');
//             } 

//             if (!this.email) {
//                 this.errors.push('Ой, кажется вы забыли указать email');
//             }

//             if (!this.errors.length) {
//                 return true;
//             }
              
//             e.preventDefault();
//         },
        
//         submission() {
//             console.log(this.message);
//         },

//     }
})