
// import Vue from "vue";

// new Vue ({
//     el: "#parallax",
//     data: {
//         speed: "0.2" 
//     }

// });

const parallax = document.querySelector('.parallax');
const layers = parallax.children;

function moveLayersDependsOnScroll(wScroll) {

    Array.from(layers).forEach(layer => {
        const divider = layer.dataset.speed;
        const strafe = wScroll * divider / 10;

        layer.style.transform = `translateY(-${strafe}%)`;


    })

}

window.addEventListener('scroll', e => {
    const wScroll = window.pageYOffset;

    moveLayersDependsOnScroll(wScroll);
});


// const parallaxBudda = document.querySelector('.parallax-budda');
// const layersBudda = parallaxBudda.children;

// function moveLayersBuddaDependsOnScroll(wScroll) {

//     Array.from(layersBudda).forEach(layerBudda => {
//         const divider = layerBudda.dataset.speedbudda;
//         const wScrollNull = wScroll === 1;
//         const strafe = wScrollNull * divider;

//         layerBudda.style.transform = `translateY(-${strafe}%)`;


//     })
// }

// window.addEventListener('scroll', e => {
//     const wScroll = window.pageYOffset;
//     console.log(wScroll);
//     if (wScroll >= 3004) {
//         moveLayersBuddaDependsOnScroll(wScroll); 
//     }
// });
// console.log('fff0');