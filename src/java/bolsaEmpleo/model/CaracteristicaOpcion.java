
package bolsaEmpleo.model;

public class CaracteristicaOpcion {
    private int opcionId;
    private int caracteristicaId;
    private String descripcion;

    public CaracteristicaOpcion() {
    }

    public CaracteristicaOpcion(int opcionId, int caracteristicaId, String descripcion) {
        this.opcionId = opcionId;
        this.caracteristicaId = caracteristicaId;
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
     * @return the caracteristicaId
     */
    public int getCaracteristicaId() {
        return caracteristicaId;
    }

    /**
     * @param caracteristicaId the caracteristicaId to set
     */
    public void setCaracteristicaId(int caracteristicaId) {
        this.caracteristicaId = caracteristicaId;
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
