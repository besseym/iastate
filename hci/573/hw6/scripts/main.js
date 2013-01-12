function focus_form(){
	$("#amount").focus();
};

function buildFlashHtmlMessage(message){

	var messageArray = new Array();
	messageArray.push(message);
	return buildflashHtml(messageArray);
};

function buildflashHtml(messageArray){

	var messageHtml = "<ul>";
	for (i in messageArray){
		messageHtml += "<li>" + messageArray[i] + "</li>";
	}
	messageHtml += "</ul>";
	
	return messageHtml;
};

function setupDeleteHandlers(){
	
	$('.delete-link').click(function(){
		
		var this_href = this.href;
		var id = this.id.replace('delete-link-', '');
		//alert(id);
		
		$.ajax({
			type: "GET",
			url: "transaction_delete.php?action=DELETE&id=" + id,
			data: '',
			success: function(data) {
			
				var messageHtml = buildFlashHtmlMessage("Your transaction was successfully deleted.");
				$("#flash").addClass("success");
				$('#flash').fadeIn(1000).show().html(messageHtml);
			
				//reload transactions because a transaction has been deleted
				reload();
			}
		});
		
		return false;
	});
};

function reload(){

	$('#transactions').load('transaction_list.php', function(){
			
		//re-attach delete handlers to delete links
		setupDeleteHandlers();
	});
	$('#summary').load('transaction_totals.php', function(){
	
		//reload chart with updated data
		load_chart();
	});
};

function load_chart(){

	jQuery('#totals').gvChart({
		chartType: 'ColumnChart',
		gvSettings: {
			legend:'right',
			vAxis: {title: 'Total'},
			hAxis: {title: 'Category'},
			width: 600,
			height: 400
			}
	});
};

$(document).ready(function() {
 
 	//focus form on first input
 	focus_form();
 	
 	//load the transaction summary gv chart
 	load_chart();
 	
 	//attach delete handlers to delete links
 	setupDeleteHandlers();
 
 	//form submit javascript handler
 	$("#submit").click(function(){
 	
 		$("#flash").hide();
 		$("#flash").removeClass("success, error");
 	
 		//retrieve input values
 		var amount = $.trim($("#amount").val());
 		var category = $.trim($("#category").val());
 		var description = $.trim($("#description").val());
 		
 		var messageArray = new Array();
 		if(amount == ''){
 			messageArray.push("Amount is a required field.");
 		}
 		else if(!$.isNumeric(amount)){
 			messageArray.push("Amount needs to be a numeric value.");
 		}
 		
 		if(category == ''){
 			messageArray.push("Category is a required field.");
 		}
 		
 		var description_max_length = 250;
 		if(description.length > description_max_length){
 			messageArray.push("Description needs to be less than " + description_max_length + " characters long.");
 		}
 		
 		if(messageArray.length > 0){
 			var messageHtml = buildflashHtml(messageArray);
 			$("#flash").addClass("error");
 			$('#flash').fadeIn(1000).show().html(messageHtml);
 		}
 		else {
 			var datastring = 'amount=' + amount + "&category=" + category + "&description=" + description + "&submit=add";
 			
 			$.ajax({
				type: "POST",
				url: "transaction_post.php",
				data: datastring,
				success: function(data) {
				
					//Clear form inputs
					$("#amount, #category, #description").val('');
					
					var messageHtml = buildFlashHtmlMessage("Your transaction was successfully posted.");
					$("#flash").addClass("success");
					$('#flash').fadeIn(1000).show().html(messageHtml);
					
					//reload transactions because new transaction has been created
					reload();
				}
			});
 		}
 		
 		return false;
 	});
 	
 });