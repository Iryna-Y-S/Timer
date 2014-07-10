var TimerDateMode = (function () {

    function Constructor () {
		
	    this.getTime = function () {
	
	        var today = new Date(),
	            day = this.normalize(today.getDate()),
	            month = this.normalize(today.getMonth() + 1),
		        year = this.normalize(today.getFullYear().toString().substring(2,4));
			
	        return month + " / " + day +" / " + year;
        };	
	
	    return this;	
    }
	
	Constructor.prototype = new Timer();
	
return Constructor;
})();
