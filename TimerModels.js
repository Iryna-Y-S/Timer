function Timer (timer_el) {

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

function TimerShortMode (timer_el) {
		
	this.render = function () {
	
	    var today = new Date(),		
			hours = this.normalize(today.getHours()),
	        minutes = this.normalize(today.getMinutes());
			
	    timer_el.innerHTML = hours + " : " + minutes;
    };	
	
	return this;	
}

TimerShortMode.prototype = new Timer();

function TimerFullMode (timer_el) {
	
	this.render = function () {
	
        var today = new Date(),
            hours = this.normalize(today.getHours()),
	        minutes = this.normalize(today.getMinutes()),
	        seconds = this.normalize(today.getSeconds());
			
	    timer_el.innerHTML = hours + " : " + minutes + " : " + seconds; 
	};
		
	return this;	
}

TimerFullMode.prototype = new Timer();

function TimerDateMode (timer_el) {
	
	this.render = function () {
	
	    var today = new Date(),
	        day = this.normalize(today.getDate()),
	        month = this.normalize(today.getMonth() + 1),
		    year = this.normalize(today.getFullYear().toString().substring(2,4));
			
	    timer_el.innerHTML = month + " / " + day +" / " + year;
	};	

    return this;
}
TimerDateMode.prototype = new Timer();	

