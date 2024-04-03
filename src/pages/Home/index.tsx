import { useNavigate } from 'react-router-dom';




import banner from "../../assets/banner.jpg"
import bg from "../../assets/bg.jpg"
import "./style.css"
import { Button } from '@mui/material';






function Home() {
    const navigate = useNavigate()
    function handleCardClick(){
        navigate('/login')
    }
    return(
        <>
        <div className='area'>
        <div className='banner'><img src={banner} alt="banner" /></div>
        <article className='cards'>
          <section className='card'>
          <img src={bg} alt="Product" className='product-img' />
                  <div className='product-info'>
                      <h3>Product Name</h3>
          
                      <div className='product-btn'>
                        <Button variant="contained" color='inherit' href="#contained-buttons" onClick={handleCardClick}sx={{
                          margin: "auto",
                        }}>
                        Ver categoria
                        </Button>
                        </div>
                  </div>
          </section>

          <section className='card'>
          <img src={bg} alt="Product" className='product-img' />
                  <div className='product-info'>
                      <h3>Product Name</h3>
          
                      <div className='product-btn'>
                        <Button variant="contained" color='inherit' href="#contained-buttons" onClick={handleCardClick}sx={{
                          margin: "auto",
                        }}>
                        Ver categoria
                        </Button>
                        </div>
                  </div>
          </section>
          <section className='card'>
          <img src={bg} alt="Product" className='product-img' />
                  <div className='product-info'>
                      <h3>Product Name</h3>
          
                      <div className='product-btn'>
                        <Button variant="contained" color='inherit' href="#contained-buttons" onClick={handleCardClick}sx={{
                          margin: "auto",
                        }}>
                        Ver categoria
                        </Button>
                        </div>
                  </div>
          </section>

          <section className='card'>
          <img src={bg} alt="Product" className='product-img' />
                  <div className='product-info'>
                      <h3>Product Name</h3>
          
                      <div className='product-btn'>
                        <Button variant="contained" color='inherit' href="#contained-buttons" onClick={handleCardClick}sx={{
                          margin: "auto",
                        }}>
                        Ver categoria
                        </Button>
                        </div>
                  </div>
          </section>

          
        </article>
        </div>
        </>
        
    )
}

export default Home;