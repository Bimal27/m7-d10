import { Component } from "react";
import { Container ,Row,Col,InputGroup,FormControl,Button} from "react-bootstrap";

import { connect } from 'react-redux'
import { getWeatherAction } from "../actions";


const mapStateToProps = state => state

const mapDispatchToProps =(dispatch) => ({
        getWeather: (city) => {
          dispatch(getWeatherAction(city))
        }
    })
class Home extends Component{
    state ={
        query:'',
        data:[]
    }

    handleSubmit = (e) =>{
      e.preventDefault()
      
      this.props.getWeather(this.state.query)
//      try {
//       let resp = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${this.state.query}&appid=201b4ede2f76b7d4bd9361b27bf5e780`
//       );
//       if (resp.ok) {
//         let data = await resp.json();
//         this.setState({ data});
//         console.log(this.state.data)
//       } else {
//         console.log("error");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

    }
    render() {
        return(
            <Container>
                <Row className='d-flex justify-content-center'>
                    <Col md={8} lg={6}>
                      <InputGroup className="my-4"  >
                   
                        <FormControl
                        value={this.state.query}
                        placeholder="Search city"
                        onChange ={e => this.setState({query: e.target.value})}
                        />
                        <Button variant="dark" id="button-addon2" onClick={(e)=>this.handleSubmit(e)}>
                        Search
                        </Button>

                       
                    </InputGroup>

                    </Col>
                </Row>
                <Row>
                    <Col md={4} lg={6}>
    

{/*                         
                                    <Map
                                        google={this.props.google}
                                        zoom={8}
                                        initialCenter={{ lat: 47.444, lng: -122.176}}
                                        />

                                       
                                       <Marker position={{ lat: 48.00, lng: -122.00}} />   */}
                                
                           
                     
                    </Col>
                </Row>
            </Container>
        )
    }
    
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
