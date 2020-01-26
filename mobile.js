var knop= document.getElementById("knop");
knop.setAttribute('onclick','showMenu()');

	function showMenu(){
		var menu = document.getElementById('menu');

		if(menu.style.height=="0px" || menu.style.height==""){
			menu.style.height="auto";
		}
		
  else{
  	menu.style.height="0px";
  }
	
}

var knop1= document.getElementById("knop1");
knop1.setAttribute('onclick','showMenu1()');

	function showMenu1(){
		var menu1 = document.getElementById('menu1');

		if(menu1.style.height=="0px" || menu1.style.height==""){
			menu1.style.height="auto";
		}
		
  else{
  	menu1.style.height="0px";
  }
	
}

