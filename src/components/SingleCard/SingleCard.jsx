import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../../SingleCard.css'

export default function SingleCard(props) {

    const {id, name, image="https://img.goodfon.ru/wallpaper/big/5/3c/kinoplenka-popkorn-fon.jpg", time} = props;

    const handleOnClick = () => {
        console.log(id);
    }
    return (
        <Card className='Card'>
            <CardActionArea >
                <CardMedia
                    component="img"
                    height="222px"
                    image={image}
                    alt="###"  
                />
                <div className='fader'></div>
                <div className='contentWrap '>
                    <h1 className='content filmTitle'>{name}</h1>
                    <h1 className='content'>{time}</h1>
                </div>
                <button onClick={() => handleOnClick(id)} className='button'>Show More</button>
            </CardActionArea>
        </Card>
  );
}