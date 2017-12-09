$("a").on("click", function(e){
    if (this.hash.substr(0,1) == "#") {
        e.preventDefault();
        $('html, body').animate({
            scrollTop	: $(this.hash).offset().top-55
        },{
            easing		: "swing",
            duration	: 500
        });
    }
});
