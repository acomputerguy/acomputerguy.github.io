// http://stackoverflow.com/questions/9335140/how-to-countdown-to-a-date
//dynamically pull up summer, thanksgiving, christmas, holidays, conventions if added
function daysLeft() {
	var end = new Date('012/25/2019 8:00:00 AM');

	var _second = 1000;
	var _minute = _second * 60;
	var _hour = _minute * 60;
	var _day = _hour * 24;
	var timer;

	function showRemaining() {
		var now = new Date();
		var distance = end - now;

		var days = Math.floor(distance / _day);
		var hours = Math.floor((distance % _day) / _hour);
		var minutes = Math.floor((distance % _hour) / _minute);
		var seconds = Math.floor((distance % _minute) / _second);

		document.getElementById('event_Countdown').innerHTML = days;
}

	timer = setInterval(showRemaining, 1000);
						}
daysLeft();
			
//function daysLeft() {
//	p = document.getElementById("countdown");
									
//	var currentTime = new Date();
//	var currentDay = currentTime.getDate();
//	var futureTime = new Date("Janurary 23, 2017 8:00:00");
//	var futureDay = futureTime.getDate();
//	var daysLeft = 0;
		
//	if(currentDay < futureDay)
//	{ daysLeft = futureDay - currentDay; }
//	else if (currentDay > futureDay)
//	{ daysLeft = currentDay - futureDay; }
	
//	p.innerHTML = daysLeft;
//}
//daysLeft();