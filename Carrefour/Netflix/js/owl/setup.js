$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function rolar_filme()
{
    window.location.href = '#filme';
}
function rolar_serie()
{
    window.location.href = '#serie';
}
function rolar_doc()
{
    window.location.href = '#doc';
}