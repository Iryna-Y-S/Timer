function TimerController () {

    var timer_el = document.getElementById("timer"),
	
		timer_short_mode = new TimerShortMode(timer_el),
		timer_full_mode = new TimerFullMode(timer_el),
		timer_date_mode = new TimerDateMode(timer_el),
		current_timer = timer_short_mode,
		
		timer_interval = setInterval(function(){
		        render(current_timer);
			}, 1000);
			
	render(timer_short_mode);	
		
	timer_el.addEventListener("click", changeMode, false);
    timer_el.addEventListener("contextmenu", changeDate, false);

    function render (current_timer) {
	      timer_el.innerHTML = current_timer.getMode();
	}	
	
	function changeMode () {
	    		
	    if (!(current_timer instanceof TimerShortMode)) {
			current_timer = timer_short_mode;
	    } else {
			current_timer = timer_full_mode;
	    }
		
		render(current_timer);
	}
	
    function changeDate (e) {
		e.preventDefault();
		
	     if (!(current_timer instanceof TimerDateMode)) {
			current_timer = timer_date_mode;
	    } else {
			current_timer = timer_short_mode;
	    }
		
		render(current_timer);
	}
	return this;
}	