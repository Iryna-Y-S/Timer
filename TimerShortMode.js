var TimerShortMode = (function (timer_el) {

    function Constructor (timer_el) {
	
	    this.getMode = function () {
		
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




