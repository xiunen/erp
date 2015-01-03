$(function() {
    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
        // Avoid following the href location when clicking
        event.preventDefault();
        // Avoid having the menu to close when clicking
        event.stopPropagation();
        // If a menu is already open we close it
        //$('ul.dropdown-menu [data-toggle=dropdown]').parent().removeClass('open');
        // opening the one you clicked on
        $(this).parent().addClass('open');

        var menu = $(this).parent().find("ul");
        var menupos = menu.offset();

        if ((menupos.left + menu.width()) + 30 > $(window).width()) {
            var newpos = -menu.width();
        } else {
            var newpos = $(this).parent().width();
        }
        menu.css({
            left: newpos
        });

    });
});

$(function() {
    $('#gtable').dataTable({
        //"sScrollY": "350px",
        "bScrollCollapse": true,
        "bPaginate": true,
        "bJQueryUI": false,
        "aoColumnDefs": [{
            "sWidth": "10%",
            "aTargets": [-1]
        }],
        "bInfo": false
    });
});


<!--Begining of Date Picker-->
$(function() {
    $("#datepicker1").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'dd-mm-yy'
    });
    $("#datepicker2").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'dd-mm-yy'
    });

    var myDate = new Date();
    var prettyDate = myDate.getDate() + '-' + (myDate.getMonth() + 1) + '-' + myDate.getFullYear();
    $("#datepicker1").val(prettyDate);

});

/* Left Menu */

$(function() {

    var drawerName = '.drawer';

    $(drawerName).drawer({
        desktopEvent: 'click'
    });

    $("#toogle-menu").click(function(event) {
        event.preventDefault();
        var status = $(this).data("status");
        if (status == 'close') {
            $(drawerName).drawer('open');
            $(this).data("status", "open");
        } else {
            $(drawerName).drawer('close');
            $(this).data("status", "close");
        }
        return false;

    });
    
    // To remove hash from links when clicking on Left Menu items 
    $( ".menu-list > ul > li > a" ).click(function( event ) {
  	  event.preventDefault();

  	});
});





 