/*header*/
document.querySelector('.mobile-btn').addEventListener('click', function(){
    document.querySelector('header nav').classList.add('active')
})
document.querySelector('.gnb .fa-times').addEventListener('click', function(){
    document.querySelector('header nav').classList.remove('active')
})



/* main-slide-box */
$('.slick-slide-items').slick({
    dots:true,
    autoplay : true,
    autoplaySpeed : 2500,
})



/* main-cs-box */
window.addEventListener('resize', function(){
    if(window.innerWidth>1100){
        document.querySelector('.cs-box .container').style.paddingLeft='140px'
        document.querySelector('.cs-box .container .number').style.right='80px'

    }else{
        document.querySelector('.cs-box .container').style.paddingLeft='0'
        document.querySelector('.cs-box .container .number').style.right='-50px'
    }
})



