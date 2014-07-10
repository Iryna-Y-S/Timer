var TimerShortMode = (function () {

    function Constructor () {
	
	    this.getTime = function () {
		
	        var today = new Date(),		
		    hours = this.normalize(today.getHours()),
	        minutes = this.normalize(today.getMinutes());
	   
	        return hours + " : " + minutes;
        };	
	
	    return this;	
    }
	
	Constructor.prototype = new Timer();

return Constructor;
})();




