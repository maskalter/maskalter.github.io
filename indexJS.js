var Language = 1;
var refurl = document.referrer;

$(document).ready(function()
{
    WindowSize();

    if(refurl.startsWith("https://shopee")       ){ Language = 1; LanguageSelection(); }
    if(refurl.startsWith("https://www.plurk")    ){ Language = 1; LanguageSelection(); }
    if(refurl.startsWith("https://www.gamer")    ){ Language = 1; LanguageSelection(); }
    if(refurl.startsWith("https://home.gamer")   ){ Language = 1; LanguageSelection(); }
    if(refurl.startsWith("https://forum.gamer")  ){ Language = 1; LanguageSelection(); }
    if(refurl.startsWith("https://www.facebook") ){ Language = 1; LanguageSelection(); }
    if(refurl.startsWith("https://www.instagram")){ Language = 1; LanguageSelection(); }
    
    if(refurl.startsWith("https://twitter")            ){ Language = 2; LanguageSelection(); }
    if(refurl.startsWith("https://www.pixiv")          ){ Language = 2; LanguageSelection(); }
    if(refurl.startsWith("https://maskalter333.booth") ){ Language = 2; LanguageSelection(); }
    if(refurl.startsWith("https://maskalter333.fanbox")){ Language = 2; LanguageSelection(); }

    $("#L_CH").click(function(){ Language = 1; LanguageSelection();});
    $("#L_JP").click(function(){ Language = 2; LanguageSelection();});
    $("#L_EN").click(function(){ Language = 3; LanguageSelection();});
});

$(window).resize(function() 
{
    WindowSize();
});

function WindowSize()
{
    var WH = $(window).height();
    var WW = $(window).width();

    if( WH/WW > 16/11 )
    {
        $("#Content").css("width", $(window).width());
        $("#Nav").css("right", $(window).width());
        $(".Avatar").css("width",  $(window).width()*0.2);
        $(".Avatar").css("height", $(window).width()*0.2);

        $("body").css({"font-size":"36px"});
        $("p"   ).css({"font-size":"36px"});
        $("h2"  ).css({"font-size":"48px"});
        $("h3"  ).css({"font-size":"42px"});
        $("h5"  ).css({"font-size":"36px"});
        $(".LinkTitle").css({"padding-left":"1.75em"});
    }
    else if( WH/WW < 16/11 && WW < 1000 )
    {
        $("#Content").css({"-webkit-transform":"translate(0%, 0%)"});
        $("#Content").css("left",  $(window).width()*0.2);
        $("#Content").css("width", $(window).width()*0.8);
        $("#Nav").css("right", $(window).width()*0.8);
        $("#Nav").css("width", $(window).width()*0.2);

        $("body").css({"font-size":"16px"});
        $("p"   ).css({"font-size":"16px"});
        $("h2"  ).css({"font-size":"24px"});
        $("h3"  ).css({"font-size":"20px"});
        $("h5"  ).css({"font-size":"16px"});
        $(".LinkTitle").css({"padding-left":"2.75em"});
    }
    else
    {
        $("#Content").css("width", 600);
        $("#Nav").css("right", $(window).width()/2+300);

        $("body").css({"font-size":"16px"});
        $("p"   ).css({"font-size":"16px"});
        $("h2"  ).css({"font-size":"24px"});
        $("h3"  ).css({"font-size":"20px"});
        $("h5"  ).css({"font-size":"16px"});
        $(".LinkTitle").css({"padding-left":"2.75em"});
    }

    $(".Shop").css("width",  $("#Content").width()*0.9);
    $(".Shop").css("height", $("#Content").width()*0.4);
    $(".Shop").css({"border-radius": $(".Shop").height()*0.1});
    $(".Shop_But").css("width",  $("#Content").width()*0.6*0.3);
    $(".Shop_But").css("height", $("#Content").width()*0.6*0.3);
    $(".LinkBox").css({"border-radius": $(".Shop").height()*0.1});

    //alert(WH/WW);
}

function LanguageSelection()
{
    if(Language == 1)
    {
        $("#CH").css({"display":"block"});
        $("#JP").css({"display":"none" });
        $("#EN").css({"display":"none" });
    }
    else if(Language == 2)
    {
        $("#CH").css({"display":"none" });
        $("#JP").css({"display":"block"});
        $("#EN").css({"display":"none" });
    }
    else if(Language == 3)
    {
        $("#CH").css({"display":"none" });
        $("#JP").css({"display":"none" });
        $("#EN").css({"display":"block"});
    }
}