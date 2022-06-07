$(function(){
    // 버튼 클릭시 전체 메뉴를 보이게.
    $(".tit .btn").click(function(e){
        e.preventDefault();
        // $("#cont_nav").css({
        //     "display" : "block"
        // });
        // $("#cont_nav").fadeIn();
        // $("#cont_nav").slideDown();
        $("#cont_nav").slideToggle(400);
        $(this).toggleClass("on");
    });

    // 배너
    $(".ban").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true
    });

    // Tab-Menu
    let $tab_list = $(".tab_menu");
    $tab_list.find("ul ul").hide(); // 내용 없애기
    $tab_list.find("li.active > ul").show();
    
    function tabMenu(e){
        e.preventDefault();
        let $this = $(this);
        $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
    }
    $tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);

    console.log($tab_list);

    // Gallery
    $(".gallery_img").slick({
        arrows: false,
        fade: true
    });
    $(".play").click(function(){
        $(".gallery_img").slick("slickPlay");
    });
    $(".pause").click(function(){
        $(".gallery_img").slick("slickPause");
    });
    $(".prev").click(function(){
        $(".gallery_img").slick("slickPrev");
    });
    $(".next").click(function(){
        $(".gallery_img").slick("slickNext");
    });

    /* layer popup */
    $(".layer").click(function(e){
        e.preventDefault();
        $("#layer").css({
            "display" : "block"
        });
    });
    $("#layer .close").click(function(e){
        e.preventDefault();
        $("#layer").css({
            "display" : "none"
        });
    });
    /* Window popup */
    $(".window").click(function(e){
        e.preventDefault();
        // window.open("파일명", "팝업이름", "옵션설정");
        // 옵션 : left, top, width, height, status, toolbar,----
        window.open("popup.html", "하스발", "width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0");
    });

    
    $(".lightgallery").lightGallery();
});