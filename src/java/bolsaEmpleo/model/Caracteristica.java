package bolsaEmpleo.model;

public class Caracteristica {
    
    private int caracteriticaId;
    private String nombre;

    public Caracteristica() {
    }

    public Caracteristica(int caracteriticaId, String nombre) {
        this.caracteriticaId = caracteriticaId;
        this.nombre = nombre;
    }

    /**
     * @return the caracteriticaId
     */
    public int getCaracteriticaId() {
        return caracteriticaId;
    }

    /**
     * @param caracteriticaId the caracteriticaId to set
     */
    public void setCaracteriticaId(int caracteriticaId) {
        this.caracteriticaId = caracteriticaId;
    }

    /**
     * @return the nombre
     */
    public String getNombre() {
        return nombre;
    }

    /**
     * @param nombre the nombre to set
     */
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    
    
}
