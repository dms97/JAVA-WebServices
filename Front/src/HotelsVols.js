import React, {Fragment} from "react"
import { Get } from 'react-axios'
import {Col, Grid, Row} from "react-bootstrap"

/*
{
  "reservations" : [ {
    "chambre" : 204,
    "end" : 1548575317752,
    "id" : 0,
    "price" : 105,
    "start" : 1548402517752
  } ],
  "vols" : [ {
    "numeroVol" : 8473,
    "compagnie" : "Air France",
    "place" : 105,
    "depart" : 1548406513160,
    "prix" : 185
  } ]
}
 */

class PageVolsAndHotels extends React.Component {
  render() {
    return (
      <div>
        <Get url="localhost:8085/reservations">
          {(error, response, isLoading, makeRequest) => {
            if(error) {
              return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
            }
            else if(isLoading) {
              return (<div>Loading...</div>)
            }
            else if(response !== null) {
console.log(response.data)
              return (
                <Fragment>
                  <h1>Hotels</h1>
                  <Grid>
                    <Row>
                      <Col xsOffset={1} xs={2}>id</Col>
                      <Col xs={2}>chambre</Col>
                      <Col xs={2}>start</Col>
                      <Col xs={2}>end</Col>
                      <Col xs={2}>price</Col>
                    </Row>
                  {response.data.reservations.map((reservation, i) => (
                    <Row key={i}>
                      <Col xsOffset={1} xs={2}>{reservation.id}</Col>
                      <Col xs={2}>{reservation.chambre}</Col>
                      <Col xs={2}>{reservation.start}</Col>
                      <Col xs={2}>{reservation.end}</Col>
                      <Col xs={2}>{reservation.price}</Col>
                    </Row>
                  ))}
                  </Grid>

                  <h1>Vols</h1>
                  <Grid>
                    <Row>
                      <Col xsOffset={1} xs={2}>numeroVol</Col>
                      <Col xs={2}>compagnie</Col>
                      <Col xs={2}>place</Col>
                      <Col xs={2}>depart</Col>
                      <Col xs={2}>prix</Col>
                    </Row>
                    {response.data.vols.map((vol, i) => (
                      <Row key={i}>
                        <Col xsOffset={1} xs={2}>{vol.numeroVol}</Col>
                        <Col xs={2}>{vol.compagnie}</Col>
                        <Col xs={2}>{vol.place}</Col>
                        <Col xs={2}>{vol.depart}</Col>
                        <Col xs={2}>{vol.prix}</Col>
                      </Row>
                    ))}
                  </Grid>
                </Fragment>
              )
            }
            return (<div>Default message before request is made.</div>)
          }}
        </Get>
      </div>
    )
  }
}

export default PageVolsAndHotels
