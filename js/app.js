$(document).ready(function(){

    $('.profile-button').on('click',function(){
        $('#left-nav').css('left', '0');
    });

    $('#left-nav-close-btn').on('click',function(){
        $('#left-nav').css('left', '-100%');
    });

    const project_images = document.querySelectorAll('.project-image');
    const close_buttons = document.querySelectorAll('.carousel-close-button');

    project_images.forEach(openCarouselByID);
    close_buttons.forEach(closeCarouselByID);

    function openCarouselByID(item, index, arr){
        arr[index].addEventListener('click', function(){
            
            switch(arr[index].id){
                case "can":
                        $('.career-carousel').removeClass('d-none');
                    break;
                case "booking":
                        $('.booking-carousel').removeClass('d-none');
                    break;
                case "deanslist":
                        $('.deanslist-carousel').removeClass('d-none');
                    break;
                case "lrc":
                        $('.lrc-carousel').removeClass('d-none');
                    break;
                case "ciso":
                        $('.ciso-carousel').removeClass('d-none');
                    break;
                case "clinic":
                        $('.clinic-carousel').removeClass('d-none');
                    break;
            }
        });
    }

    function closeCarouselByID(item, index, arr){
        arr[index].addEventListener('click', function(){
            
            switch(arr[index].id){
                case "btn-can":
                        $('.career-carousel').addClass('d-none');
                    break;
                case "btn-booking":
                        $('.booking-carousel').addClass('d-none');
                    break;
                case "btn-deanslist":
                        $('.deanslist-carousel').addClass('d-none');
                    break;
                case "btn-lrc":
                        $('.lrc-carousel').addClass('d-none');
                    break;
                case "btn-ciso":
                        $('.ciso-carousel').addClass('d-none');
                    break;
                case "btn-clinic":
                        $('.clinic-carousel').addClass('d-none');
                    break;
            }
        });
    }


});
