// $(document).ready(function (e) {
//     $('.main-border').click(function (e) { //Default mouse Position 
//         alert(e.pageX + ' , ' + e.pageY);
//     });
// });
$(document).ready(function() {
    var type = '';
    $('.sag-class').click(function(){
        $('.sag-class').css('background-color', 'rgba(255, 255, 255, 0)')
        $(this).css('background-color', 'rgba(255, 255, 255, 0.544)')
        type=$(this).attr('class').slice(0,-10);
    })
    $(".main-border").click(function(e) {
        e.preventDefault();
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var img = "";
        if(type == 'bir'){
            img = $('<i class="fas fa-thumbtack"></i>');
        } else if(type == 'iki'){
            img = $('<i class="fas fa-map-pin"></i>');
        } else if(type == 'uc'){
            img = $('<i class="fas fa-map-marker-alt"></i>');
        } else if(type == 'dort'){
            img = $('<i class="far fa-circle"></i>');
        } else if(type == 'bes'){
            img = $('<textarea></textarea>');
        }
        img.css('top', y);
        img.css('left', x);
        img.appendTo('.main-border');

        setTimeout(function(){
            type = "";
            $('.sag-class').css('background-color', 'rgba(255, 255, 255, 0)')
        },1)
        $('.main-border i').click(function(){
            var check = $('.alti').css('background-color')
            var that = $(this);
            if(check == 'rgba(255, 255, 255, 0.545)'){
                that.remove();
            }
        })
        $('.main-border textarea').click(function(){
            var check = $('.alti').css('background-color')
            var that = $(this);
            if(check == 'rgba(255, 255, 255, 0.545)'){
                that.remove();
            }
        })
        $('.yedi').click(function(){
            $('.main-border i').remove();
            $('.main-border textarea').remove();
        })
    })
    $('.main-border i').click(function(){
        var check = $('.alti').css('background-color')
        var that = $(this);
        if(check == 'rgba(255, 255, 255, 0.545)'){
            that.remove();
        }
    })
    $('.main-border textarea').click(function(){
        var check = $('.alti').css('background-color')
        var that = $(this);
        if(check == 'rgba(255, 255, 255, 0.545)'){
            that.remove();
        }
    })
    $('.yedi').click(function(){
        $('.main-border i').remove();
        $('.main-border textarea').remove();
    })
    $("textarea").each(function () {
        this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
      }).on("input", function () {
        this.style.height = "auto";
        this.style.height = (this.scrollHeight) + "px";
      });
});