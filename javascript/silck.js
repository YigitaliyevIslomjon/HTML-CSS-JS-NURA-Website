// window.onload=function(){
//     $('.slider').slick({
//     autoplay:true,
//     arrows:true,
//     prevArrow:'<button type="button" class="slick-prev"></button>',
//     nextArrow:'<button type="button" class="slick-next"></button>',
//     slidesToShow:4,
//     slidesToScroll:1
//     });
//     };
// window.onload=function(){
// $('.slider').slick({
// dots: true,
// infinite: false,
// speed: 300,
// slidesToShow: 4,
// slidesToScroll: 1,
// responsive: [
//     {
//     breakpoint: 1024,
//     settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//     }
//     },
//     {
//     breakpoint: 600,
//     settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//     }
//     },
//     {
//     breakpoint: 480,
//     settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//     }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
// ]
// });
// };
window.onload=function(){
    $('.slider').slick({
    // autoplay:true,
    autoplaySpeed:1500,
    arrows:true,
    prevArrow:'<button type="button" class="slick-prev"><img src="images/leftarrow.png"></button>',
    nextArrow:'<button type="button" class="slick-next"><img src="images/rightarrow.png"></button>',
    slidesToShow:4,
    slidesToScroll:1,
    
    responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    });
}
