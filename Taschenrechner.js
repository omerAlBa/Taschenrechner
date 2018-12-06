var Anzeiger='0';
var Ergebnis='';
var stopRZ=false;
var stopKomma=false;
var rechenpfad="";

function zeigeClick (n1) 
{	
	if (n1=='=') 
	  {
		rechenpfad=rechenpfad+Anzeiger;
		Ergebnis=eval(rechenpfad);
		Anzeiger=Ergebnis;
		document.getElementById("AnzeigeFlaeche").innerHTML = Anzeiger;
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
		document.getElementById("AnzeigeFlaeche").innerHTML = rechenpfad+Anzeiger ;
		stopRZ=false;
	  } 
}

function zeigeOperator (n2) 
{	
	if (stopRZ==false) 
		{
		  rechenpfad=rechenpfad+Anzeiger + n2;
		  document.getElementById("AnzeigeFlaeche").innerHTML = rechenpfad;
		  Anzeiger='';
		  stopRZ=true;
		} 
	else
	if (stopRZ==true)
		{	
		  rechenpfad=rechenpfad.slice(0, rechenpfad.length-1);
		  rechenpfad=rechenpfad + n2;
		  document.getElementById("AnzeigeFlaeche").innerHTML = rechenpfad ;
	  	}
}

function zeigeKomma (n3)
{
	if (stopKomma==false)
	Anzeiger=Anzeiger + n3;
	document.getElementById("AnzeigeFlaeche").innerHTML=Anzeiger;
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
	  document.getElementById("BTNAC").addEventListener("click", function AC(){
	  document.getElementById("AnzeigeFlaeche").innerHTML= "0";	
	  ClearAC();
	});
	  document.getElementById("BTNProzent").addEventListener("click", function() {
	  Anzeiger=parseInt(Anzeiger)/100;
	  document.getElementById("AnzeigeFlaeche").innerHTML = rechenpfad+Anzeiger;
	});	
	  document.getElementById("BTNNegate").addEventListener("click", function() {
	  Anzeiger=parseInt(Anzeiger)*(-1);
	  document.getElementById("AnzeigeFlaeche").innerHTML=rechenpfad+Anzeiger;
	});
})();