$(function () {
	"use strict";

	var data_url = "http://localhost:8000";
	var no_specials_found = false;

	$.ajax({
		async: false,
		dataType: "json",
		url: data_url,
		type: "GET",
		success: function (data) {
				document.write(JSON.stringify(data));
			}
		}
	});

});
