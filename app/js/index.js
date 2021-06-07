window.addEventListener('DOMContentLoaded', function(){

    const toggleMenu = document.querySelector('#toggle-menu');
    const links = document.querySelector('#links');
    const headerLinks = document.querySelectorAll('.header__links > a')
    const span = document.querySelectorAll('.header__menu > span')
    const header = document.querySelector('#header');
    const body = document.querySelector('#body');

    window.addEventListener('scroll', function(){
        if(this.scrollY > 20){
            header.classList.add('sticky');
            color('#161b40');
            
        }else{
            header.classList.remove('sticky');
            color('#fff');

        }
    })


    

    toggleMenu.addEventListener('click', () => {
        if(toggleMenu.classList.contains('toggle')){
            toggleMenu.classList.remove('toggle');
            console.log('hide');
            

            links.classList.remove('show');
            body.classList.remove('no-scroll');
            
        }else{
            toggleMenu.classList.add('toggle');
            console.log('show');
            links.classList.add('show');
            body.classList.add('no-scroll');
            
        }
    });

    window.addEventListener('resize', function() {
        if(window.innerWidth > 768){
            hide();
        }
    });


    function color(color){
        headerLinks.forEach(link => {
            link.style.color = color;
        });
        
        span.forEach(ele => {
            ele.style.backgroundColor = color;
        })
       
    }

    headerLinks.forEach(link => {
        link.addEventListener('click', () => {
            hide();
        })
    });
    function hide(){
        body.classList.remove('no-scroll');
        toggleMenu.classList.remove('toggle');
        links.classList.remove('show');

    };
});