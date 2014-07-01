var Timer = (function (timer_el) {

    function Constructor (timer_el) {
		
	    this.normalize = function (value) {		
            if (value < 10) {
		        value = "0" + value;
		    }
	        return value;
        }	
	
        this.render = function () {
	    }
	
	    return this;
	}

    return Constructor;
})();