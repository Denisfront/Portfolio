const parallax = document.querySelector('.parallax');
const layers = parallax.children;

function moveLayersDependsOnScroll(wScroll) {

    Array.from(layers).forEach(layer => {
        const divider = layer.dataset.speed;
        const strafe = wScroll * divider / 23;
        layer.style.transform = `translateY(-${strafe}%)`;


    })

}

window.addEventListener('scroll', e => {
    const wScroll = window.pageYOffset;

    moveLayersDependsOnScroll(wScroll);
});


const parallaxBudda = document.querySelector('.parallax-budda');
const layersbudda = parallaxBudda.children;

function moveLayersBuddaDependsOnScroll(wScroll) {

    Array.from(layersbudda).forEach(layer => {
        const divider = layer.dataset.speedbudda;
        const strafe = wScroll * divider / 40;
        layer.style.transform = `translateY(-${strafe}%)`;
    })
}

window.addEventListener('scroll', e => {
    const wScroll = window.pageYOffset;
    const parallaxRect = parallaxBudda.getBoundingClientRect();
    const parallaxPos = parallaxRect.top;
    console.log(parallaxPos);
    if (parallaxPos <= 135) {
        moveLayersBuddaDependsOnScroll(wScroll);
    }


});