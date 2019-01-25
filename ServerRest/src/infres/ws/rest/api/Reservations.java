package infres.ws.rest.api;



import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import infres.ws.rest.models.Storage;
import infres.ws.rest.models.Voyage;
import infres.ws.soap.contracts.Reservation;
import infres.ws.soap.implementations.IReservations;
import infres.ws.soap.implementations.ReservationImplService;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("/reservations")
public class Reservations {
    ObjectMapper mapper = new ObjectMapper();

    @GET
    public Response getReservations() {
        ReservationImplService service = new ReservationImplService();
        IReservations reservations = service.getReservationImplPort();
        List<Reservation> res = reservations.findAll();
        System.out.println("Find "+ res.size()+" reservations");
        try {
            return Response.status(Response.Status.OK).header("Access-Control-Allow-Origin", "*")
                    .entity(mapper.writerWithDefaultPrettyPrinter().writeValueAsString(new Voyage(res, Storage.getFakeVols()))).build();
        } catch (JsonProcessingException e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
        }
    }
}

