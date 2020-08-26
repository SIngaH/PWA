document.addEventListener("DOMContentLoaded", ()=>{
    const imgs = document.querySelectorAll("img");

    const options = {
        rootMargin: "0px 0px 0px 0px",
        threshold: "0"
    };

    const imageCallback = function(entries, self){
        entries.forEach(entry => {
            console.log(entry);
            if(entry.isIntersecting) {
                entry.target.src = entry.target.dataset.src;
            }
        })
    }

    const ImageObserver = new IntersectionObserver(imageCallback, options);

    imgs.forEach(img => {
        ImageObserver.observe(img);
    });
});