import { useNavigate } from 'react-router-dom';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import banner from "../../assets/banner.jpg"
import bg from "../../assets/bg.jpg"
import "./style.css"






function Home() {
    const navigate = useNavigate()
    function handleCardClick(){
        navigate('/login')
    }
    return(
        <>
        <div className='area'>
        
        <div className='banner'><img src={banner} alt="banner" /></div>
        <div className='card'>
        <Card sx={{ maxWidth: 250 }}>
      <CardActionArea onClick={handleCardClick}>
        <CardMedia
          component="img"
          height="140"
          image={bg}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </div>
        </div>
        
        </>
        
    )
}

export default Home;