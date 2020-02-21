import Vue from 'vue';
import SimpleVueValidation from 'simple-vue-validator';
import axios from 'axios';
const Validator = SimpleVueValidation.Validator;

  Vue.use(SimpleVueValidation);

new Vue({
    validators: {
        'message.name'(value) {
            return Validator.value(value).required('Ой, кажется вы забыли ввести имя');
        },

        'message.email'(value) {
            return Validator.value(value).required('Ой, кажется вы забыли указать email');
        },

        'message.comment'(value) {
            return Validator.value(value).required('Ой, кажется вы забыли указать комментарий');
        }
    },

    el: '#form',    
    data: {
        message: {
            name: '',
            email: '',
            comment: ''
        }
    },
    methods: {
        send() {
            this.$validate().then(success => {
                if(!success) return;
                alert('Никита, извини, не успел допилить toolTip, он свёрстан, но прикрутить не успел((');
                this.validation.reset();
            })
        }
    }
})