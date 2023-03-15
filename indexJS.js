var Language = 1;

$(document).ready(function()
{
    WindowSize();

    $("#L_CH").click(function(){ Language = 1; alert("此功能開發中，敬請期待！");});
    $("#L_JP").click(function(){ Language = 2; alert("此功能開發中，敬請期待！");});
    $("#L_EN").click(function(){ Language = 3; alert("此功能開發中，敬請期待！");});
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
        $("#Avatar").css("width",  $(window).width()*0.2);
        $("#Avatar").css("height", $(window).width()*0.2);
    }
    else if( WH/WW < 16/11 && WW < 1000 )
    {
        $("#Content").css({"-webkit-transform":"translate(0%, 0%)"});
        $("#Content").css("left",  $(window).width()*0.2);
        $("#Content").css("width", $(window).width()*0.8);
        $("#Nav").css("right", $(window).width()*0.8);
        $("#Nav").css("width", $(window).width()*0.2);
    }
    else
    {
        $("#Content").css("width", 600);
        $("#Nav").css("right", $(window).width()/2+300);
    }

    $("#Shop").css("width",  $("#Content").width()*0.9);
    $("#Shop").css("height", $("#Content").width()*0.4);
    $("#Shop").css({"border-radius": $("#Shop").height()*0.1});
    $(".Shop_But").css("width",  $("#Content").width()*0.6*0.3);
    $(".Shop_But").css("height", $("#Content").width()*0.6*0.3);
    $(".LinkBox").css({"border-radius": $("#Shop").height()*0.1});

    //alert(WH/WW);
}