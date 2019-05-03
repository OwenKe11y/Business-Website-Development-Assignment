
// Variables (EG)
	
	var cartNum;
	var iPadAirItem;
	
	// Check for local storage and set if no storage stored (EG)
	if (localStorage.getItem("cartNum"))
	{
		cartNum = localStorage.getItem("cartNum");
		document.getElementById("dispNum").innerHTML = " " + localStorage.getItem("cartNum");
	}
	else
	{
		document.getElementById("dispNum").innerHTML = " 0";
	}

 // Button for adding iPad to cart (EG)
	function ipadAir() 
	{
		if (localStorage.getItem("cartNum"))
		{
			localStorage.setItem("cartNum", ++cartNum);
			cartNum = localStorage.getItem("cartNum");
			
			iPadAirItem = {"item" : "iPad Air", "Quantity" : "1", "price" : "700"}
			localStorage.iPadAirItem = JSON.stringify(iPadAirItem); 
			
			document.getElementById("dispNum").innerHTML = " " + localStorage.getItem("cartNum");
		}
		// initial set (EG)
		else
		{
			localStorage.setItem("cartNum", 1);
			cartNum = localStorage.getItem("cartNum");
			document.getElementById("dispNum").innerHTML = " " + localStorage.getItem("cartNum");
		}
		
		
	} 
	
	// Button for adding iPad to cart (EG)
	function ipad() 
	{
		if (localStorage.getItem("cartNum"))
		{
			localStorage.setItem("cartNum", ++cartNum);
			cartNum = localStorage.getItem("cartNum");
			document.getElementById("dispNum").innerHTML = " " + localStorage.getItem("cartNum");
		}
		// initial set (EG)
		else
		{
			localStorage.setItem("cartNum", 1);
			cartNum = localStorage.getItem("cartNum");
			document.getElementById("dispNum").innerHTML = " " + localStorage.getItem("cartNum");
		}
		
		
	} 
	
	// Button for adding iPad to cart (EG)
	function ipadPro() 
	{
		if (localStorage.getItem("cartNum"))
		{
			localStorage.setItem("cartNum", ++cartNum);
			cartNum = localStorage.getItem("cartNum");
			document.getElementById("dispNum").innerHTML = " " + localStorage.getItem("cartNum");
		}
		// initial set (EG)
		else
		{
			localStorage.setItem("cartNum", 1);
			cartNum = localStorage.getItem("cartNum");
			document.getElementById("dispNum").innerHTML = " " + localStorage.getItem("cartNum");
		}
		
		
	} 
	
	// Button for adding ipad to cart (EG)
	function ipadMini() 
	{
		if (localStorage.getItem("cartNum"))
		{
			localStorage.setItem("cartNum", ++cartNum);
			cartNum = localStorage.getItem("cartNum");
			document.getElementById("dispNum").innerHTML = " " + localStorage.getItem("cartNum");
		}
		// initial set (EG)
		else
		{
			localStorage.setItem("cartNum", 1);
			cartNum = localStorage.getItem("cartNum");
			document.getElementById("dispNum").innerHTML = " " + localStorage.getItem("cartNum");
		}
		
		
	}	
	
	// Button for adding iphone to cart (EG)
	function iphonexs() 
	{
		if (localStorage.getItem("cartNum"))
		{
			localStorage.setItem("cartNum", ++cartNum);
			cartNum = localStorage.getItem("cartNum");
			document.getElementById("dispNum").innerHTML = " " + localStorage.getItem("cartNum");
		}
		// initial set (EG)
		else
		{
			localStorage.setItem("cartNum", 1);
			cartNum = localStorage.getItem("cartNum");
			document.getElementById("dispNum").innerHTML = " " + localStorage.getItem("cartNum");
		}
		
	}
	
	// Button for adding iphone to cart (EG)
	function iphonexr() 
	{
		if (localStorage.getItem("cartNum"))
		{
			localStorage.setItem("cartNum", ++cartNum);
			cartNum = localStorage.getItem("cartNum");
			document.getElementById("dispNum").innerHTML = " " + localStorage.getItem("cartNum");
		}
		// initial set (EG)
		else
		{
			localStorage.setItem("cartNum", 1);
			cartNum = localStorage.getItem("cartNum");
			document.getElementById("dispNum").innerHTML = " " + localStorage.getItem("cartNum");
		}
		
	}	
	
	// Button for adding iphoneto cart (EG)
	function iphone8() 
	{
		if (localStorage.getItem("cartNum"))
		{
			localStorage.setItem("cartNum", ++cartNum);
			cartNum = localStorage.getItem("cartNum");
			document.getElementById("dispNum").innerHTML = " " + localStorage.getItem("cartNum");
		}
		// initial set (EG)
		else
		{
			localStorage.setItem("cartNum", 1);
			cartNum = localStorage.getItem("cartNum");
			document.getElementById("dispNum").innerHTML = " " + localStorage.getItem("cartNum");
		}
		
	}	
	
	// Button for adding iphone to cart (EG)
	function iphone7() 
	{
		if (localStorage.getItem("cartNum"))
		{
			localStorage.setItem("cartNum", ++cartNum);
			cartNum = localStorage.getItem("cartNum");
			document.getElementById("dispNum").innerHTML = " " + localStorage.getItem("cartNum");
		}
		// initial set (EG)
		else
		{
			localStorage.setItem("cartNum", 1);
			cartNum = localStorage.getItem("cartNum");
			document.getElementById("dispNum").innerHTML = " " + localStorage.getItem("cartNum");
		}
		
	}
	
	// Button for adding imac to cart (EG)
	function imac() 
	{
		if (localStorage.getItem("cartNum"))
		{
			localStorage.setItem("cartNum", ++cartNum);
			cartNum = localStorage.getItem("cartNum");
			document.getElementById("dispNum").innerHTML = " " + localStorage.getItem("cartNum");
		}
		// initial set (EG)
		else
		{
			localStorage.setItem("cartNum", 1);
			cartNum = localStorage.getItem("cartNum");
			document.getElementById("dispNum").innerHTML = " " + localStorage.getItem("cartNum");
		}
		
	}
	
	// Button for adding macbook to cart (EG)
	function macbookair() 
	{
		if (localStorage.getItem("cartNum"))
		{
			localStorage.setItem("cartNum", ++cartNum);
			cartNum = localStorage.getItem("cartNum");
			document.getElementById("dispNum").innerHTML = " " + localStorage.getItem("cartNum");
		}
		// initial set (EG)
		else
		{
			localStorage.setItem("cartNum", 1);
			cartNum = localStorage.getItem("cartNum");
			document.getElementById("dispNum").innerHTML = " " + localStorage.getItem("cartNum");
		}
		
	}
	
	// Button for adding macbook to cart (EG)
	function macbookpro() 
	{
		if (localStorage.getItem("cartNum"))
		{
			localStorage.setItem("cartNum", ++cartNum);
			cartNum = localStorage.getItem("cartNum");
			document.getElementById("dispNum").innerHTML = " " + localStorage.getItem("cartNum");
		}
		// initial set (EG)
		else
		{
			localStorage.setItem("cartNum", 1);
			cartNum = localStorage.getItem("cartNum");
			document.getElementById("dispNum").innerHTML = " " + localStorage.getItem("cartNum");
		}
		
	}
	
	// Button for adding imac to cart (EG)
	function imacpro() 
	{
		if (localStorage.getItem("cartNum"))
		{
			localStorage.setItem("cartNum", ++cartNum);
			cartNum = localStorage.getItem("cartNum");
			document.getElementById("dispNum").innerHTML = " " + localStorage.getItem("cartNum");
		}
		// initial set (EG)
		else
		{
			localStorage.setItem("cartNum", 1);
			cartNum = localStorage.getItem("cartNum");
			document.getElementById("dispNum").innerHTML = " " + localStorage.getItem("cartNum");
		}
		
	}

	