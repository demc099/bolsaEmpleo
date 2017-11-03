package bolsaEmpleo.model;

import java.io.Serializable;


public class CaracteristicasPuesto implements Serializable, Jsonable{
    public int puestoId;
    public  CaracteristicaOpcion opcion;
    public String nivel;

    public CaracteristicasPuesto() {
    }

    public CaracteristicasPuesto(int puestoId, CaracteristicaOpcion opcion, String nivel) {
        this.puestoId = puestoId;
        this.opcion = opcion;
        this.nivel = nivel;
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
     * @return the opcion
     */
    public CaracteristicaOpcion getOpcion() {
        return opcion;
    }

    /**
     * @param opcion the opcion to set
     */
    public void setOpcion(CaracteristicaOpcion opcion) {
        this.opcion = opcion;
    }

    /**
     * @return the nivel
     */
    public String getNivel() {
        return nivel;
    }

    /**
     * @param nivel the nivel to set
     */
    public void setNivel(String nivel) {
        this.nivel = nivel;
    }
    
    

}