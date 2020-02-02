import vue from "vue";

new vue({
    el: "#form",
    data: {
        errors: [],
        name: null,
        email: null,
        opacity: 0
    },

    methods: {
        greet: function (event) {
            event.preventDefault();
        },

        checkForm: function (e) {

            this.errors = [];

            if (!this.name) {
                this.errors.push('Ой, кажется вы забыли указать имя');
                opacity = 1
            }

            if (!this.email) {
                this.errors.push('Oй, кажется вы забыли указать ваш email');
            } else if (!this.validEmail(this.email)) {
                this.errors.push('Укажите корректный адрес электронной почты.');
            }
            if (!this.errors.length) {
                return true;
            }

            e.preventDefault();

        },
        geet: function(e) {
            
        }
    },
});