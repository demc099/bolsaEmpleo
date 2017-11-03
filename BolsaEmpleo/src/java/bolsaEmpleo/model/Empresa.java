package bolsaEmpleo.model;

import java.io.Serializable;

public class Empresa implements Serializable, Jsonable {
    private int empresaId;
    private String nombre;
    private String localizacion;
    private String correo;
    private String telefono;
    private String estado;
    private String password;
    private String descripcion;

    public Empresa() {
    }

    public Empresa(int empresaId, String nombre, String localizacion, String correo, String telefono, String estado, String password, String descripcion) {
        this.empresaId = empresaId;
        this.nombre = nombre;
        this.localizacion = localizacion;
        this.correo = correo;
        this.telefono = telefono;
        this.estado = estado;
        this.password = password;
        this.descripcion = descripcion;
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

    /**
     * @return the localizacion
     */
    public String getLocalizacion() {
        return localizacion;
    }

    /**
     * @param localizacion the localizacion to set
     */
    public void setLocalizacion(String localizacion) {
        this.localizacion = localizacion;
    }

    /**
     * @return the correo
     */
    public String getCorreo() {
        return correo;
    }

    /**
     * @param correo the correo to set
     */
    public void setCorreo(String correo) {
        this.correo = correo;
    }

    /**
     * @return the telefono
     */
    public String getTelefono() {
        return telefono;
    }

    /**
     * @param telefono the telefono to set
     */
    public void setTelefono(String telefono) {
        this.telefono = telefono;
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
     * @return the password
     */
    public String getPassword() {
        return password;
    }

    /**
     * @param password the password to set
     */
    public void setPassword(String password) {
        this.password = password;
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
