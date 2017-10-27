package bolsaEmpleo.model;


public class Oferente {
    private int identificacion;
    private String nombre;
    private String apellido;
    private String nacionalidad;
    private String telefono;
    private String residencia;
    private String correo;
    private String estado;
    private String password;

    public Oferente() {
    }

    public Oferente(int identificacion, String nombre, String apellido, String nacionalidad, String telefono, String residencia, String correo, String estado, String password) {
        this.identificacion = identificacion;
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacionalidad = nacionalidad;
        this.telefono = telefono;
        this.residencia = residencia;
        this.correo = correo;
        this.estado = estado;
        this.password = password;
    }

    /**
     * @return the identificacion
     */
    public int getIdentificacion() {
        return identificacion;
    }

    /**
     * @param identificacion the identificacion to set
     */
    public void setIdentificacion(int identificacion) {
        this.identificacion = identificacion;
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
     * @return the apellido
     */
    public String getApellido() {
        return apellido;
    }

    /**
     * @param apellido the apellido to set
     */
    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    /**
     * @return the nacionalidad
     */
    public String getNacionalidad() {
        return nacionalidad;
    }

    /**
     * @param nacionalidad the nacionalidad to set
     */
    public void setNacionalidad(String nacionalidad) {
        this.nacionalidad = nacionalidad;
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
     * @return the residencia
     */
    public String getResidencia() {
        return residencia;
    }

    /**
     * @param residencia the residencia to set
     */
    public void setResidencia(String residencia) {
        this.residencia = residencia;
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
    
    
}
