function display(){
			var x1 = document.myForm.fullName.value;
			var x2 = document.myForm.gender.value;
			var x3 = document.myForm.country.value;
			var x4 = document.myForm.comments.value;
			
			document.getElementById("shamim1").innerHTML="Hello Mr. "+x1+".";
			document.getElementById("shamim2").innerHTML="You are "+x2+".";
			document.getElementById("shamim3").innerHTML="You are from "+x3+"."+" I know "+x3+" is a great country.";
			document.getElementById("shamim4").innerHTML="You tell us that "+'"'+x4+'"'+". You are very good guy.Thank you.";
			}