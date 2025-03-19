

$( function() {
    $( "#inputCheckIn" ).datepicker();
    $( "#inputCheckOut" ).datepicker();


    $('.slider').slick({
        
        dots: true,
        slidesToShow:3,
        arrows: false,
        slidesToScroll:1,
        autoplay: true,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
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

      function videoToggle(){

            video = $('.main-video').get(0)

            if(video.paused){

                video.play();
                $('.video-control-play').hide();
                $('.video-control-pause').show();

            }else{

                video.pause();
            }
      }

      $('.video-control-play').click(function(){

        videoToggle();

      })

      $('.video-control-pause').click(function(){

        videoToggle();
        $('.video-control-pause').hide();
        $('.video-control-play').show();

      })
  } );





  