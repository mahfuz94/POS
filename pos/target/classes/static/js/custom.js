$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');       
        }
    );
});


$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	  
	  $('#logoutMessage').fadeOut(2000);
	  
});

// custom panel
$(document).ready(function() {
	
	$("#customSlide").click(function() {
		console.log("clicked");
		$("#panelHidden").slideToggle(500);
	}); 
	
	$("#customSlide2").click(function() {
		//console.log("clicked");
		$('#autoClick').trigger("click");
		$("#panelHidden2").slideToggle(500);
	}); 
	
	
	/*
	 * data table
	 */
	
	var supplierInfo = [
		['1', 'Mahfuz', 'abc', '1'],
		['2', 'Mahfuz', 'abc', '2'],
		['3', 'Mahfuz', 'abc', '3'],
		['4', 'Mahfuz', 'abc', '4'],
		['5', 'Mahfuz', 'abc', '5'],
		['6', 'Mahfuz', 'abc', '6'],
		['7', 'Mahfuz', 'abc', '7']
	];
	
	var $table = $('#supplierInfoTable');
	console.log($table.length);
	if($table.length) {
		//console.log('inside the table');
		$table.dataTable({
			data: supplierInfo,
			//"bSort": false,
			"bJQueryUI": true,
			"sPaginationType" : "full_numbers",
			"sScrollY": "200px",
			"bScrollCollapse": true,
			"paging": false,
			"info": false
			
		});
	}
	
	
	
	
});