$(document).ready(function () {

    var ua = detect.parse(navigator.userAgent);
    $("html").addClass(ua.device.type + " " + ua.device.family + " " + ua.os.family + " " + ua.browser.family)

    if ($(".graficTopPage").length > 0) {
        $('.headerPage .graficTopPage').parallax({
            mouseport: $('body'),
            xparallax: '25px',
            yparallax: false,
            decay: 0.1,
            xorigin: 0
        });
        $('.graficTopPage.red').parallax({
            mouseport: $('body'),
            xparallax: '25px',
            yparallax: false,
            decay: 0.1,
            xorigin: 0
        });
        $('.graficTopPage.blue').parallax({
            mouseport: $('body'),
            xparallax: '10px',
            yparallax: false,
            decay: 0.1,
            xorigin: 0
        });
    }
    if ($(".graficTopDays").length > 0) {
        $('.graficTopDays').parallax({
            mouseport: $('body'),
            xparallax: false,
            yparallax: '100px',
            decay: 0.1,
            xorigin: 0
        });
    }

    if ($(".tabs").length > 0) {
        $(".tabs").map(function () {
            $(this).tabs();
        })
    }

    if ($(".selectricBl").length > 0) {
        $(".selectricBl").map(function () {
            $(this).selectric();
        })
    }

    if ($(".calcInvest").length > 0) {
        /*$(".calcInvest .rangeBl").ionRangeSlider({
            min: 20,
            max: 1000,
            from: 240,
            grid: false,
            postfix: "$",
            onChange: function (data) {
                $(data.input).parents(".calcInvest").find(".listBlCalc input").val(data.from)
            },
            onStart: function (data) {
                $(data.input).parents(".calcInvest").find(".listBlCalc input").val(data.from)
            }
        });
        var elSlider = $(".calcInvest .rangeBl");
        var slider = elSlider.data("ionRangeSlider");
        elSlider.parents(".calcInvest").find(".listBlCalc input").on("keypress keyup", function (event) {
            var percent = $(this).val();
            slider.update({
                from: percent
            })
        })*/
    }

    /*clock*/
    var servertime = new Vue({
        el: '#clock_circle',
        data: {
            appTitle: 'Vue Clock',
            hour: '--',
            hourDeg: '0deg',
            mins: '--',
            minsDeg: '0deg',
            secs: '--',
            secsDeg: '0deg'
        },
        created() {
            this.updateClock();
        },
        methods: {
            updateClock() {
                var ctx = this;
                setInterval(function () {
                    var date = new Date(),
                        hour = date.getHours(),
                        min = date.getMinutes(),
                        sec = date.getSeconds();

                    // Set Display
                    ctx.hour = (hour < 10) ? '0' + hour : hour;
                    ctx.mins = (min < 10) ? '0' + min : min;
                    ctx.secs = (sec < 10) ? '0' + sec : sec;

                    // Set Analog
                    var analogHour = (hour > 12) ? hour - 12 : hour,
                        analogMins = min,
                        analogSecs = sec;

                    ctx.hourDeg = (analogHour * 30) + 'deg';
                    ctx.minsDeg = (analogMins / 60 * 360) + 'deg';
                    ctx.secsDeg = (analogSecs / 60 * 360) + 'deg';
                }, 1000);
            }
        }
    });
    /* clock */

    if ($("#doc_time").length > 0) {
        clock()
    }

    if ($(".faqBl").length > 0) {
        var timeOut = false;
        $(".faqList .quest").on("click", function () {
            if (timeOut) return false;
            $(this).toggleClass("open")
            $(this).parents(".item").find(".text").slideToggle()
            timeOut = true;
            setTimeout(function () {
                timeOut = false;
            }, 500);
        })
    }

    if ($(".silderGrettings").length > 0) {
        slideGrettingInit()
    }

    if ($(".circleValues").length > 0) {
        $(".circleValues input").map(function () {
            $(this).knob({
                bgColor: "#3b1768",
                thickness: 0.30,
                readOnly: true,
                width: 140,
                min: 0,
                max: 100,
            })
        })
    }

    if ($(".filterBl .dateInputs").length > 0) {
        var dateFormat = "dd.mm.yy",
            from = $("#from")
                .datepicker({
                    defaultDate: "+1w",
                    changeMonth: true,
                    numberOfMonths: 1,
                    dateFormat: "dd.mm.yy"
                })
                .on("change", function () {
                    to.datepicker("option", "minDate", getDate(this));
                }),
            to = $("#to").datepicker({
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 1,
                dateFormat: "dd.mm.yy"
            })
                .on("change", function () {
                    from.datepicker("option", "maxDate", getDate(this));
                });

        function getDate(element) {
            var date;
            try {
                date = $.datepicker.parseDate(dateFormat, element.value);
            } catch (error) {
                date = null;
            }

            return date;
        }
    }

    if ($(".referralTable").length > 0) {
        var timeOut = false;
        $(".line-txt").on("click", function () {
            if (timeOut) return false;
            $(this).parents(".line").toggleClass("open").find(".line-info").slideToggle()
            timeOut = true;
            setTimeout(function () {
                timeOut = false;
            }, 500);
        })
    }

    openMod();
	new WOW().init();
})

var slideGrettingInit = function () {
    var owl = $('.silderGrettings');
    owl.owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: true,
                dots: false,
            }
        }
    })
}