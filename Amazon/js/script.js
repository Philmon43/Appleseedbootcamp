document.addEventListener("mousemove", (e) => {
    const classes = ["img-one", "img-two", "img-three", "img-four", "img-five"]
    if (classes.includes(e.target.className)) {
        const image = document.querySelector(".b-image")
        const srcImage = document.querySelector("." + e.target.className);
        image.src = srcImage.src
    }
});