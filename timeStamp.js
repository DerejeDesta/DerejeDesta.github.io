
	function getCurrentDate(){
		var currentdate = new Date(); 
        var datetime = "Current date: " + currentdate.getMonth()+1 + "/"
                + (currentdate.getDate())  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
        document.write(datetime);
        alert(datetime);
	}
