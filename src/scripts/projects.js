import Vue from "vue";

const preview = {
    template: "#slider-preview",
    props: ["projects", "currentWork"]
};

const btns = {
    template: "#slider-btns",

};

const display = {
    template: "#slider-display",
    components: {
        preview,
        btns
    },
    props: ["projects", "currentWork", "currentIndex"],
    computed: {
        reverseWorks() {
            return [...this.projects].reverse();
        }
    }

};

const tags = {
    template: "#slider-tags",
    props: ["tags"]
};

const info = {
    template: "#slider-info",
    components: {
        tags
    },
    props: ["currentWork"],
    computed: {
        tagsArray() {
            return this.currentWork.skills.split(', ');
        }
    }
};


new Vue({
    el: "#slider-component",
    template: "#slider-container",
    components: {
        display,
        info
    },
    data() {
        return {
            projects: [],
            currentIndex: 0
        }
    },
    computed: {
        currentWork() {
            return this.projects[this.currentIndex]
        }
    },
    methods: {
        makeArrWithRequiredImages(data) {
            return data.map(item => {
                const requiredPic = require(`../images/slider-projects/${item.photo}`);
                item.photo = requiredPic;
                return item;
            });
        },
        handleSlide(direction) {
            switch (direction) {
                case 'next':
                    this.currentIndex++;
                    break;
                case 'prev':
                    this.currentIndex--;
                    break;
            }
        },
        makeInfiniteLoopForCurIndex(value) {
            const worksAmount = this.projects.length - 1;
            if (value > worksAmount) this.currentIndex = 0;
            if (value < 0) this.currentIndex = worksAmount;
        }
    },

    watch: {
        currentIndex(value) {
            this.makeInfiniteLoopForCurIndex(value);
        }
    },
    created() {
        const data = require("../data/projects.json");
        this.projects = this.makeArrWithRequiredImages(data);
    }
});