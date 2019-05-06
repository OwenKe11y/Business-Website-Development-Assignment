
// Variables (EG)
	
	var cartNum = 0;
	var iPadAirItem;
	

	//Daniel Product objects (OK)
	
	var iphoneXSObj = {model:"iPhone XS", price: 879};
	var iphoneXRObj = {model:"iPhone XR", price: 879};
	var iphone8Obj = {model:"Iphone 8", price: 819};
	var iphone7Obj = {model:"iPhone 7", price: 669};
	var iMacObj = {model:"iMac", price: 1549};
	var iMacAirObj = {model:"iMac Air", price: 1549};
	var iMacBProObj = {model:"MacBook Pro", price: 1379};
	var iMacProObj = {model:"iMac Pro", price: 1799};
	var iPadAirObj = {model:"iPad Air", price: 579};
	var iPadObj = {model:"iPad", price: 369};
	var iPadProObj = {model:"iPad Pro", price: 909};
	var iPadMiniObj = {model:"iPad Mini", price: 469};
	var iAirPodsObj = {model:"Air Pods", price: 229};
	var iPhoneCaseObj = {model:"iPhone Case", price: 30};
	var iPadCasesObj = {model:"iPad Cases", price: 45};
	var iAppleStrapsObj = {model:"Apple Watch Straps", price: 59};
	
	//Daniel Cart Array (OK)
	var cart = [];
	
	
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


	//Daniel cart viewing function (OK)
	function checkCart()
	{

		//update the cart array from the local storage (OK)
		var i;
		for (i = 0; i < cartNum; i++) {
  			var temp = localStorage.getItem(i);
  			temp = JSON.parse(temp);
  			cart[i] = temp;
		}


		//Add each "model name" to the item name field (OK)
		if (cartNum > 0)
		{
			var txt = "";
			cart.forEach(myFunction);
			document.getElementById("itemName").innerHTML = txt;

			function myFunction(value, index, array) {
 				 txt = txt + value.model + "<br>"; 
			}
	

			
		}
		else{

			document.getElementById("itemName").innerHTML = "Your cart is empty";
		}
		
		//Add each "model price" to the item name field (OK)
		if (cartNum > 0)
		{
			var txt = "";
			cart.forEach(myFunction);
			document.getElementById("itemPrice").innerHTML = txt;

			function myFunction(value, index, array) {
 				 txt = txt + value.price + "<br>"; 
			}
	

			
		}
		else{

			document.getElementById("itemName").innerHTML = "Your cart is empty";
		}
		
	}

 // Button for adding iPad to cart (EG & OK)
	function ipadAir() 
	{
		
		localStorage.setItem(cartNum, JSON.stringify(iPadAirObj));
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
	
	// Button for adding iPad to cart (EG & OK)
	function ipad() 
	{
		localStorage.setItem(cartNum, JSON.stringify(iPadObj));
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
		localStorage.setItem(cartNum, JSON.stringify(iPadProObj));
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
	
	// Button for adding ipad to cart (EG & OK)
	function ipadMini() 
	{
		localStorage.setItem(cartNum, JSON.stringify(iPadMiniObj));
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
	
	// Button for adding iphone to cart (EG & OK)
	function iphonexs() 
	{
		localStorage.setItem(cartNum, JSON.stringify(iphoneXSObj));
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
	
	// Button for adding iphone to cart (EG & OK)
	function iphonexr() 
	{
		localStorage.setItem(cartNum, JSON.stringify(iphoneXRObj));
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
	
	// Button for adding iphoneto cart (EG & OK)
	function iphone8() 
	{
		//Daniel Add an Iphone8 object to the cart
		localStorage.setItem(cartNum, JSON.stringify(iphone8Obj));
		
		
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
	
	// Button for adding iphone to cart (EG & OK)
	function iphone7() 
	{
		localStorage.setItem(cartNum, JSON.stringify(iphone7Obj));
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
	
	// Button for adding imac to cart (EG & OK)
	function imac() 
	{
		localStorage.setItem(cartNum, JSON.stringify(iMacObj));
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
	
	// Button for adding macbook to cart (EG & OK)
	function macbookair() 
	{
		localStorage.setItem(cartNum, JSON.stringify(iMacAirObj));
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
	
	// Button for adding macbook to cart (EG & OK)
	function macbookpro() 
	{
		localStorage.setItem(cartNum, JSON.stringify(iMacBPro));
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
	
	// Button for adding imac to cart (EG & OK)
	function imacpro() 
	{
		localStorage.setItem(cartNum, JSON.stringify(iMacPro));
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

	// Button for adding air pods to cart (EG & DH & OK)
	function airpods() 
	{
		localStorage.setItem(cartNum, JSON.stringify(iAirPods));
		if (localStorage.getItem("cartNum"))
		{
			localStorage.setItem("cartNum", ++cartNum);
			cartNum = localStorage.getItem("cartNum");
			document.getElementById("dispNum").innerHTML = " " + localStorage.getItem("cartNum");
		}
		// initial set (EG & DH)
		else
		{
			localStorage.setItem("cartNum", 1);
			cartNum = localStorage.getItem("cartNum");
			document.getElementById("dispNum").innerHTML = " " + localStorage.getItem("cartNum");
		}
		
	}

	// Button for adding iphone case to cart (EG & DH & OK)
	function iphoneCase() 
	{
		localStorage.setItem(cartNum, JSON.stringify(iPhoneCase));
		if (localStorage.getItem("cartNum"))
		{
			localStorage.setItem("cartNum", ++cartNum);
			cartNum = localStorage.getItem("cartNum");
			document.getElementById("dispNum").innerHTML = " " + localStorage.getItem("cartNum");
		}
		// initial set (EG &DH)
		else
		{
			localStorage.setItem("cartNum", 1);
			cartNum = localStorage.getItem("cartNum");
			document.getElementById("dispNum").innerHTML = " " + localStorage.getItem("cartNum");
		}
		
	}	
	
		// Button for adding ipad case to cart (EG & DH & OK)
	function ipadCase() 
	{
		localStorage.setItem(cartNum, JSON.stringify(iPadCases));
		if (localStorage.getItem("cartNum"))
		{
			localStorage.setItem("cartNum", ++cartNum);
			cartNum = localStorage.getItem("cartNum");
			document.getElementById("dispNum").innerHTML = " " + localStorage.getItem("cartNum");
		}
		// initial set (EG & DH)
		else
		{
			localStorage.setItem("cartNum", 1);
			cartNum = localStorage.getItem("cartNum");
			document.getElementById("dispNum").innerHTML = " " + localStorage.getItem("cartNum");
		}
		
	}	
	
		// Button for adding watch straps to cart (EG & DH & OK)
	function watch() 
	{
		localStorage.setItem(cartNum, JSON.stringify(iAppleStrapsObj));
		if (localStorage.getItem("cartNum"))
		{
			localStorage.setItem("cartNum", ++cartNum);
			cartNum = localStorage.getItem("cartNum");
			document.getElementById("dispNum").innerHTML = " " + localStorage.getItem("cartNum");
		}
		// initial set (EG & DH)
		else
		{
			localStorage.setItem("cartNum", 1);
			cartNum = localStorage.getItem("cartNum");
			document.getElementById("dispNum").innerHTML = " " + localStorage.getItem("cartNum");
		}
		
	}	