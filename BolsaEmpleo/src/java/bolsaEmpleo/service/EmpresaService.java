/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bolsaEmpleo.service;

import bolsaEmpleo.model.Caracteristica;
import bolsaEmpleo.model.CaracteristicaOpcion;
import bolsaEmpleo.model.CaracteristicasPuesto;
import bolsaEmpleo.model.Empresa;
import bolsaEmpleo.model.Jsonable;
import bolsaEmpleo.model.Model;
import bolsaEmpleo.model.Puesto;
import bolsaEmpleo.model.Usuario;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.typeadapters.RuntimeTypeAdapterFactory;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author demc0
 */
public class EmpresaService extends HttpServlet{
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
        response.setContentType("text/html; charset=UTF-8");
        PrintWriter out= response.getWriter();
        
        try{
              RuntimeTypeAdapterFactory<Jsonable> rta = RuntimeTypeAdapterFactory.of(Jsonable.class, "_class")
                    .registerSubtype(Caracteristica.class, "Empresa");
              
              Gson gson = new GsonBuilder().registerTypeAdapterFactory(rta).setDateFormat("dd/MM/yyyy").create();
              String json;
              String action= request.getParameter("action");
              List<Empresa> empresas;
              Empresa empresa;
              
              switch(action){
                  case "consultarEmpresas":
                      empresas=Model.empresaConsultar();
                      json= gson.toJson(empresas);
                      out.write(json);
                      break;
              }
              

        }
        catch(Exception e){
            System.out.println(e);
        }
    }
    
}
