package bolsaEmpleo.model;


public class CaracteristicasPuesto {
    private int puestoId;
    private int opcionId;
    private String nivel;

    public CaracteristicasPuesto() {
    }

    public CaracteristicasPuesto(int puestoId, int opcionId, String nivel) {
        this.puestoId = puestoId;
        this.opcionId = opcionId;
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
