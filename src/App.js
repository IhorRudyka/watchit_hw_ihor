import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import SingleCard from './components/SingleCard/SingleCard';
import Grid from '@mui/system/Unstable_Grid/Grid';

const mockData = [
  {
    id: 1,
    name: "Home Alone",
    image: "https://lumiere-a.akamaihd.net/v1/images/image_86dd5e23.jpeg?region=0,0,1800,776",
    time: "1hr: 50mins",
  },
  {
    id: 2,
    name: "Black Adam",
    image: "https://images.thedirect.com/media/article_full/black-adam-hawkman-dc-dceu-dwayne-johnson.jpg",
    time: "2hr: 10mins",
  },
  {
    id: 3,
    name: "Back to the Future",
    image: "https://static1.squarespace.com/static/5c62c09c4d546e27dc1016c7/t/653ffe22872886679b3f9c6e/1698692642521/ff68e65f5d5ee5dd98fc71c1218a71e3e1008668880b6430d4e912ebf5bda412._UR1920%2C1080_.jpg?format=1500w",
    time: "2hr: 50mins",
  },
  {
    id: 4,
    name: "Avengers",
    image: "https://www.pluggedin.com/wp-content/uploads/2019/12/the-avengers-review-image-1200x688.jpg",
    time: "2hr:30mins",
  },
];

function App() {
  return (
    <div className="App">
      <Navigation />
      <Grid container spacing={2}>
        {mockData.map(({id, name, image, time}) =>(
          <Grid item xs={3}>
            <SingleCard
              id={id}
              name={name}
              image={image}
              time={time}   
            /> 
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
