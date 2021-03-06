this.ckanext || (this.ckanext = {})
this.ckanext.helix || (this.ckanext.helix = {})

jQuery(document).ready(function ($) {
    
    var console = window.console
    var debug = $.proxy(console, 'debug') 
    $('[data-toggle="tooltip"]').tooltip(); 
    init();
});

function init() {

    var obj = $('.nav-pills > li > a[href$="/group"]');
    
    // Mouse enter and leave listeners on groups button
    obj.on('mouseenter', function(){
        $('#menu-block').addClass('enabled');
        $('#menu-block-home').addClass('enabled');
        obj.parent().addClass('painted');
    });
    obj.on('mouseleave', function(){
        $('#menu-block').removeClass('enabled');
        $('#menu-block-home').removeClass('enabled');
        obj.parent().removeClass('painted');
    });

    // Add listeners also on menu itself to keep it enabled
    $('#menu-block').on('mouseenter', function(){
        $('#menu-block').addClass('enabled');
        obj.parent().addClass('painted');
    });
    $('#menu-block').on('mouseleave', function(){
        $('#menu-block').removeClass('enabled');
        obj.parent().removeClass('painted');
    });
    $('#menu-block-home').on('mouseenter', function(){
        $('#menu-block-home').addClass('enabled');
        obj.parent().addClass('painted');
    });
    $('#menu-block-home').on('mouseleave', function(){
        $('#menu-block-home').removeClass('enabled');
        obj.parent().removeClass('painted');

    });

    //Upload button hover
    $('.image-upload input[type="file"]').on('mouseenter', function(){
        $(this).parent().find('.btn:first').addClass('btn-hover');
        //$(this).parent().find('.btn:first').addClass('btn-hover');
    });

    $('.image-upload input[type="file"]').on('mouseleave', function(){
        
        $(this).parent().find('.btn:first').removeClass('btn-hover');
        //$(this).parent().find('.btn:first').removeClass('btn-hover');
    });

    // Detect OS for applying OS-specific styles
    
    var os = navigator.platform;
    console.log('Detected platform: ' + os);
    if (os.indexOf('Linux') == 0) {
        $('head').append('<link rel="stylesheet" href="/css/linux-override.css" type="text/css" />');
    }

    //Breadcrumbs auto hide all but last element
    var bread_items = $('.breadcrumbs a:first').next().nextAll();
    bread_items = bread_items.not(':last');

    bread_items.each(function(idx) {
        //console.log($(this).context.innerText);
        //$(this).context.innerText = "...";
        $(this).addClass('breadcrumb-hide-text');
    });
       
    var toolbar = $('.breadcrumbs');
    toolbar.on('mouseenter', function(){
        bread_items.each(function(idx) {
            //console.log($(this).context.innerText);
            //$(this).context.innerText = "...";
            $(this).removeClass('breadcrumb-hide-text');
            //addClass('breadcrumb-hide-text');
        });
    });

    toolbar.on('mouseleave', function(){
        bread_items.each(function(idx) {
            //console.log($(this).context.innerText);
            //$(this).context.innerText = "...";
            $(this).addClass('breadcrumb-hide-text');
            //addClass('breadcrumb-hide-text');
        });
    });
    
    //bread_items.on('mouseenter', function(){
        //$(this).removeClass('breadcrumb-hide-text');
    //});
    //bread_items.on('mouseleave', function(){
        //$(this).addClass('breadcrumb-hide-text');
    //});
}

