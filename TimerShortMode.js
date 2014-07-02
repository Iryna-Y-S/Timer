var TimerShortMode = (function (timer_el) {

    function Constructor (timer_el) {
	
	    this.render = function () {
		
	        var today = new Date(),		
		    hours = this.normalize(today.getHours()),
	        minutes = this.normalize(today.getMinutes());
	   
	    timer_el.innerHTML = hours + " : " + minutes;
        };	
	
	    return this;	
    }
	
	Constructor.prototype = new Timer();
	
    Constructor.prototype.normalize = function (value) {		
        if (value < 10) {
		    value = "0" + value;
		}
	    return value;
	};	

return Constructor;
})();




