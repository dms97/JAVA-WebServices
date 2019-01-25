package infres.ws.soap;

import infres.ws.soap.implementations.ReservationImpl;
import infres.ws.soap.models.Storage;

import javax.xml.ws.Endpoint;
public class ServiceReservationStarter {
    final static String URL_RESERVATIONS = "http://server-soap/reservations";
    public static void main(String[] args) {
        Endpoint.publish(URL_RESERVATIONS, new ReservationImpl(Storage.getFakeReservations()));
        System.out.println("Service web démarre url " + URL_RESERVATIONS);
    }
}