package infres.ws.rest.models;

import infres.ws.soap.contracts.Reservation;
import lombok.Data;

import java.util.List;

@Data
public class Voyage {
    private List<Reservation> reservations;
    private List<Vol> vols;

    public Voyage(List<Reservation> reservations, List<Vol> vols) {
        this.reservations = reservations;
        this.vols = vols;
    }
}
