$(window).scroll(function(){
    if($(window).scrollTop()>630 && window.innerWidth >= 951){
    document.querySelector('.fix').style.position = 'fixed';
    document.querySelector('.arrow_bg').style.display = 'flex';
    }
    else if($(window).scrollTop()<630 && window.innerWidth >= 951){
        document.querySelector('.fix').style.position = 'static';
        document.querySelector('.arrow_bg').style.display = 'none';
    }
    
    })
$(window).scroll(function(){
    if($(window).scrollTop()>890 && window.innerWidth <= 950){
    document.querySelector('.fix').style.position = 'fixed';
    document.querySelector('.arrow_bg').style.display = 'flex';
    }
    else if($(window).scrollTop()<895 && window.innerWidth <= 950){
        document.querySelector('.arrow_bg').style.display = 'none';
    }
    
    })
// $(window).scroll(function(){
//     if($(window).scrollTop()>630 && window.innerWidth >= 1100){
//     document.querySelector('.fix').style.position = 'fixed';
//     document.querySelector('.arrow_bg').style.display = 'flex';
//     }
//     else if($(window).scrollTop()<630 && window.innerWidth >= 1100){
//         document.querySelector('.fix').style.position = 'unset';
//         document.querySelector('.arrow_bg').style.display = 'none';
//     }
    
//     })

let click = 0;
document.getElementById('but_hidden').onclick = function(){
    if (click == 0){
        document.getElementById('menu_nav').style.display = 'flex';
        document.getElementById('but_hidden').style.backgroundColor = 'unset';
        document.getElementById('but_hidden').style.transform = 'rotate(-90deg)';
        click += 1;
    }
    else{
        document.getElementById('menu_nav').style.display = 'none';
        document.getElementById('but_hidden').style.backgroundColor = '';
        document.getElementById('but_hidden').style.transform = 'rotate(0deg)';
        click -= 1;
    }
}

console.log(window.pageYOffset);

$('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  window.onload = function () {
    document.body.classList.add('loaded');
  }



  window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }





    
