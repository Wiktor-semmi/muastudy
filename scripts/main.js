$(document).ready(function () {
    new WOW({
        animateClass: 'animate__animated',
    }).init();

    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        infinite: false,
        initialSlide: 3,
        centerMode: true,
        variableWidth: true
    });

    $('#curs').click(function () {
        $('.program')[0].scrollIntoView({behavior: "smooth"});
    });
    $('#button').click(function () {
        $('.program')[0].scrollIntoView({behavior: "smooth"});
    });

    $('#lector').click(function () {
        $('.teacher-title')[0].scrollIntoView({behavior: "smooth"});
    });
    $('#reviews').click(function () {
        $('.reviews')[0].scrollIntoView({behavior: "smooth"});
    });
    $('#button-a').click(function () {
        $('.gallery-order')[0].scrollIntoView({behavior: "smooth"});
    });

    $('#button-b').click(function () {
        $('.gallery-order')[0].scrollIntoView({behavior: "smooth"});
    });

    $('#button-c').click(function () {
        $('.gallery-order')[0].scrollIntoView({behavior: "smooth"});
    });

    let name = $('#name');
    name.css('border-color', 'black');

    // $(document).ready(function(){
    //     $('#phone').mask('+7 (999) 999-99-99');
    // });

// document.getElementById('menu-menu').onclick = function () {
//     document.getElementById('menu').classList.add('open');
// }
// document.querySelectorAll('#menu *').forEach((item) => {
//     item.onclick = () => {
//         document.getElementById('menu').classList.remove('open');
//     }
// })

$('#menu-menu').click(function () {
    $('#menu').addClass('open');
});
$('#menu *').click(function () {
    $('#menu').removeClass('open');
})



    $('#create-order').click(function () {
        let hasError = false;
        let phone = $('#phone');
        phone.css('border-color', 'black');
        $('.error-input').hide();

        if (!name.val()) {
            name.css('border-color', 'red');
            $('.gallery-order-a').next().show();
            hasError = true;
        } else {
            name.css('border-color', 'black');
        }

        if (!phone.val()) {
            phone.css('border-color', 'red');
            $('.gallery-order-b').next().show();
            hasError = true;
        } else {
            phone.css('border-color', 'black');
        }
        if (!hasError) {

            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: {name: name.val(), iphone: phone.val()}
            })
                .done(function (msg) {
                    console.log(msg);
                    if (msg.success) {
                        let newDiv = $("<div>", {
                            class: "mydiv",
                            text: "Спасибо!",
                            css: {
                                border: "1px solid #628fcb",
                                borderRadius: "15px",
                                padding: "20px",
                                maxWidth: "262px",
                                maxHeight: "244px",
                                margin: "10px auto",
                                width: "50%",
                                fontSize: "22px",
                                fontFamily: "Arial",
                                fontWeight: "bold",
                                color: "#8d1c1c",
                                textAlign: "center"
                            }
                        }).insertAfter("#form");

                        const form_Div = document.getElementById("form");
                        const new_Div = document.createElement("div");
                        new_Div.className = "mydiv";

                        form_Div.parentNode.replaceChild(new_Div, form_Div);
                        setTimeout(function () {
                            newDiv.remove();
                            new_Div.parentNode.replaceChild(form_Div, new_Div);
                            $("#form input").val('');
                        }, 3000);

                    } else {
                        alert('Ошибка');
                       $('#name, #phone').val('');
                    }
                });
        }
    });
});


