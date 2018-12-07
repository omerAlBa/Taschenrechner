var Anzeiger='0';
var Ergebnis='';
var zahl1="";
var stopRZ=false;
var stopKomma=false;
var rechenpfad="";
var verlauf="";
var eintragHistory;

function zeigeClick (n1) 
{	
	if (n1=='=') 
	  {
		rechenpfad=rechenpfad+Anzeiger;
		Ergebnis=eval(rechenpfad);
		$("#history").html(verlauf + Anzeiger+"<br>"+"__________"+"<br>"+Ergebnis+"<br>"+"--------------");
		verlauf=verlauf + Anzeiger+"<br>"+"__________"+"<br>"+Ergebnis+"<br>"+"--------------";
		Anzeiger=Ergebnis;
		$("#AnzeigeFlaeche").html(Anzeiger);
		rechenpfad="";
		Ergebnis='';
	  } 
	else
	if (Anzeiger =='0') 
	  {
		Anzeiger='';
	  }
	if ((Ergebnis=='')&&(n1!='=')) 
	  {
		Anzeiger=Anzeiger + n1;
		$("#AnzeigeFlaeche").html(rechenpfad+Anzeiger) ;
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
		  $("#AnzeigeFlaeche").html(rechenpfad);
		  $("#history").html(verlauf + Anzeiger+n2);
		  verlauf=verlauf + Anzeiger+n2;
		  eintragHistory=Anzeiger+n2;
		  Anzeiger='';
		  stopRZ=true;
		} 
	else
	if (stopRZ==true)
		{	
		  rechenpfad=rechenpfad.slice(0, rechenpfad.length-1);
		  rechenpfad=rechenpfad + n2;
		  $("#AnzeigeFlaeche").html(rechenpfad);
		  verlauf=verlauf.slice(0, verlauf.length-1);
		  $("#history").html(verlauf + Anzeiger+n2);
		  verlauf=verlauf + n2;
		 
		  
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
	  $("#AnzeigeFlaeche").html(rechenpfad+Anzeiger);
	});	
	  $("#BTNNegate").click("click", function() {
	  Anzeiger=parseFloat(Anzeiger)*(-1);
	  $("#AnzeigeFlaeche").html(rechenpfad+Anzeiger);
	});
})();
