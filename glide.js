const config = {
    type: 'carousel',
    focusAt: 'center',
    autoplay: 6000|true,
    animationDuration: 1000,
    animationTimingFunc: 'ease-in-out',
    perView: 1,
    peek: 300,
}


new Glide(".glide", config).mount();

