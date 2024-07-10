const config = {
    type: 'carousel',
    focusAt: 'center',
    autoplay: 6000|true,
    animationDuration: 1000,
    animationTimingFunc: 'ease-in-out',
    perView: 1,
    gap: 1,
}


new Glide(".glide", config).mount();

