import React from "react"
import withStyles from 'react-jss'
import styles from './HotelsVols.style'
import axios from 'axios'

// const fakeData = {
//   "reservations" : [ {
//     "chambre" : 204,
//     "end" : 1548575317752,
//     "id" : 0,
//     "price" : 105,
//     "start" : 1548402517752
//   } ],
//   "vols" : [ {
//     "numeroVol" : 8473,
//     "compagnie" : "Air France",
//     "place" : 105,
//     "depart" : 1548406513160,
//     "prix" : 185
//   } ]
// }

const url = 'http://localhost:8085/reservations'

class PageVolsAndHotels extends React.Component {
  state = {
    response: null
  }

  componentDidMount() {
    let request = new Request(url, {
      method: 'GET',
      headers: {'Authorization' : 'Bearer ' + this.props.token}
    })
   fetch(request)
     .then(function (response) {
       return response.json()
     })
     .then(data => this.setState({response: data}))
   //  const headers = {'Authorization': this.props.token}
   //  axios.get(url, {headers}).then(res => {
   //    this.setState({response: res})
   //  })
  }

  render() {
    const { classes } = this.props

    console.log(this.state.response)

    return (
      <div className={classes.styleTables}>
        <h1>Hotels</h1>
        <table>
          <tbody>
            <tr>
              <th>Id</th>
              <th>Chambre</th>
              <th>Start</th>
              <th>End</th>
              <th>Prix</th>
            </tr>
            {this.state.response && this.state.response.reservations.map((reservation, i) => (
              <tr key={i}>
                <td>{reservation.id}</td>
                <td>{reservation.chambre}</td>
                <td>{new Date(reservation.start).toDateString()}</td>
                <td>{new Date(reservation.end).toDateString()}</td>
                <td>{reservation.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h1>Vols</h1>
        <table>
          <tbody>
          <tr>
            <th>Numéro de vol</th>
            <th>Compagnie</th>
            <th>Place</th>
            <th>Départ</th>
            <th>Prix</th>
          </tr>
          {this.state.response && this.state.response.vols.map((vol, i) => (
            <tr key={i}>
              <td>{vol.numeroVol}</td>
              <td>{vol.compagnie}</td>
              <td>{vol.place}</td>
              <td>{new Date(vol.depart).toDateString()}</td>
              <td>{vol.prix}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default withStyles(styles)(PageVolsAndHotels)
