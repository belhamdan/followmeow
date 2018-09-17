
$(window) .load( function() {

	$(document) .mousemove( function(e) {
		var x = e.pageX;
		var y = e.pageY;
		$('#kitty') .css ('margin-left', x);
		$('#kitty') .css ('margin-top', y);
		$('#corpineo') .css ('margin-left', x);
		$('#corpineo') .css ('margin-top', y);

	});

$(document) .mousemove( function(e) {
		var x = e.pageX;
		var y = e.pageY;	
		$('#patineaf') .css ('margin-left', x);
		$('#patineaf') .css ('margin-top', y/14);
		$('#patineat') .css ('margin-left', x);
		$('#patineat') .css ('margin-top', y);

	});


});