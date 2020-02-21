// const circle = document.querySelector('.circle__round');
// const radius = circle.r.baseVal.value;
// const circumference = 2 * Math.PI * radius;

// circle.style.strokeDasharray = `${circumference} ${circumference}`;
// circle.style.strokeDashoffset = circumference;

// function setProgress(percent) {
//     const offset = circumference - percent / 100 * circumference;
//     circle.style.strokeDashoffset = offset;
// }

// setProgress(35);

import vue from "vue";
import axios from "axios";

const $axios = axios.create({
    baseURL: 'https://webdev-api.loftschool.com/'
});

const skill = {
    template: "#skill",
    props: {
        skill: Object
    },
    methods: {
        drawColoredCircle() {
            const circle = this.$refs["color-circle"];
            const dashArray = parseInt(
                getComputedStyle(circle).getPropertyValue("stroke-dasharray")
            );
            console.log(dashArray);
            const percent = (dashArray / 100) * (100 - this.skill.percent);

            circle.style.strokeDashoffset = percent;
        }
    },
    mounted() {
       this.drawColoredCircle();
    }
};

const skillsItem = {
    template: "#skills-item",
    components: {
        skill
    },
    props: ["skill"]
};

new vue({
    el: "#skills-component",
    template: "#skills-list",
    data() {
        return {
            skills: []
        };
    },
    components: {
        skillsItem
    },

    async created() {
        const { data } = await $axios.get('/categories/256');
        this.skills = data;
    }

});