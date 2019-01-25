package infres.ws.soap.models;


import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class Reservation {
    private int id;
    private Date start;
    private Date end;
    private int chambre;
    private int price;

    public static int  count = 0;

    public Reservation(Date start, Date end, int chambre, int price) {
        this.id = count;
        this.start = start;
        this.end = end;
        this.chambre = chambre;
        this.price = price;
        count++;
    }
}
