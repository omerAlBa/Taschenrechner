var Anzeiger='0';
var Ergebnis='';
var zahl1="";
var stopRZ=false;
var stopKomma=false;
var rechenpfad="";
var verlauf="";
var eintragHistory;
var Operator;

function zeigeClick (n1) 
{	
	if (n1=='=') 
	  {
		
		if (rechenpfad==Ergebnis)
		{
			rechenpfad=rechenpfad+Operator+Anzeiger;
		} else
		rechenpfad=rechenpfad+Anzeiger;
		Ergebnis=eval(rechenpfad);
		$("#history").html(verlauf + Anzeiger+Operator+"<br>"+"__________"+"<br>"+Ergebnis+"<br>"+"--------------"+"<br>");
		verlauf=verlauf + Anzeiger+"<br>"+"__________"+"<br>"+Ergebnis+"<br>"+"--------------"+"<br>";
		$("#AnzeigeFlaeche").html(Ergebnis);
		rechenpfad=Ergebnis;
	  } 
	else
	if (Anzeiger =='0')  
	  {
		Anzeiger='';
	  }
	if ((Ergebnis=='')&&(n1!='=')) 
	  {
		Anzeiger=Anzeiger + n1;
		$("#AnzeigeFlaeche").html(Anzeiger) ;
		stopRZ=false;
	  } 
	  if (eintragHistory!="")
	  {
	  	verlauf=verlauf+"<br>";
	  	eintragHistory="";
	  }
}

function zeigeOperator (n2) 
{	
	if (stopRZ==false) 
		{
		  rechenpfad=rechenpfad+Anzeiger + n2;
		  $("#history").html(verlauf + Anzeiger+n2);
		  verlauf=verlauf + Anzeiger+n2;
		  eintragHistory=Anzeiger+n2;
		  Anzeiger='';
		  stopRZ=true;
		  Operator=n2;
		} 
	else
	if (stopRZ==true)
		{	
		  rechenpfad=rechenpfad.slice(0, rechenpfad.length-1);
		  rechenpfad=rechenpfad + n2;
		  verlauf=verlauf.slice(0, verlauf.length-1);
		  $("#history").html(verlauf + Anzeiger+n2);
		  verlauf=verlauf + n2;	 
		  Operator=n2; 
	  	}
}

function zeigeKomma (n3)
{
	if (stopKomma==false)
	Anzeiger=Anzeiger + n3;
	$("#AnzeigeFlaeche").html(Anzeiger);
	stopKomma=true;
}

function ClearAC ()
{
	Anzeiger="0";
	Ergebnis="";
	rechenpfad="";
	n1="";
	stopRZ=false;
	stopKomma=false;
}

(function() 
	{	
	  $("#BTNAC").click("click", function AC(){
	  $("#AnzeigeFlaeche").html("0");	
	  ClearAC();
	});
	  $("#BTNProzent").click("click", function() {
	  Anzeiger=parseFloat(Anzeiger)/100;
	 $("#AnzeigeFlaeche").html(Anzeiger);
	});	
	  $("#BTNNegate").click("click", function() {
	  Anzeiger=parseFloat(Anzeiger)*(-1);
	 $("#AnzeigeFlaeche").html(Anzeiger);
	});
})();
