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
            hours = today.getHours(),
	        minutes = today.getMinutes();
			
			hours = this.normalize(hours);
	        minutes = this.normalize(minutes);
			
	    timer_el.innerHTML = hours + " : " + minutes;
    };	
	
	return this;	
}

TimerShortMode.prototype = new Timer();

function TimerFullMode (timer_el) {
	
	this.render = function () {
	
        var today = new Date(),
            hours = today.getHours(),
	        minutes = today.getMinutes(),
	        seconds = today.getSeconds();
			
			hours = this.normalize(hours);
	        minutes = this.normalize(minutes);
	        seconds = this.normalize(seconds);
			
	    timer_el.innerHTML = hours + " : " + minutes + " : " + seconds; 
	};
		
	return this;	
}

TimerFullMode.prototype = new Timer();

function TimerDateMode (timer_el) {
	
	this.render = function () {
	
	    var today = new Date(),
	        day = today.getDate(),
	        month = today.getMonth() + 1,
		    year = today.getFullYear().toString().substring(2,4);

            day = this.normalize(day);
	        month = this.normalize(month);
		    year = this.normalize(year);
			
	    timer_el.innerHTML = month + " / " + day +" / " + year;
	};	

    return this;
}
TimerDateMode.prototype = new Timer();	

