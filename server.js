var express = require('express');
var app = express();
app.get("/", function(req, res){
		model={
			subjects:{
				"rand":{
					fullName:"",
					credits:0,
					workload:0
					
				}	
			},
			students:{
				"faculty":{
					"ilia@...":{
						name:"sbd",
						semesters:{
							"autumn":{
								subjects:{
									"rand":{
										lector:"sbd",
										practice:"sbd",
										marks:[0,0,0,0],
										bonusMarks:[0,0],
										attendance:{
											practice:0,
											lecture: 0
										},
										finalMark:0,
										zalik:0								
									}														
								}												
							}					
						}									
					}
				}
			}		
		}
	 res.send(model);
	
	
});

app.listen(3000);