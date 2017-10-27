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
     
     public static Empresa empresaConsultarById(int id){
       Empresa emp;
       emp= new Empresa();
        try {
            String sql="select * "+
                    "from empresa  e where e.empresaid = '%s'";
            
            sql=String.format(sql,id);
            ResultSet rs =  bolsaEmpleo.executeQuery(sql);
            emp = toEmpresa(rs); 
        } catch (Exception ex) {
        }
       return  emp;
   }
     
     
     
     
     
     
     private static Puesto toPuesto(ResultSet rs){
        try {
            Puesto obj= new Puesto();
            obj.setPuestoId(rs.getInt("puestoid"));
            obj.setEmpresaId(rs.getInt("empresaid"));
            obj.setDescripcion(rs.getString("descripcion"));
             obj.setVisibilidad(rs.getString("visibilidad"));
            obj.setEstado(rs.getString("estado"));
            obj.setSalario(rs.getFloat("salario"));
            
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
    
}
