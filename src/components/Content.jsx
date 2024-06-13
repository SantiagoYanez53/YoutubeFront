import Categories from "./Categories"
import Video from "./Video"


export default function Content(){
    const videos = [
      { image: `https://i.ytimg.com/vi/EHYwm3dR2SI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRq4AAyXFm51tEGny1rpNDyrFo5A`,
         titulo: `1 Guapo Contra 6 mujeres`,
         channel: `OneCoin`,
      },
      { image: `https://i.ytimg.com/vi/EHYwm3dR2SI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRq4AAyXFm51tEGny1rpNDyrFo5A`,
        titulo: `1 Guapo Contra 6 mujeres`,
        channel: `OneCoin`,
     },
     { image: `https://i.ytimg.com/vi/EHYwm3dR2SI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRq4AAyXFm51tEGny1rpNDyrFo5A`,
         titulo: `1 Guapo Contra 6 mujeres`,
         channel: `OneCoin`,
      }
    ]
   
   return (
    <section className='col-start-2 col-end-3 row-start-2 row-end-3'>
        <Categories />
        <section className="grid grid-cols-4 gap-4 pt-4">
         {videos.map((video) =>{
            return <Video 
            key={`video-${video.titulo}`} 
            image={video.image}
            titulo={video.titulo}
            channel={video.channel}/>
         })}
        </section>
        
       
    </section>)

}