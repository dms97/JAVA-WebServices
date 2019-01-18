package infres.ws.soap.contracts;

import infres.ws.soap.models.Reservation;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;
import java.util.List;

@WebService
@SOAPBinding
public  interface IReservations{
    @WebMethod
    List<Reservation> findAll(); // Webparam override parameter name

    @WebMethod
    Reservation find(@WebParam(name = "id") final int id); // Webparam override parameter name
}
