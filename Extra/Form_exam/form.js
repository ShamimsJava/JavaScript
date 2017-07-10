
/*This is not final. Please don't follow this code.*/

function showEm(){
			with(document){
				var x1 = getElementById("fullName").value;
				win.document.write(x1);
				}
			
			}
			
var win;
function winOpen(){
			win=window.open("","","width=200 height=200");
			win.document.write("<center> window output</center>")
			}

function winClose(){
			win.close();
			}
