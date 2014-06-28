function TimerController () {

    var timer_el = document.getElementById("timer"),
	
		timer = new Timer(timer_el),
		timer_short_mode = new TimerShortMode(timer_el),
		timer_full_mode = new TimerFullMode(timer_el),
		timer_date_mode = new TimerDateMode(timer_el),
		current_timer = timer_short_mode,
		
		timer_interval = setInterval(function(){
		        current_timer.render();
			}, 1000);
			
	timer_short_mode.render();	
		
	timer_el.addEventListener("click", changeMode, false);
    timer_el.addEventListener("contextmenu", changeDate, false);
	
	function changeMode () {
	    		
	    if (!(current_timer instanceof TimerShortMode)) {
			current_timer = timer_short_mode;
	    } else {
			current_timer = timer_full_mode;
	    }
		
		current_timer.render();
	}
	
    function changeDate (e) {
		e.preventDefault();
		
	     if (!(current_timer instanceof TimerDateMode)) {
			current_timer = timer_date_mode;
	    } else {
			current_timer = timer_short_mode;
	    }
		
		current_timer.render();
	}
	return this;
}	