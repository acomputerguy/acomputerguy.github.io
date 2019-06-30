function hackertyper() {
	//spell out acomputerguy
        var strs = ["g", "!", "r", "a"];
        var i = 0;
        var val = document.getElementById("char1");
		var interval = setInterval( function() { charChange( val, strs ); } , 100 );
        
		//change char in the same char like x -> y -> z, then za-> zb -> zc (SAME char)
        function charChange( val, strs ) {
            val.innerHTML = strs[i];
            i++;
            if(i >= strs.length) { clearInterval(interval); }

    } //end of change char fcn
		function generateCharArr( numChars ) {
			var outputText = ""
			var possibleText = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`1234567890-=~!@#$%^&*()_+[]\;',./{}|:\"<>?"
			
			for(var i = 0; i < numChars; i++)
				outputText += possibleText.charAt(Math.floor(Math.random() * possibleText.length));
			
			var arrChar = outputText.split('')
			console.log(arrChar)
			//var arrCharAndLast = arrChar.push('c') //adds c over and over and over...
			//console.log(arrCharAndLast)
			//return arrCharAndLast
			return arrChar
	}
	//make the new char
		setTimeout(function() {
			i = 0;
			interval = setInterval( 
				function(){
					charChange(
						document.getElementById("char2"),
						//generateCharArr( 7 ) //new arr made 7 times
						["i", "&", "Y", "h", "-", "2", "c"] 
					) ;
				}
			, 100); //#ms until next char
		} , 450); //# elements in str * 100 + 50 (50 for avoiding race conditions)
		
		setTimeout(function() {
			i = 0;
			interval = setInterval( 
				function(){
					charChange(
						document.getElementById("char3"),
						["p", "O", "o"] 
					) ;
				}
			, 100);
		} , 1200);
		
		setTimeout(function() {
			i = 0;
			interval = setInterval( 
				function(){
					charChange(
						document.getElementById("char4"),
						["u", "T", "3", "#", "m"] 
					) ;
				}
			, 100);
		} , 1550);
		
		setTimeout(function() {
			i = 0;
			interval = setInterval( 
				function(){
					charChange(
						document.getElementById("char5"),
						["z", "$", "R", "u", ";", "p"] 
					) ;
				}
			, 100);
		} , 2100);
		
		setTimeout(function() {
			i = 0;
			interval = setInterval( 
				function(){
					charChange(
						document.getElementById("char6"),
						["q", "u"] 
					) ;
				}
			, 100);
		} , 2750);

		setTimeout(function() {
			i = 0;
			interval = setInterval( 
				function(){
					charChange(
						document.getElementById("char7"),
						["w", "P", "4", "l", "0", "3", "Q",	"t"] 
					) ;
				}
			, 100);
		} , 3000);
		
		setTimeout(function() {
			i = 0;
			interval = setInterval( 
				function(){
					charChange(
						document.getElementById("char8"),
						["v", "J", "7", "e"] 
					) ;
				}
			, 100);
		} , 3850);
		
		setTimeout(function() {
			i = 0;
			interval = setInterval( 
				function(){
					charChange(
						document.getElementById("char9"),
						["h", "W", "r"] 
					) ;
				}
			, 100);
		} , 4300);
		
		setTimeout(function() {
			i = 0;
			interval = setInterval( 
				function(){
					charChange(
						document.getElementById("char10"),
						["e", "E", "(",	"g"] 
					) ;
				}
			, 100);
		} , 4650);
		
		setTimeout(function() {
			i = 0;
			interval = setInterval( 
				function(){
					charChange(
						document.getElementById("char11"),
						["i", "%", "c", "~", "+", "u"] 
					) ;
				}
			, 100);
		} , 5100);
		
		setTimeout(function() {
			i = 0;
			interval = setInterval( 
				function(){
					charChange(
						document.getElementById("char12"),
						["b", "y"] 
					) ;
				}
			, 100);
		} , 5750);
}
hackertyper();