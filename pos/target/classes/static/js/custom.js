
/*
 * navbar slide down animation
 */
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
	  
	  //displaying logout message with animation and hide
	  $('#logoutMessage').fadeOut(2000);
	  
	//displaying add success message with animation and hide
	  $('.message').fadeOut(2000);
	  
	  
	  /*
		 * data table
	  */
// --------------------------- Supplier info table-----------------------------------------
		var $table = $('#supplierInfoTable');
		console.log($table.length);
		if($table.length) {
			//console.log('inside the table');
			
			var jsonUrl ="/json/data/allSupplier";
			
			
			$table.dataTable({
				ajax: {
					url: jsonUrl,
					dataSrc: '',
					mDataProp: ''
					
				},
				aoColumns: [
					{
						mData: 'id'
					},
					{
						mData: 'name'
					},
					{
						mData: 'companyName'
					},
					{
						mData: 'id',
						bSortable: false,
						mRender: function(mData, type, row) {
							var str = "";
							str += "<a style='margin-right: 2px' href='/user/edit/"+mData+"/supplier' class='btn btn-xs btn-warning'>Edit</a>";
							str += "<a href='/user/delete/"+mData+"/supplier' class='btn btn-xs btn-danger'>Delete</a>";
							return str;
						}
					}
				],
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

// custom panel
$(document).ready(function() {
	//sliding part here
	// supplier slider
	$("#customSlide").click(function() {
		console.log("clicked");
		$("#panelHidden").slideToggle(500);
	}); 
	// view supplier slider
	$("#customSlide2").click(function() {
		//console.log("clicked");
		
		$("#panelHidden2").slideToggle(500, function(){
			//for handling table rendering problem
			$('#autoClick').trigger("click");
			$('#autoClick').trigger("click");
		});
	}); 
	
	// customer slider
	$("#customerSlide").click(function() {
		console.log("clicked");
		$("#customerPanelHidden").slideToggle(500);
	});
	// view customer slider
	$("#viewCustomerInfo").click(function() {
		console.log("clicked");
		$("#viewCustomerPanel").slideToggle(500);
	});
	
	// war house slider
	$("#warHouseSlide").click(function() {
		console.log("clicked");
		$("#warHousePanelHidden").slideToggle(500);
	}); 
	
	
	
	
	
});