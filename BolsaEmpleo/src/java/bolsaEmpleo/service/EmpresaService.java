/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bolsaEmpleo.service;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import com.google.gson.typeadapters.RuntimeTypeAdapterFactory;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import bolsaEmpleo.model.Jsonable;
import bolsaEmpleo.model.*;

public class EmpresaService extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        try {
            RuntimeTypeAdapterFactory<Jsonable> rta = RuntimeTypeAdapterFactory.of(Jsonable.class, "_class")
                    .registerSubtype(Empresa.class, "Empresa");

            Gson gson = new GsonBuilder().registerTypeAdapterFactory(rta).setDateFormat("dd/MM/yyyy").create();
            String json;
            String accion = request.getParameter("accion");
            List<Empresa> empresas;
            Empresa empresa;

            switch (accion) {
                case "consultarEmpresas":
                    empresas = Model.empresaConsultar();
                    json = gson.toJson(empresas);
                    out.write(json);
                    break;

                case "consultarEmpresaById":
                    empresa = Model.empresaConsultarById(Integer.parseInt(request.getParameter("empresaid")));
                    json = gson.toJson(empresa);
                    out.write(json);
                    break;

                case "insertarEmpresa":
                    Empresa empresaaux = Model.consultarEmpresaByNombre(request.getParameter("nombre"));
                    if (empresaaux.getNombre() == null) {
                        empresa = new Empresa();
                        empresa.setNombre(request.getParameter("nombre"));
                        empresa.setDescripcion(request.getParameter("descripcion"));
                        empresa.setLocalizacion(request.getParameter("localizacion"));
                        empresa.setCorreo(request.getParameter("correo"));
                        empresa.setTelefono(request.getParameter("telefono"));
                        empresa.setEstado("Inactivo");
                        empresa.setPassword(request.getParameter("password"));
                        Model.insertEmpresa(empresa);
                        out.print("Exito");
                    } else {
                        out.print("Existe");
                    }

                    break;

                case "eliminarEmpresa":
                    Model.eliminarEmpresa(Integer.parseInt(request.getParameter("id")));
                    out.print("Exito");
                    break;

                case "activarEmpresa":
                    Model.activarEmpresa(Integer.parseInt(request.getParameter("id")));
                    out.print("Exito");
                    break;

            }
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
