package infres.ws.rest.models;

import lombok.Data;

import java.util.Date;

@Data
public class Vol {
    private int numeroVol;
    private String compagnie;
    private int place;
    private Date depart;
    private int prix;

    public Vol(int numeroVol, String compagnie, int place, Date depart, int prix) {
        this.numeroVol = numeroVol;
        this.compagnie = compagnie;
        this.place = place;
        this.depart = depart;
        this.prix = prix;
    }
}
