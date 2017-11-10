/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function empresa(){
            var form= document.getElementById("formulario");
            form.innerHTML='';
            var td1= document.createElement("td");
            var td2= document.createElement("td")
            var tr= document.createElement("tr");
            td2.appendChild(document.createTextNode("Nombre de Usuario: "))
            var user= document.createElement("input");
            user.setAttribute("type","text");
            user.setAttribute("id","username");
            td1.appendChild(user);
            
            var td3= document.createElement("td");
            var td4= document.createElement("td");
            var tr1= document.createElement("tr");
            td4.appendChild(document.createTextNode("Password: "));
            var pass= document.createElement("input");
            pass.setAttribute("type", "text");
            pass.setAttribute("id","password");
            td3.appendChild(pass);
            
            
            var btn= document.createElement("button");
            btn.setAttribute("type","button");
            btn.setAttribute("class","btn btn-success")
            btn.setAttribute("value", "Enviar");
            btn.setAttribute("id","enviar");
            btn.setAttribute("onclick","javascript:enviarEmpresa()");
            btn.appendChild(document.createTextNode("Enviar"));
           
            
            tr.appendChild(td2);
            tr.appendChild(td1);
            tr1.appendChild(td4);
            tr1.appendChild(td3);
            form.appendChild(tr);
            form.appendChild(tr1);
            form.appendChild(btn);
            
            
            
        }
        function enviarEmpresa(){
            
                window.location=("index.html");
            
        }
        
        function oferente(){
            
            var form= document.getElementById("formulario");
            form.innerHTML='';
            var td1= document.createElement("td");
            var td2= document.createElement("td")
            var tr= document.createElement("tr");
            td2.appendChild(document.createTextNode("Nombre de Usuario: "))
            var user= document.createElement("input");
            user.setAttribute("type","text");
            user.setAttribute("id","username");
            td1.appendChild(user);
            
            var td3= document.createElement("td");
            var td4= document.createElement("td");
            var tr1= document.createElement("tr");
            td4.appendChild(document.createTextNode("Password: "));
            var pass= document.createElement("input");
            pass.setAttribute("type", "text");
            pass.setAttribute("id","password");
            td3.appendChild(pass);
            
            
            var btn= document.createElement("button");
            btn.setAttribute("type","button");
            btn.setAttribute("class","btn btn-success")
            btn.setAttribute("value", "Enviar");
            btn.setAttribute("id","enviar");
            btn.setAttribute("onclick","javascript:loginController.enviarOferente()");
            btn.appendChild(document.createTextNode("Enviar"));
           
            
            tr.appendChild(td2);
            tr.appendChild(td1);
            tr1.appendChild(td4);
            tr1.appendChild(td3);
            form.appendChild(tr);
            form.appendChild(tr1);
            form.appendChild(btn);
            
            
        }
        function enviarOferente(){
            
                window.location=("index.html");
            
        }
        function admin(){
            
            var form= document.getElementById("formulario");
            form.innerHTML='';
            var td1= document.createElement("td");
            var td2= document.createElement("td")
            var tr= document.createElement("tr");
            td2.appendChild(document.createTextNode("Nombre de Usuario: "))
            var user= document.createElement("input");
            user.setAttribute("type","text");
            user.setAttribute("id","username");
            td1.appendChild(user);
            
            var td3= document.createElement("td");
            var td4= document.createElement("td");
            var tr1= document.createElement("tr");
            td4.appendChild(document.createTextNode("Password: "));
            var pass= document.createElement("input");
            pass.setAttribute("type", "text");
            pass.setAttribute("id","password");
            td3.appendChild(pass);
            
            
            var btn= document.createElement("button");
            btn.setAttribute("type","button");
            btn.setAttribute("class","btn btn-success")
            btn.setAttribute("value", "Enviar");
            btn.setAttribute("id","enviar");
            btn.setAttribute("onclick","javascript:enviarAdmin()");
            btn.appendChild(document.createTextNode("Enviar"));
           
            
            tr.appendChild(td2);
            tr.appendChild(td1);
            tr1.appendChild(td4);
            tr1.appendChild(td3);
            form.appendChild(tr);
            form.appendChild(tr1);
            form.appendChild(btn);
            
            
        }
        