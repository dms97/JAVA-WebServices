package infres.ws;

import infres.ws.soap.IReservations;
import infres.ws.soap.Reservation;
import infres.ws.soap.ReservationImplService;

import java.util.List;

public class Main {

    public static void main(String[] args) {
        ReservationImplService service = new ReservationImplService();
        IReservations reservations = service.getReservationImplPort();
        List<Reservation> res = reservations.findAll();
        System.out.println("Find "+ res.size()+" reservations");
    }
}
