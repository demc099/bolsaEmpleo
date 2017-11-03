package bolsaEmpleo.model;

import java.io.Serializable;
import java.util.List;

public class Puesto implements Serializable, Jsonable {
    
    public int puestoId;
    public Empresa empresa;
    public String descripcion;
    public String visibilidad;
    public float salario;
    public String estado;
    public List<CaracteristicasPuesto> caracteristicas;

    public Puesto() {
    }

    public Puesto(int puestoId, Empresa empresa, String descripcion, String visibilidad, float salario, String estado, List<CaracteristicasPuesto> caracteristicas) {
        this.puestoId = puestoId;
        this.empresa = empresa;
        this.descripcion = descripcion;
        this.visibilidad = visibilidad;
        this.salario = salario;
        this.estado = estado;
        this.caracteristicas = caracteristicas;
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
     * @return the empresa
     */
    public Empresa getEmpresa() {
        return empresa;
    }

    /**
     * @param empresa the empresa to set
     */
    public void setEmpresa(Empresa empresa) {
        this.empresa = empresa;
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

    /**
     * @return the caracteristicas
     */
    public List<CaracteristicasPuesto> getCaracteristicas() {
        return caracteristicas;
    }

    /**
     * @param caracteristicas the caracteristicas to set
     */
    public void setCaracteristicas(List<CaracteristicasPuesto> caracteristicas) {
        this.caracteristicas = caracteristicas;
    }

    
}