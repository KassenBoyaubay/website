







(function(e,t,n){var r=e.querySelectorAll(".modal-add-descr")[0];r.className=r.className.replace(/(^|\s)no-js(\s|$)/,"$1js$2")})(document,window,0);

'use strict';

  ;( function ( document, window, index )
  {
    // feature detection for drag&drop upload
    var isAdvancedUpload = function()
      {
        var div = document.createElement( 'div' );
        return ( ( 'draggable' in div ) || ( 'ondragstart' in div && 'ondrop' in div ) ) && 'FormData' in window && 'FileReader' in window;
      }();


    // applying the effect for every form
    var forms = document.querySelectorAll( '.box' );
    Array.prototype.forEach.call( forms, function( form )
    {
      var input    = form.querySelector( 'input[type="file"]' ),
        label    = form.querySelector( 'label' ),
        errorMsg   = form.querySelector( '.box__error span' ),
        restart    = form.querySelectorAll( '.box__restart' ),
        droppedFiles = false,
        showFiles  = function( files )
        {
          for(var i=0;i<files.length;i++)
          {
            var reader = new FileReader();
            reader.onload = function(e) {
              var curImgHtml = '<img src="'+e.target.result+'"/>';
              var uploadedHtml = '<div class="one-uploaded">'+curImgHtml+'</div>';
              $('.uploaded-img').prepend(uploadedHtml);
            }
            
            reader.readAsDataURL(files[i]); // convert to base64 string


          }

          if(files.length == 1)
          {
            var imgHtml = '<img class="uploaded-img-one" title="'+files[ 0 ].name+'" alt="'+files[ 0 ].name+'"/>';
            $(label).html(imgHtml);

            var reader = new FileReader();
            reader.onload = function(e) {
              $('img', label).attr('src', e.target.result);
            }
            
            reader.readAsDataURL(files[0]); // convert to base64 string
          }else{
            $('.box-in').fadeOut();
            $('.uploaded-img').fadeIn();
          }
        },
        triggerFormSubmit = function()
        {
          var event = document.createEvent( 'HTMLEvents' );
          event.initEvent( 'submit', true, false );
          form.dispatchEvent( event );
        };

      // letting the server side to know we are going to make an Ajax request
      var ajaxFlag = document.createElement( 'input' );
      ajaxFlag.setAttribute( 'type', 'hidden' );
      ajaxFlag.setAttribute( 'name', 'ajax' );
      ajaxFlag.setAttribute( 'value', 1 );
      form.appendChild( ajaxFlag );

      // automatically submit the form on file select
      input.addEventListener( 'change', function( e )
      {
        showFiles( e.target.files );
        
        triggerFormSubmit();

        
      });

      function addMoreFiles(e, item){
        showFiles( e.target.files );
        triggerFormSubmit();

        $(item).attr('id', '');
        var parent = $(item).parent();
        var inpHtml = '<input type="file" id="more" class="more-inp" name="files[]">';
        $(parent).prepend(inpHtml);

        $('.more-inp').change(function(e){
            addMoreFiles(e, this);
        });
      }

      $('.more-inp').change(function(e){
        addMoreFiles(e, this);

      });

      /*
      function addMoreFiles(e, item){
        showFiles( e.target.files );
        triggerFormSubmit();

        $(item).attr('id', '');
        var parent = $(item).parent();
        var inpHtml = '<input type="file" id="more" class="more-inp" name="files[]">';
        $(parent).prepend(inpHtml);

        $('.more-inp').change(function(e){
            addMoreFiles(e, this);
        });
      }

      $('.more-inp').change(function(e){
        addMoreFiles(e, this);

      });
      */

      // drag&drop files if the feature is available
      if( isAdvancedUpload )
      {
        form.classList.add( 'has-advanced-upload' ); // letting the CSS part to know drag&drop is supported by the browser

        [ 'drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop' ].forEach( function( event )
        {
          form.addEventListener( event, function( e )
          {
            // preventing the unwanted behaviours
            e.preventDefault();
            e.stopPropagation();
          });
        });
        [ 'dragover', 'dragenter' ].forEach( function( event )
        {
          form.addEventListener( event, function()
          {
            form.classList.add( 'is-dragover' );
          });
        });
        [ 'dragleave', 'dragend', 'drop' ].forEach( function( event )
        {
          form.addEventListener( event, function()
          {
            form.classList.remove( 'is-dragover' );
          });
        });
        form.addEventListener( 'drop', function( e )
        {
          droppedFiles = e.dataTransfer.files; // the files that were dropped
          showFiles( droppedFiles );

          
          triggerFormSubmit();

                  });
      }


      // if the form was submitted
      form.addEventListener( 'submit', function( e )
      {
        // preventing the duplicate submissions if the current one is in progress
        if( form.classList.contains( 'is-uploading' ) ) return false;

        form.classList.add( 'is-uploading' );
        form.classList.remove( 'is-error' );

        if( isAdvancedUpload ) // ajax file upload for modern browsers
        {
          e.preventDefault();

          // gathering the form data
          var ajaxData = new FormData( form );
          if( droppedFiles )
          {
            Array.prototype.forEach.call( droppedFiles, function( file )
            {
              ajaxData.append( input.getAttribute( 'name' ), file );
            });
          }

          // ajax request
          var ajax = new XMLHttpRequest();
          ajax.open( form.getAttribute( 'method' ), form.getAttribute( 'action' ), true );

          ajax.onload = function()
          {
            form.classList.remove( 'is-uploading' );
            if( ajax.status >= 200 && ajax.status < 400 )
            {
              var data = JSON.parse( ajax.responseText );
              form.classList.add( data.success == true ? 'is-success' : 'is-error' );
              if( !data.success ) errorMsg.textContent = data.error;
            }
            else alert( 'Error. Please, contact the webmaster!' );
          };

          ajax.onerror = function()
          {
            form.classList.remove( 'is-uploading' );
            alert( 'Error. Please, try again!' );
          };

          ajax.send( ajaxData );
        }
        else // fallback Ajax solution upload for older browsers
        {
          var iframeName  = 'uploadiframe' + new Date().getTime(),
            iframe    = document.createElement( 'iframe' );

            $iframe   = $( '<iframe name="' + iframeName + '" style="display: none;"></iframe>' );

          iframe.setAttribute( 'name', iframeName );
          iframe.style.display = 'none';

          document.body.appendChild( iframe );
          form.setAttribute( 'target', iframeName );

          iframe.addEventListener( 'load', function()
          {
            var data = JSON.parse( iframe.contentDocument.body.innerHTML );
            form.classList.remove( 'is-uploading' )
            form.classList.add( data.success == true ? 'is-success' : 'is-error' )
            form.removeAttribute( 'target' );
            if( !data.success ) errorMsg.textContent = data.error;
            iframe.parentNode.removeChild( iframe );
          });
        }
      });


      // restart the form if has a state of error/success
      Array.prototype.forEach.call( restart, function( entry )
      {
        entry.addEventListener( 'click', function( e )
        {
          e.preventDefault();
          form.classList.remove( 'is-error', 'is-success' );
          input.click();
        });
      });

      // Firefox focus bug fix for file input
      input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
      input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });

    });
  }( document, window, 0 ));


// Показать телефон
$('.show-phone').click(function(event) {
  $(this).find('.hides').fadeOut(0);
  $(this).find('.shown').fadeIn();
  event.preventDefault();
});

// Вкладки на самой странице дизайнера


$(function() {

  $('.des-tabs ul').on('click', 'li:not(.active) a', function(event) {
    $(this).parent().addClass('active').siblings().removeClass('active')
      .parents('.des-cont').find('.one-des-tab').fadeOut(0).eq($(this).parent().index()).fadeIn();
    event.preventDefault();
  })

});




// Вкладки в модалке


$(function() {

  $('.modal-add-nav ul').on('click', 'li:not(.active)', function() {
    $(this).addClass('active').siblings().removeClass('active')
      .parents('.modal-add-tabs').find('.one-modal-tab-wrap').fadeOut(0).eq($(this).index()).fadeIn();
  })

});


$('.photo-link').click(function(event) {
  $('.modal-add-nav ul li').removeClass('active').eq(0).addClass('active');
  $('.one-modal-tab-wrap').fadeOut(0).eq(0).fadeIn();
});
$('.video-link').click(function(event) {
  $('.modal-add-nav ul li').removeClass('active').eq(1).addClass('active');
  $('.one-modal-tab-wrap').fadeOut(0).eq(1).fadeIn();
});

// добавить коммент к коменту
$('.one-comment-add-feed a').click(function(event) {
  $('.comm-was-send').slideUp(0);
  $('.form-inside-comm').slideToggle();

  event.preventDefault();
});

$('.form-inside-bt .orange-bt').click(function(event) {
  $('.form-inside-comm').slideUp();
  $('.comm-was-send').slideDown();
  event.preventDefault();
});

$('.was-close').click(function(event) {
  $('.comm-was-send').slideUp();
  event.preventDefault();
});





$(document).ready(function() {
  $('.modal-gall-in').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    //fade: true,
    asNavFor: '.modal-gall-min-in',
    focusOnSelect: false,
    adaptiveHeight: true
  });


  $('.modal-gall-min-in').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    //centerPadding: 0,
    asNavFor: '.modal-gall-in',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    //variableWidth: true
    responsive: [
      
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});
// $('.modal-gall-min-in > div').click(function() {
//     $('.modal-gall-in').slick('slickGoTo',$(this).index());
// })

$('.modal').on('shown.bs.modal', function (e) {
    $('.modal-gall-min-in').resize();
    $('.modal-gall-in').resize();
    

    //$('.modal-gall-in').slick({ initialslide: parseInt(initialslide) });

    //$('.modal-gall-min-in').slick({ initialslide: parseInt(initialslide) });
});

$('a[data-toggle="modal"]').click(function()
{
  if($(this).attr('data-target') == '#gall')
  {
    //var curContainer = $(this).closest('.all-photo-comm');
    var curElement = $(this).closest('.one-comm-photo');
    var curIndex = $(curElement).index();

    $('.modal-gall-min-in .slick-slide:eq('+curIndex+')').click();

    $('.modal-gall-in').slick("refresh");
  }
  
});



// Показать весть текст в планшет и моб версии
$('.full-text a').click(function(event) {
  $(this).fadeOut();
  $('.one-des-about-in').addClass('open');
  event.preventDefault();
});

$('.add-you-inp input').change(function(){
  var videoid = $(this).val();

  var matches = videoid.match(/^https?:\/\/www\.youtube\.com\/.*[?&]v=([^&]+)/i) || videoid.match(/^https?:\/\/youtu\.be\/([^?]+)/i);
  if (matches) {
    videoid = matches[1];
  }
  if (videoid.match(/^[a-z0-9_-]{11}$/i) === null) {
    $("<p style='color: #F00;'>Unable to parse Video ID/URL.</p>").appendTo("#video-data-1");
    $('.thumb-videos').html('');
    return;
  }
  $.getJSON("https://www.googleapis.com/youtube/v3/videos", {
    key: "AIzaSyB3k-KF6zIz_mVYcMndxa4qJmn-tB5qTW8",
    part: "snippet,statistics",
    id: videoid
  }, function(data) {
    if (data.items.length === 0) {
      console.log('Video not found');
       $('.thumb-videos').html('');
      return;
    }

    var video_thumbnail = '<img src="'+data.items[0].snippet.thumbnails.medium.url+'">';
    var video_title = data.items[0].snippet.title;
    var videoHtml = '<div class="one-video"><div class="one-thumb-video"><i><svg width="47" height="33" viewBox="0 0 47 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.65 2.35714C46.2167 3.73214 46.6083 7.07143 46.6083 7.07143C46.6083 7.07143 47 10.8036 47 14.5357V18.0714C47 22 46.6083 25.7321 46.6083 25.7321C46.6083 25.7321 46.0208 29.0714 44.65 30.4464C42.8875 32.2143 40.9292 32.2143 39.95 32.4107C33.2917 33 23.5 33 23.5 33C23.5 33 11.1625 33 7.44167 32.6071C6.4625 32.4107 4.1125 32.6071 2.35 30.6429C0.783333 29.2679 0.391667 25.9286 0.391667 25.9286C0.391667 25.9286 0 22 0 18.2679V14.7321C0 10.8036 0.391667 7.07143 0.391667 7.07143C0.391667 7.07143 0.979167 3.73214 2.35 2.35714C4.1125 0.589286 6.07083 0.589286 7.05 0.392857C13.7083 0 23.5 0 23.5 0C23.5 0 33.2917 0 39.95 0.392857C40.9292 0.392857 42.8875 0.392858 44.65 2.35714Z" fill="white"></path><path d="M46.6083 7.07143C46.6083 7.07143 46.2167 3.73214 44.65 2.35714C42.8875 0.392858 40.9292 0.392857 39.95 0.392857C33.2917 8.78104e-08 23.5 0 23.5 0C23.5 0 13.7083 8.78104e-08 7.05 0.392857C6.07083 0.589286 4.1125 0.589286 2.35 2.35714C0.979167 3.73214 0.391667 7.07143 0.391667 7.07143C0.391667 7.07143 0 10.8036 0 14.7321V18.2679C0 22 0.391667 25.9286 0.391667 25.9286C0.391667 25.9286 0.783333 29.2679 2.35 30.6429C4.1125 32.6071 6.4625 32.4107 7.44167 32.6071C11.1625 33 23.5 33 23.5 33C23.5 33 33.2917 33 39.95 32.4107C40.9292 32.2143 42.8875 32.2143 44.65 30.4464C46.0208 29.0714 46.6083 25.7321 46.6083 25.7321C46.6083 25.7321 47 22 47 18.0714V14.5357C47 10.8036 46.6083 7.07143 46.6083 7.07143ZM18.6042 22.5893V9.42857L31.3333 16.1071L18.6042 22.5893Z" fill="#DB3526"></path></svg></i>';
    videoHtml += video_thumbnail;
    videoHtml += '<div class="one-thumb-video-tit">'+video_title+'</div>';

    $('.thumb-videos').html(videoHtml);


  }).fail(function(jqXHR, textStatus, errorThrown) {
    console.log(jqXHR.responseText || errorThrown);
  });
});