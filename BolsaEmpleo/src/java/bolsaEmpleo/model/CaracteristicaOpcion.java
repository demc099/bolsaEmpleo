
package bolsaEmpleo.model;

import java.io.Serializable;

public class CaracteristicaOpcion implements Serializable, Jsonable{
    public int opcionId;
    public Caracteristica caracteristica;
    public String descripcion;

    public CaracteristicaOpcion() {
    }

    public CaracteristicaOpcion(int opcionId, Caracteristica caracteristica, String descripcion) {
        this.opcionId = opcionId;
        this.caracteristica = caracteristica;
        this.descripcion = descripcion;
    }

    /**
     * @return the opcionId
     */
    public int getOpcionId() {
        return opcionId;
    }

    /**
     * @param opcionId the opcionId to set
     */
    public void setOpcionId(int opcionId) {
        this.opcionId = opcionId;
    }

    /**
     * @return the caracteristica
     */
    public Caracteristica getCaracteristica() {
        return caracteristica;
    }

    /**
     * @param caracteristica the caracteristica to set
     */
    public void setCaracteristica(Caracteristica caracteristica) {
        this.caracteristica = caracteristica;
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

    
}
