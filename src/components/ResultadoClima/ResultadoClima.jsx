import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import addClimasFav from '../addClimaFav/addClima';


function ResultadoClima({resultado}) {

    //extraer los valores
    const {name, main} = resultado;
    
    if(!name) return null;

    //restar grados kelvin
    const kelvin = 273.15;

    console.log(resultado);
    return (
        <div>
    

            <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        
      />
     <CardHeader
     
     title= {name}
     
     />
      <CardContent>
      <Typography>
      El clima de {name} es: 
      </Typography >
      {parseInt(main.temp - kelvin, 10)}  <span>&#x2103;</span>

      <Typography>
      temperatura Máxima : { parseInt(main.temp_max - kelvin, 10)} &#x2103;

      </Typography>
      <Typography>
      temperatura Minima : { parseInt(main.temp_min - kelvin, 10)} &#x2103;
      </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={()=> addClimasFav()}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      <Collapse  timeout="auto" unmountOnExit>
        
      </Collapse>
    </Card>
      </div>
    )
}

export default ResultadoClima;