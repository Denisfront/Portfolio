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
const skill = {
    template: "#skill",
    props: ["skillName", "skillPercent"],
    methods: {
        drawColoredCircle() {
            const circle = this.$refs["color-circle"];
            const dashArray = parseInt(
                getComputedStyle(circle).getPropertyValue("stroke-dasharray")
            );
            console.log(dashArray);
            const percent = (dashArray / 100) * (100 - this.skillPercent);

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

    created() {
        const data = require("../data/skills.json");
        this.skills = data;
    }

});