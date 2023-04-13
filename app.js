jQuery('document').ready(function($){

    let menuBtn = $('.menu-icon')
    let menu = $('.navegacion ul')

menuBtn.click(function() {
    if (menu.hasClass('show')){
        menu.removeClass('show');
    }else {
        menu.addClass('show');
    }
})

})