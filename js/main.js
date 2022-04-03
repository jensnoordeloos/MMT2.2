$("body").on("click", "#button1", function(event){
    event.preventDefault();
    $(".panel1").css({zIndex: "100", float: "none"}).animate({height: "100%", width: "100vw"},
        {duration: 2000,
        start: function(){
            $.ajax({
                url: 'template-parts/panel1big.php',
            
                success: function(data){
                    $(".panel1").empty()
                    $(data).appendTo('.panel1');
                }
            });
        },
        complete: function(){
            $.ajax({
                url: 'template-parts/panel1bigcontent.php',
            
                success: function(data){
                    $(data).hide().appendTo('.contbig').show(3000);
                }
            });
        } 
    });
});

$("body").on("click", "#backButton1", function(event){
    event.preventDefault();
    $(".panel1").animate({height: "100vh", width: "33.3%"},
        {duration: 2000,
        complete: function(){
            $.ajax({
                url: 'template-parts/panel1content.php',
            
                success: function(data){
                    $(".panel1").css({zIndex: "2"});
                    $(".panel1").fadeOut(200, function(){
                        $(".panel1").empty(100);
                        $(data).appendTo('.panel1');
                        $(".panel1").fadeIn(500);
                    });
                }
            });
        }
    });
});

$("body").on("click", "#button2", function(event){
    event.preventDefault();
    $(".panel2").css({zIndex: "100", float: "none"}).animate({height: "100%", width: "100vw"},
        {duration: 2000,
        start: function(){
            $.ajax({
                url: 'template-parts/panel2big.php',
            
                success: function(data){
                    $(".panel2").empty()
                    $(data).appendTo('.panel2');
                }
            });
        },
        complete: function(){
            $.ajax({
                url: 'template-parts/panel2bigcontent.php',
            
                success: function(data){
                    $(data).hide().appendTo('.cont2big').show(3000);
                }
            });
        } 
    });
});

$("body").on("click", "#backButton2", function(event){
    event.preventDefault();
    $(".panel2").animate({height: "50vh", width: "66.6%"},
        {duration: 2000,
        complete: function(){
            $.ajax({
                url: 'template-parts/panel2content.php',
            
                success: function(data){
                    $(".panel2").css({zIndex: "2", overflow: "hidden"})
                    $(".panel2").fadeOut(500, function(){
                        $(".panel2").empty();
                        $(data).appendTo('.panel2');
                        $(".panel2").fadeIn(500);
                    });
                }
            });
        }
    });
});

$("body").on("click", "#button3", function(event){
    event.preventDefault();
    $(".panel3").css({zIndex: "100", float: "none"}).animate({height: "100%", width: "100vw", top: "0"},
        {duration: 2000,
        start: function(){
            $.ajax({
                url: 'template-parts/panel3big.php',
            
                success: function(data){
                    $(".panel3").empty()
                    $(data).appendTo('.panel3');
                }
            });
        },
        complete: function(){
            $.ajax({
                url: 'template-parts/panel3bigcontent.php',
            
                success: function(data){
                    $(data).hide().appendTo('.cont2big').show(3000);
                }
            });
        } 
    });
});

$("body").on("click", "#backButton3", function(event){
    event.preventDefault();
    $(".panel3").animate({height: "50vh", width: "66.6%", top: "50%"},
        {duration: 2000,
        complete: function(){
            $.ajax({
                url: 'template-parts/panel3content.php',
            
                success: function(data){
                    $(".panel3").css({zIndex: "2", overflow: "hidden"})
                    $(".panel3").fadeOut(500, function(){
                        $(".panel3").empty();
                        $(data).appendTo('.panel3');
                        $(".panel3").fadeIn(500);
                    });
                }
            });
        }
    });
});
  