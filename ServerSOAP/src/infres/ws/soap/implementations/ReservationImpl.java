package infres.ws.soap.implementations;

import infres.ws.soap.contracts.IReservations;
import infres.ws.soap.models.Reservation;

import javax.jws.WebService;
import java.util.ArrayList;
import java.util.List;

@WebService(endpointInterface = "infres.ws.soap.contracts.IReservations")
public class ReservationImpl implements IReservations {
    public ReservationImpl(ArrayList<Reservation> reservations) {
        this.reservations = reservations;
    }

    public ArrayList<Reservation> reservations;

    @Override
    public List<Reservation> findAll() {
        System.out.println("find All Reservations");
        return reservations;
    }

    @Override
    public Reservation find(int id) {
        System.out.println("find reservation with id="+id);
        Reservation res = null;
        for(Reservation r : reservations){
            if(r.getId() == id ){
                res = r;
            }
        }
        return res;
    }
}