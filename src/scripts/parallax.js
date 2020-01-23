const parallax = document.querySelector('.parallax');
const layers = parallax.children;

function moveLayersDependsOnScroll(wScroll) {

    Array.from(layers).forEach(layer => {
        const divider = layer.dataset.speed;
        const strafe = wScroll * divider;

        layer.style.transform = `translateY(-${strafe}%)`;

        
    })

}

window.addEventListener('scroll', e=> {
    const wScroll = window.pageYOffset;

    moveLayersDependsOnScroll(wScroll);
});

const parallaxBudda = document.querySelector('.parallax-budda');
const layersBudda = parallaxBudda.children;

function moveLayersDependsOnScroll(wScroll) {

    Array.from(layersBudda).forEach(layerBudda => {
        const divider = layerBudda.dataset.speed;
        const strafe = wScroll * divider;

        layerBudda.style.transform = `translateY(-${strafe}%)`;

        
    })

}

window.addEventListener('scroll', e=> {
    const wScroll = window.pageYOffset;

    moveLayersDependsOnScroll(wScroll);
});

console.log('fff0');