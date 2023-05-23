function encriptar(){
    var element = document.getElementById("mensaje").value;
    p= element.split("");
    for(pocicion=0;pocicion<element.length;pocicion++){
       if(p[pocicion]=="a"){
       p[pocicion]="ai";

       }
       if(p[pocicion]=="e"){
       p[pocicion]="enter";

       }
        if(p[pocicion]=="i"){
       p[pocicion]="imes";

       }
       if(p[pocicion]=="o"){
       p[pocicion]="ober";

       }
       if(p[pocicion]=="u"){
       p[pocicion]="ufat";

       }
   }
   
   p=p.join("");
  
  
  document.getElementById("imprimir").innerHTML = p;
}

function decencriptar(){
  var element = document.getElementById("mensaje").value;
  p= element.split("");
  for(pocicion=0;pocicion<element.length;pocicion++){
  
  
     if(p[pocicion]=="a" && p[pocicion+1]=="i"){
    p[pocicion]="a";
    p[pocicion+1]=p.splice([pocicion+1],"");

     }
     if(p[pocicion]=="e"&& p[pocicion+1]=="n"&& p[pocicion+2]=="t"&& p[pocicion+3]=="e"&& p[pocicion+4]=="r"){
    p[pocicion]="e";
    p[pocicion+1]=p.splice([pocicion+1],"");
    p[pocicion+2]=p.splice([pocicion+1],"");
    p[pocicion+3]=p.splice([pocicion+1],"");
    p[pocicion+4]=p.splice([pocicion+1],"");
    

     }
      if(p[pocicion]=="i"&& p[pocicion+1]=="m"&& p[pocicion+2]=="e"&& p[pocicion+3]=="s"){
     p[pocicion]="i";
     p[pocicion+1]=p.splice([pocicion+1],"");
     p[pocicion+2]=p.splice([pocicion+1],"");
     p[pocicion+3]=p.splice([pocicion+1],"");
     }
     if(p[pocicion]=="o"&& p[pocicion+1]=="b"&& p[pocicion+2]=="e"&& p[pocicion+3]=="r" ){
     p[pocicion]="o";
     p[pocicion+1]=p.splice([pocicion+1],"");
     p[pocicion+2]=p.splice([pocicion+1],"");
     p[pocicion+3]=p.splice([pocicion+1],"");
     }
     if(p[pocicion]=="u" && p[pocicion+1]=="f"&& p[pocicion+2]=="a"&& p[pocicion+3]=="t"){
      p[pocicion]="u";
      p[pocicion+1]=p.splice([pocicion+1],"");
      p[pocicion+2]=p.splice([pocicion+1],"");
      p[pocicion+3]=p.splice([pocicion+1],"");

      }
 }

p=p.join("");
document.getElementById("imprimir").innerHTML = p;
}
function copiar(){
let imprimir=document.getElementById("imprimir");
navigator.clipboard.writeText(imprimir.textContent)
alert("texto copiado");

}

