
$(document).ready(function(){
	

	$('.submenu-wrap .pt').click(function(){
		var category_name = $(this).attr('category');
		category(category_name);
	});

	$('.submenu-wrap .pt.sub .submenu li').click(function(){
		var category = $(this).closest('.pt.sub').attr('category')
		var sub_category = $(this).attr('sub-category');
		sub_category(category,sub_category);
	});

	function category (category_name) {
		var sort = $('.sort').attr('sort');
		var sub_sort = $('.sort .spisok-type').attr('sub-sort');
		var current_page = $('.goods').attr('current-page');
		var sub_category = 'default';

		$.ajax({
		  url: 'select_category',
		  type: "POST",
		  data: "category="+category_name+"&sub_category="+sub_category+"&sort="+sort+"&sub_sort="+sub_sort+"&current_page="+current_page,
		  success: function(html,name){
		  	$('.goods').html('');
		  	var json = $.parseJSON(html);
		  	$('.goods').html(json.data);
		  	$('.submenu-wrap .submenu-center h2').html('');
		  	var json = $.parseJSON(name);
		  	$('.submenu-wrap .submenu-center h2').html(json.data);
		  },
		  dataType: 'html'
		});
	}


	function sub_category (category_name,sub_category) {
		var sort = $('.sort').attr('sort');
		var sub_sort = $('.sort .spisok-type').attr('sub-sort');
		var current_page = $('.goods').attr('current-page');

		$.ajax({
		  url: 'select_category',
		  type: "POST",
		  data: "category="+category_name+"&sub_category="+sub_category+"&sort="+sort+"&sub_sort="+sub_sort+"&current_page="+current_page,
		  success: function(html,name){
		  	$('.goods').html('');
		  	var json = $.parseJSON(html);
		  	$('.goods').html(json.data);
		  	$('.submenu-wrap .submenu-center h2').html('');
		  	var json = $.parseJSON(name);
		  	$('.submenu-wrap .submenu-center h2').html(json.data);
		  },
		  dataType: html
		});
	}
	
	
});