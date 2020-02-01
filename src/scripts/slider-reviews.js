import vue from 'vue';
import Flickity from 'vue-flickity';

new vue({

    el: '#slider-reviews',
    components: {
        Flickity
    },
    data() {
        return {
            numberOfDisplayedItems: {
                groupCells: null
            },
            flickityOptions: {
                initialIndex: 0,
                prevNextButtons: false,
                pageDots: false,
                wrapAround: true,
                groupCells: 'numberOfDisplayedItems',
                freeScroll: false,
                cellAlign: 'left'
            }
        }
    },

    methods: {
        next() {
            this.$refs.flickity.next();
        },

        previous() {
            this.$refs.flickity.previous();
        },

        onresize() {
            this.numberOfDisplayedItems = addEventListener.clientWidth > 480 ? 2 : 1;
        },
        created() {
            window.addEventListener('resize', this.onResize);
            this.onResize();
        },

        beforeDestroy() {
            window.removeEventListener('resize', this.onResize);
        }
    }
});