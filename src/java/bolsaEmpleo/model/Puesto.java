package bolsaEmpleo.model;

public class Puesto {
    
    private int puestoId;
    private int empresaId;
    private String descripcion;
    private String visibilidad;
    private float salario;
    private String estado;

    public Puesto() {
    }

    public Puesto(int puestoId, int empresaId, String descripcion, String visibilidad, float salario, String estado) {
        this.puestoId = puestoId;
        this.empresaId = empresaId;
        this.descripcion = descripcion;
        this.visibilidad = visibilidad;
        this.salario = salario;
        this.estado = estado;
    }

    /**
     * @return the puestoId
     */
    public int getPuestoId() {
        return puestoId;
    }

    /**
     * @param puestoId the puestoId to set
     */
    public void setPuestoId(int puestoId) {
        this.puestoId = puestoId;
    }

    /**
     * @return the empresaId
     */
    public int getEmpresaId() {
        return empresaId;
    }

    /**
     * @param empresaId the empresaId to set
     */
    public void setEmpresaId(int empresaId) {
        this.empresaId = empresaId;
    }

    /**
     * @return the descripcion
     */
    public String getDescripcion() {
        return descripcion;
    }

    /**
     * @param descripcion the descripcion to set
     */
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    /**
     * @return the visibilidad
     */
    public String getVisibilidad() {
        return visibilidad;
    }

    /**
     * @param visibilidad the visibilidad to set
     */
    public void setVisibilidad(String visibilidad) {
        this.visibilidad = visibilidad;
    }

    /**
     * @return the salario
     */
    public float getSalario() {
        return salario;
    }

    /**
     * @param salario the salario to set
     */
    public void setSalario(float salario) {
        this.salario = salario;
    }

    /**
     * @return the estado
     */
    public String getEstado() {
        return estado;
    }

    /**
     * @param estado the estado to set
     */
    public void setEstado(String estado) {
        this.estado = estado;
    }
    
    
    
    
}
