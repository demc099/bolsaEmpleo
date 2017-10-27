function Puesto(descripcion,caracteristicas,salario,tipo,login,password){
	this.init(descripcion,caracteristicas,salario,tipo,login,password,Empresa);
}

Puesto.prototype={
	init:function(descripcion,caracteristicas,salario,tipo,login,password){
		this.descripcion=descripcion;
		this.caracteristicas=caracteristicas;
		this.salario=salario;
		this.tipo=tipo;
		this.login=login;
		this.password=password;

	},
	imprimePuesto: function(sep){ return this.descripcion + sep + this.caracteristicas + sep + this.salario + sep + this.tipo + sep + this.Empresa;}
}

function Oferente(id,nombre,ape,nacionalidad,telefono,email,residencia,destrezas,login,password){
	this.init(id,nombre,ape,nacionalidad,telefono,email,residencia,destrezas,login,password);
}

Oferente.prototype={
		init:function(id,nombre,ape,nacionalidad,telefono,email,residencia,destrezas,login,password){
		this.id=id;
		this.nombre=nombre;
		this.ape=ape;
		this.nacionalidad=nacionalidad;
		this.telefono=telefono;
		this.email=email;
		this.residencia=residencia;
		this.destrezas=destrezas;
		this.login=login;
		this.password=password;

	},
	imprimeOferente: function(sep){ return this.id + sep + this.nombre + sep + this.ape + sep + this.nacionalidad + sep + this.telefono + sep + this.email + sep + this.residencia + sep+ this.destrezas;}
}

function Empresa(nombre,localizacion,email,telefono,descripcion,login,password){
	this.init(nombre,localizacion,email,telefono,descripcion,login,password)	
}

Empresa.prototype={
	init:function(nombre,localizacion,email,telefono,descripcion, login, password){
	this.nombre=nombre;
	this.localizacion=localizacion;
	this.email=email;
	this.telefono=telefono;
	this.descripcion=descripcion;
	this.login=login;
	this.password=password;
	this.oferta=[]

	},
	imprimeEmpresa: function(sep){ return this.nombre + sep + this.localizacion + sep + this.email + sep + this.telefono + sep + this.descripcion;}
}



function Administrador(nombre,login,password){
	this.init(nombre, login,password);

}

Administrador.prototype={
	init:function(login,password){
		this.nombre="Administrador";
		this.login=login;
		this.password=password;

	},
	imprimeAdministrador: function(sep){ return this.nombre;}

}


var Objeto=[];

//Empresa1
Empresa1=new Empresa("Google.inc","Silicon Valley","google@gmail.com",22206666,"Empresa de desarrollo de software","google","google");


//Puestos
Puesto1=new Puesto("Programador PHP","PHP",1000,"privado","puesto1","root");
Puesto2=new Puesto("Programador ASP.Net","ASP",1200,"Publico","puesto2","root");
Puesto3=new Puesto("Programador C#.Net","C#",1230,"Publico","puesto3","root");
Puesto4=new Puesto("Asistente Administrativo","Office",1234,"Publico","puesto4","root");
Puesto5=new Puesto("Contador","NOSE",1200,"Publico","puesto5","root");
Puesto6=new Puesto("Programador Senior Javascript","Javascript",5000,"Publico","puesto6","root");

Empresa1.oferta.push(Puesto1);
Empresa1.oferta.push(Puesto2);
Empresa1.oferta.push(Puesto3);
Empresa1.oferta.push(Puesto4);
Empresa1.oferta.push(Puesto5);
Empresa1.oferta.push(Puesto6);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Empresa2
Empresa2=new Empresa("Amazon.corp", "Lagunilla", "amazon@amazon.com", 23123123, "Empresa", "amazon", "amazon")

//Puestos
Puesto6=new Puesto("Programador Senior Javascript","Javascript",5000,"Publico","puesto6","root");
Puesto5=new Puesto("Contador","NOSE",1200,"Publico","puesto5","root");
Puesto4=new Puesto("Asistente Administrativo","Office",1234,"Publico","puesto4","root");
Puesto3=new Puesto("Programador C#.Net","C#",1230,"Publico","puesto3","root");
Puesto2=new Puesto("Programador ASP.Net","ASP",1200,"Publico","puesto2","root");
Puesto1=new Puesto("Programador PHP","PHP",1000,"privado","puesto1","root");

Empresa2.oferta.push(Puesto6);
Empresa2.oferta.push(Puesto5);
Empresa2.oferta.push(Puesto4);
Empresa2.oferta.push(Puesto3);
Empresa2.oferta.push(Puesto2);
Empresa2.oferta.push(Puesto1);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//OFERENTE

Oferente1=new Oferente("123","Daniel","Mora","Costarricense",83327258,"demc099@gmail.com","Heredia","Ninguna","demc099","123");


Objeto.push(Empresa1);
Objeto.push(Empresa2);
Objeto.push(Oferente);




$(document).ready(function(){
	return Objeto;
})