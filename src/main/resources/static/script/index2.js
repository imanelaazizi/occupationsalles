
$(document).ready(function(){
    $.ajax({
        url:"/username",
        type:"GET",
        success:function(data){
            $(".user-name").html(data);
            $("#main-content").load(
                "./page/statistique2.html")
        }
    });

});
$(".sidebar-dropdown > a").click(function() {
    $(".sidebar-submenu").slideUp(200);
    if (
        $(this)
            .parent()
            .hasClass("active")
    ) {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
            .parent()
            .removeClass("active");
    } else {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
            .next(".sidebar-submenu")
            .slideDown(200);
        $(this)
            .parent()
            .addClass("active");
    }
    $("#main-content").load(
        "./page/statistique2.html");
});

$("#close-sidebar").click(function() {
    $(".page-wrapper").removeClass("toggled");
    if($(this).width()<=770){
        $('.title').removeClass('hide');
    }
});
$("#show-sidebar").click(function() {
    $(".page-wrapper").addClass("toggled");
    if($(this).width()<=770){
        $('.title').addClass('hide');
    }
});
