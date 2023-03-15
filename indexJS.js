$(document).ready(function()
{
    WindowSize();
});

$(window).resize(function() 
{
    WindowSize();
});

function WindowSize()
{
    if($(window).width() < 800)
    {
        $("#Content").css("width", $(window).width());
    }
    else
    {
        $("#Content").css("width", 800);
    }
    alert($(window).width());
}