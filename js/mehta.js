$(function(){


    $('.accordion').each(function(){



        $(this).click(function(){

           

            $(this).toggleClass('active-tab');
            $(this).next().slideToggle();


        });


    })



    $("a").on('click', function(e) {
		
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
          scrollTop: ($(target).offset().top-50)
        }, 600);
     });
   


    //form

    $("#signupForm").validate({

        


        rules: {
            full_name: "required",
           
          
          
            email: {
                required: true,
                email: true
            },
            phone: "required",

            reasone_for_contact: "required"

          
        },


        messages: {
            full_name: "Please enter your full name",
          
           
            email: "Please enter a valid email address",

            phone: "Please enter a valid Phone Number",

            reasone_for_contact: "Please enter reasone for contact"


          
        },

        
        submitHandler: function (form) {

            $.ajax(
                {
                type:'POST',
                url:'contact.php',
                data:$('form').serialize(),
                success:function(response)
                {
                   
           $("#signupForm").hide();

           

           $('.contact-form h3').text("Form Submitted Successfully");
                }
            });     



            return false; // required to block normal submit since you used ajax
        




        }





    })


    $header = $('#detect-position');
    
    $element_top_position = $header.offset().top+10;

    $window_top_position = $(window).scrollTop();


    if( $window_top_position >= $element_top_position){


        $('.site-header').addClass('onScroll');
 
     }


     $header_top = $('.site-header').height();

     $window_width = $(window).width();

     if($window_width < 992 ){

            $('#detect-position').css({height: +$header_top+'px'});

     }


    


     

    
    

     function stickyHeader(){
    

        $window_top_position = $(window).scrollTop();

  //  console.log($window_top_position +' = '+ $element_top_position);

    if( $window_top_position >= $element_top_position ){


        $('.site-header').addClass('onScroll');

    }

    else{

        $('.site-header').removeClass('onScroll');

    }

    }


    $(window).scroll(function(){
   
    
        stickyHeader();
    
    });

   



})