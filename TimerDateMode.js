var TimerDateMode = (function (timer_el) {

    function Constructor (timer_el) {
		
	    this.render = function () {
	
	        var today = new Date(),
	            day = this.normalize(today.getDate()),
	            month = this.normalize(today.getMonth() + 1),
		        year = this.normalize(today.getFullYear().toString().substring(2,4));
			
	            timer_el.innerHTML = month + " / " + day +" / " + year;
        };	
	
	    return this;	
    }

Constructor.prototype = new Timer();

return Constructor;
})();