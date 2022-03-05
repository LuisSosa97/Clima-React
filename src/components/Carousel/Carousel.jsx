import { Carousel } from 'react-carousel-minimal';

function App() {
 const data = [
    {
      image: "https://www.elagoradiario.com/wp-content/uploads/2019/06/sequ%C3%ADa-1140x600.jpg",
      caption: "Sequias"
    },
    {
      image: "https://pbs.twimg.com/media/Cgc9DNUUsAA8tph.jpg",
      caption: "Climatología"
    },
    {
      image: "https://www.caracteristicas.co/wp-content/uploads/2018/11/tormenta-electrica-e1583114555455.jpg",
      caption: "Tormentas"
    },
    {
      image: "https://www.sostenibilidad.com/media/501094/desastres-naturales.jpg",
      caption: "Cambios Climaticos"
    },
    {
      image: "https://cdn.forbes.com.mx/2019/06/Paris-calor-unsplash-ciudad-640x360.jpg",
      caption: "Calor"
    },
    {
      image: "https://www.eluniversal.com.mx/sites/default/files/2020/11/03/frente_frio_0.jpg",
      caption: "Frios"
    },
    {
      image: "https://static.diariofemenino.com/uploads/psicologia/214120-sonar-montana.jpg",
      caption: "Nevadas"
    },
    {
      image: "https://www.lifeder.com/wp-content/uploads/2021/10/clima-tipos.jpg",
      caption: "Climas"
    },
    {
      image: "https://www.caracteristicas.co/wp-content/uploads/2018/08/clima-mediterraneo-grecia-800x404.jpg",
      caption: "Climas "
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
     
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
            
          />
          <p></p>
          
        
        </div>
      </div>
   
  );
}

export default App;