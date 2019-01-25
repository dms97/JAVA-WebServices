import React, {Fragment} from "react"
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
const url = 'http://159.31.38.204:8085/reservations'
class PageVolsAndHotels extends React.Component {
  state = {
    response: null
  }

  componentDidMount() {
   fetch(url)
     .then(function(response) { return response.json(); })
     .then((data) => this.setState({response: data}))}

  render() {
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
        {this.state.response && this.state.response.reservations.map((reservation, i) => (
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
          {this.state.response && this.state.response.vols.map((vol, i) => (
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
}

export default PageVolsAndHotels
