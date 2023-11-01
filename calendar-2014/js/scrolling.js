$(function(){
	$(".main_archive_inner img").click(function(){
			$(".left_content_text div").animate({ opacity: 0 }, 300);
			$(".left_content_text div").hide(100);
			$(".right_content_img div").animate({ opacity: 0 }, 300);
			$(".right_content_img div").hide(100);
			var element_id	= $(this).attr("id");
			element_txt = $('#' + element_id + '_txt');
			element_img = $('#' + element_id + '_img');
			element_txt.show(300).animate({ opacity: 1 }, 300);
			element_img.show(300).animate({ opacity: 1 }, 300);
		 });
});