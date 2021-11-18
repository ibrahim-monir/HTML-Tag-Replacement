jQuery(".agn-testimonial-slider h6").replaceWith(function(){
    return jQuery("<h3>", {
        html: this.innerHTML
    });
});