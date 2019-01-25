package infres.ws.rest.models;

import java.util.ArrayList;
import java.util.Date;

public class Storage {
    public static ArrayList<Vol> getFakeVols(){
        ArrayList<Vol> vols = new ArrayList<>();
        vols.add(new Vol(8473, "Air France", 105, new Date(), 185));
        return vols;
    }
}
