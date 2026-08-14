
    $(document).ready(function(){
    // Mobile Menu 
    $(".menu").click(function(){
        $(".nav-list").slideToggle(400);
    });

    // Read More 
    $(".read-btn").click(function(){
        $(".more-text").slideToggle(500);
    });

    // Journey story
    $(".story-btn").click(function(){
        $(this).siblings(".story").slideToggle(500);
    });
})