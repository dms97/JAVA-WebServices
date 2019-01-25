package infres.ws.soap.models;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;

public class Storage {

    public static ArrayList<Reservation> getFakeReservations(){
        ArrayList<Reservation> reservations = new ArrayList<>();
        Date today = new Date();
        Calendar c = Calendar.getInstance();
        c.setTime(today);
        c.add(Calendar.DATE, 2);
        reservations.add(new Reservation(today, c.getTime(), 204, 105));
        return reservations;
    }

}
