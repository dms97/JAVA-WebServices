package infres.ws.rest.controllers;

import infres.ws.rest.models.Storage;
import infres.ws.rest.models.Voyage;
import infres.ws.soap.contracts.Reservation;
import infres.ws.soap.implementations.IReservations;
import infres.ws.soap.implementations.ReservationImplService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.xml.ws.WebServiceException;
import java.util.ArrayList;
import java.util.List;

@RestController
public class MainController {

    @RequestMapping(path = {"/", "/unsecured"})
    public String noSecuredEndpoint() {
        return "This is an unsecured endpoint payload";
    }


    @RequestMapping("/reservations")
    public Voyage getReservations() {
        List<Reservation> res = new ArrayList<>();
        try{
            ReservationImplService service = new ReservationImplService();
            IReservations reservations = service.getReservationImplPort();
            res = reservations.findAll();
            System.out.println("Find "+ res.size()+" reservations");
        }catch(WebServiceException e){
            System.out.println("unable to access to reservations server");
        }
        return new Voyage(res, Storage.getFakeVols());
    }
}
