
package bolsaEmpleo.model;

import java.io.Serializable;

public class CaracteristicasOferente implements Serializable, Jsonable{
    private int oferenteId;
    private int opcionId;
    private String nivel;

    public CaracteristicasOferente() {
    }

    public CaracteristicasOferente(int oferenteId, int opcionId, String nivel) {
        this.oferenteId = oferenteId;
        this.opcionId = opcionId;
        this.nivel = nivel;
    }

    /**
     * @return the oferenteId
     */
    public int getOferenteId() {
        return oferenteId;
    }

    /**
     * @param oferenteId the oferenteId to set
     */
    public void setOferenteId(int oferenteId) {
        this.oferenteId = oferenteId;
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
