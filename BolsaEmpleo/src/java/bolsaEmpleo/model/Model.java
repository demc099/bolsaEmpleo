package bolsaEmpleo.model;

import bolsaEmpleo.database.Database;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;



public class Model {
    static Database bolsaEmpleo;
    
    static {
        initBolsaEmpleo();
    }
    private static void initBolsaEmpleo(){
       bolsaEmpleo= new Database(null, null, null);        
    }
    
    
     public static List<Puesto> puestoConsultarPublicos(){
       List<Puesto> puestosPublicos;
       puestosPublicos= new ArrayList();
        try {
            String sql="select * "+
                    "from puesto  p where p.visibilidad = 'Publico' and p.estado = 'Activo'";
            ResultSet rs =  bolsaEmpleo.executeQuery(sql);
            while (rs.next()) {
                puestosPublicos.add(toPuesto(rs));
            }
        } catch (SQLException ex) {
        }
       return  puestosPublicos;
   }
   
       public static List<Empresa> empresaConsultar(){
       List<Empresa> empresas;
       empresas= new ArrayList();
        try {
            String sql="select * "+
                    "from empresa ";
            ResultSet rs =  bolsaEmpleo.executeQuery(sql);
            while (rs.next()) {
                empresas.add(toEmpresa(rs));
            }
        } catch (SQLException ex) {
        }
       return  empresas;
   }
     
     public static Empresa empresaConsultarById(int id){
       Empresa emp;
       emp= new Empresa();
        try {
            String sql="select * "+
                    "from empresa  e where e.empresaid = '%o'";
            
            sql=String.format(sql,id);
            ResultSet rs =  bolsaEmpleo.executeQuery(sql);
            if (rs.next()) {
            emp = toEmpresa(rs); 
            }
        } catch (Exception ex) {
        }
       return  emp;
   }
     
     public static Caracteristica consultarCaracteristicaById(int id){
       Caracteristica car;
       car= new Caracteristica();
        try {
            String sql="select * "+
                    "from caracteristica  c where c.caracteristicaid = '%o'";
            
            sql=String.format(sql,id);
            ResultSet rs =  bolsaEmpleo.executeQuery(sql);
            if (rs.next()) {
            car = toCaracteristica(rs);
            }
        } catch (Exception ex) {
        }
       return  car;
   }
     
      public static List<CaracteristicasPuesto> consultarCaracteristicasPuesto(int id){
       List<CaracteristicasPuesto> car;
       car= new ArrayList();
        try {
            String sql="select * "+
                    "from caracteristicas_puesto  c where c.puestoid = '%s'";
            
            sql=String.format(sql,id);
            ResultSet rs =  bolsaEmpleo.executeQuery(sql);
            while (rs.next()) {
                car.add(toCaracteristicasPuesto(rs));
            }
        } catch (SQLException ex) {
        }
       return  car;
   }
  
      
      public static CaracteristicaOpcion consultarCaracteristicaOpcion(int id){
       CaracteristicaOpcion car;
       car= new CaracteristicaOpcion();
        try {
            String sql="select * "+
                    "from caracteristica_opcion  c where c.opcionid = '%s'";
            
            sql=String.format(sql,id);
            ResultSet rs =  bolsaEmpleo.executeQuery(sql);
            if (rs.next()) {
            car = toCaracteristicaOpcion(rs); 
            }
        } catch (Exception ex) {
        }
       return  car;
   }
      
      public static List<Oferente> consultarOferentes(){
       List<Oferente> oferentes;
       oferentes= new ArrayList();
        try {
            String sql="select * "+
                    "from oferente ";
            ResultSet rs =  bolsaEmpleo.executeQuery(sql);
            while (rs.next()) {
                oferentes.add(toOferente(rs));
            }
        } catch (SQLException ex) {
        }
       return  oferentes;
   }
     
      public static Oferente consultarOferenteById(int id){
       Oferente ofe;
       ofe = new Oferente();
        try {
            String sql="select * "+
                    "from oferente  c where c.identificacion = '%s'";
            
            sql=String.format(sql,id);
            ResultSet rs =  bolsaEmpleo.executeQuery(sql);
            if (rs.next()) {
            ofe = toOferente(rs);
            }
        } catch (Exception ex) {
        }
       return  ofe;
   }
      
      public static void insertOferente(Oferente ofe){
          String sql =" INSERT INTO oferente (identificacion,nombre,apellido,nacionalidad,residencia,correo,telefono,estado,password) VALUES ('%s','%s','%s','%s','%s','%s','%s','%s','%s')";
          sql=String.format(sql,ofe.getIdentificacion(),ofe.getNombre(),ofe.getApellido(),ofe.getNacionalidad(),ofe.getResidencia(),ofe.getCorreo(),ofe.getTelefono(),ofe.getEstado(),ofe.getPassword());
          bolsaEmpleo.executeUpdate(sql);
      }
      
     private static Puesto toPuesto(ResultSet rs){
        try {
            Puesto obj= new Puesto();
            obj.setPuestoId(rs.getInt("puestoid"));
            obj.setEmpresa(empresaConsultarById(rs.getInt("empresaid")));
            obj.setDescripcion(rs.getString("descripcion"));
            obj.setVisibilidad(rs.getString("visibilidad"));
            obj.setEstado(rs.getString("estado"));
            obj.setSalario(rs.getFloat("salario"));
            obj.setCaracteristicas(consultarCaracteristicasPuesto(rs.getInt("puestoid")));
            
            return obj;
        } catch (SQLException ex) {
            return null;
        }
    }
     
     private static Empresa toEmpresa(ResultSet rs){
        try {
            Empresa obj= new Empresa();
            obj.setEmpresaId(rs.getInt("empresaid"));
            obj.setNombre(rs.getString("nombre"));
            obj.setCorreo(rs.getString("correo"));
            obj.setEstado(rs.getString("estado"));
            obj.setLocalizacion(rs.getString("localizacion"));
            obj.setDescripcion(rs.getString("descripcion"));
            obj.setTelefono(rs.getString("telefono"));
            obj.setPassword(rs.getString("password"));
            return obj;
        } catch (SQLException ex) {
            return null;
        }
    }
     
     private static Oferente toOferente(ResultSet rs){
        try {
            Oferente obj= new Oferente();
            obj.setIdentificacion(rs.getInt("identificacion"));
            obj.setNombre(rs.getString("nombre"));
            obj.setCorreo(rs.getString("correo"));
            obj.setEstado(rs.getString("estado"));
            obj.setApellido(rs.getString("apellido"));
            obj.setNacionalidad(rs.getString("nacionalidad"));
            obj.setResidencia(rs.getString("residencia"));
            obj.setTelefono(rs.getString("telefono"));
            obj.setPassword(rs.getString("password"));
            return obj;
        } catch (SQLException ex) {
            return null;
        }
    }
     
     
     private static Caracteristica toCaracteristica(ResultSet rs){
        try {
            Caracteristica obj= new Caracteristica();
            obj.setCaracteriticaId(rs.getInt("caracteristicaid"));            
            obj.setNombre(rs.getString("nombre"));
            
            return obj;
        } catch (SQLException ex) {
            return null;
        }
    }
     
     private static CaracteristicasPuesto toCaracteristicasPuesto(ResultSet rs){
        try {
            CaracteristicasPuesto obj= new CaracteristicasPuesto();
            obj.setOpcion(consultarCaracteristicaOpcion(rs.getInt("opcionid")));    
            obj.setPuestoId(rs.getInt("puestoid"));    
            obj.setNivel(rs.getString("nivel"));
            
            return obj;
        } catch (SQLException ex) {
            return null;
        }
    }
     
     private static CaracteristicaOpcion toCaracteristicaOpcion(ResultSet rs){
        try {
            CaracteristicaOpcion obj= new CaracteristicaOpcion();
            obj.setOpcionId(rs.getInt("opcionid"));    
            obj.setCaracteristica(consultarCaracteristicaById(rs.getInt("caracteristicaid")));    
            obj.setDescripcion(rs.getString("descripcion"));
            
            return obj;
        } catch (SQLException ex) {
            return null;
        }
    }
    
}
