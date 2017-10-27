function Puesto(descripcion,salario,empresa,caracteristicas) {
    this.Puesto(descripcion,salario,empresa,caracteristicas);
  }
  
  Puesto.prototype={
	Puesto: function(descripcion,salario,empresa,caracteristicas){
		this.descripcion=descripcion;
		this.salario=salario;
                this.empresa=empresa;
		this.caracteristicas=caracteristicas;
		               
	}
	
  }