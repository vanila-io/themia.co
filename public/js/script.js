! function() {
    {
        var e = [],
            o = 50,
            t = new Array(o),
            a = 500,
            n = function(e) {
                return document.getElementById(e)
            };
        Chart.helpers
    }
    Chart.defaults.global.responsive = !0;
    for (var s = o - 1; s >= 0; s--) e.push(Math.round(100 * Math.random()));
    new Chart(n("hero-bar").getContext("2d")).Bar({
        labels: t,
        datasets: [{
            fillColor: "#2B303B",
            data: e
        }]
    }, {
        showScale: !1,
        barShowStroke: !1,
        barValueSpacing: 1,
        showTooltips: !1,
        onAnimationComplete: function() {
            function e() {
                n.stop(), clearTimeout(t), t = setTimeout(function() {
                    var e, t = Math.floor(Math.random() * o);
                    for (e = t - 1; e >= 0; e--) n.datasets[0].bars[Math.floor(Math.random() * o)].value = Math.round(100 * Math.random());
                    n.update()
                }, Math.random() * a)
            }
            var t, n = this;
            this.options.onAnimationComplete = e, this.options.animationEasing = "easeOutQuint", e()
        }
    })
}(),
function() {
    "use strict";
    window.sr = new scrollReveal({
        reset: !0,
        move: "50px",
        mobile: !0,
        delay: "always"
    })
}(), $(function() {
    $(".typing").typed({
        strings: ["Web Development", "Design", "Marketing"],
        typeSpeed: 50,
        backSpeed: 25,
        loop: !0,
        startDelay: 1e3,
        backDelay: 1500
    })
}), $(document).ready(function() {
    $(".techLogo").mouseenter(function() {
        $(this).addClass("hover"), $(this).css("z-index", "3000").velocity({
            scale: 1.25
        }, {
            duration: 200
        }).css("box-shadow", "0px 27px 24px 0px rgba(0, 0, 0, 0.2), 0px 40px 77px 0px rgba(0, 0, 0, 0.22)")
    }).mouseleave(function() {
        $(this).removeClass("hover"), $(this).css("z-index", "10").velocity("reverse").css("box-shadow", "0px 8px 17px 0px rgba(0, 0, 0, 0.2), 0px 6px 20px 0px rgba(0, 0, 0, 0.19)")
    }), $(".techBox").mouseenter(function() {
        $(this).css("z-index", "3000")
    }).mouseleave(function() {
        $(this).css("z-index", "10")
    })
}), $(document).ready(function() {
    $(".item").mouseenter(function() {
        $(this).addClass("hover"), $(".hover .item-main").velocity({
            translateY: "100%"
        }), $(".hover .item-hover").velocity({
            translateY: "100%"
        })
    }).mouseleave(function() {
        $(".hover .item-hover").velocity("reverse"), $(".hover .item-main").velocity("reverse"), $(this).removeClass("hover")
    })
});


var 
scrollHome = $(".aHome"),
scrollService = $(".aServices"), 
scrollTeam = $(".aTeam"), 
scrollTech = $(".aTech"), 
scrollContact = $(".aContact"),
menuLink = $(".navbar-right li")

menuLink.on("click", function() {
	$(".navbar-right li").removeClass("active");
    $(this).addClass("active");
}),

scrollHome.on("click", function() {
    $("#home").velocity("scroll", {
        duration: 1000,
        offset: -50,
        easing: "easeInOutQuint"
    })
}),
scrollTeam.on("click", function() {
    $("#team").velocity("scroll", {
        duration: 1000,
        offset: -50,
        easing: "easeInOutQuint"
    })
}), scrollService.on("click", function() {
    $("#services").velocity("scroll", {
        duration: 1000,
        offset: -50,
        easing: "easeInOutQuint"
    })
}), scrollTech.on("click", function() {
    $("#technologies").velocity("scroll", {
        duration: 1000,
        offset: -50,
        easing: "easeInOutQuint"
    })
}), scrollContact.on("click", function() {
    $("#contact").velocity("scroll", {
        duration: 1000,
        offset: -50,
        easing: "easeInOutQuint"
    })
}), $(window).scroll(function() {
    $(".navbar").offset().top > 0 ? $(".navbar-fixed-top").addClass("top-nav-collapse") : $(".navbar-fixed-top").removeClass("top-nav-collapse")
});


// ********** .sidebar2 - Push **********
// Push

$('.push').on('click', function() {  
 $('.sidebarMenu').velocity({translateX: "-100%"},{easing: [ 100, 10 ], duration: 800, display: "block"});
  $('html').addClass("overlay");
 $('#overlay').css({"display": "block"});
});

$('.overlay').on('click', function() {  
 $('.sidebarMenu').velocity({translateX: "100%"}, {easing: [0, 0 ], duration: 1300, display: "none"});
 $('#overlay').css({"display": "none"});
 $('html').removeClass("overlay");
});

var 

menuLink = $(".navbar-right li")

menuLink.on("click", function() {
    $(".navbar-right li").removeClass("active");
    $(this).addClass("active");
}),


$(".aHome-m").on("click", function() {
 $('.sidebarMenu').velocity({translateX: "100%"}, {easing: 'spring', duration: 1300, display: "none"});
 $('#overlay').css({"display": "none"});
 $('html').removeClass("overlay");

$("#home").velocity("scroll", {
        delay:800,
        duration: 1400,
        offset: -50,
        easing: "easeInOutQuint"
    })

}),

$(".aTeam-m").on("click", function() {
 $('.sidebarMenu').velocity({translateX: "100%"}, {easing: 'spring', duration: 1300, display: "none"});
 $('#overlay').css({"display": "none"});
 $('html').removeClass("overlay");

$("#team").velocity("scroll", {
        delay:800,
        duration: 1400,
        offset: -50,
        easing: "easeInOutQuint"
    })

}),

$(".aServices-m").on("click", function() {
 $('.sidebarMenu').velocity({translateX: "100%"}, {easing: 'spring', duration: 1300, display: "none"});
 $('#overlay').css({"display": "none"});
 $('html').removeClass("overlay");

$("#services").velocity("scroll", {
        delay:800,
        duration: 1400,
        offset: -50,
        easing: "easeInOutQuint"
    })

}),

$(".aTech-m").on("click", function() {
 $('.sidebarMenu').velocity({translateX: "100%"}, {easing: 'spring', duration: 1300, display: "none"});
 $('#overlay').css({"display": "none"});
 $('html').removeClass("overlay");

$("#technologies").velocity("scroll", {
        delay:800,
        duration: 1400,
        offset: -50,
        easing: "easeInOutQuint"
    })

}),

$(".aContact-m").on("click", function() {
 $('.sidebarMenu').velocity({translateX: "100%"}, {easing: 'spring', duration: 1300, display: "none"});
 $('#overlay').css({"display": "none"});
 $('html').removeClass("overlay");

$("#contact").velocity("scroll", {
        delay:800,
        duration: 1400,
        offset: -50,
        easing: "easeInOutQuint"
    })

})
