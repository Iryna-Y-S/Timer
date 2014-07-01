var TimerFullMode = (function (timer_el) {

    function Constructor (timer_el) {
		
	    this.render = function () {
	
	        var today = new Date(),		
			    hours = this.normalize(today.getHours()),
	            minutes = this.normalize(today.getMinutes()),
			    seconds = this.normalize(today.getSeconds());
			
	        timer_el.innerHTML = hours + " : " + minutes + " : " + seconds; 
        };	
	
	    return this;	
    }

Constructor.prototype = new Timer();

return Constructor;
})();