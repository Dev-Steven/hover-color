$("img").hover(
    function() {
        var temp = $(this).attr('src');
        var temp2 = $(this).attr('other');
        $(this).attr('src', temp2);
        $(this).attr('other', temp);
    },
    function() {
        var temp = $(this).attr('src');
        var temp2 = $(this).attr('other');
        $(this).attr('src', temp2);
        $(this).attr('other', temp);
    }
);