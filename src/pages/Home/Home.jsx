import styles from "../Home/Home.module.css";
import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { UncontrolledCarousel } from 'reactstrap';

import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export function Home() {
       return(
              <>
                     <div className={styles.container}>
                            <div className={styles.imgContainer}>
                                   <img src="https://firebasestorage.googleapis.com/v0/b/microproyecyo.appspot.com/o/Img.jpg?alt=media&token=83374825-4bf5-4b34-a17f-adbec05bb76c" alt="" />
                                   <div className={styles.welcome}>
                                          <h1>BIENVENIDO A MOVIE+</h1>
                                   </div>
                                   <div className={styles.info}>
                                          <h2>Para poder acceder a nuestro catalogo de películas tendras que iniciar sesión o si aún no tienes cuenta puedes registrarte ¡Es Gratis!</h2>
                                   </div>
                            </div>
                     </div>
              </>
       )
}


// const imageData = [
//        {
//          label: "Image 1",
//          alt: "image1",
//          url:
//            "https://firebasestorage.googleapis.com/v0/b/microproyecyo.appspot.com/o/Img%201.jpg?alt=media&token=2f9fe9e7-4de6-4acf-b568-df1308146834"
//        },
//        {
//          label: "Image 2",
//          alt: "image2",
//          url:
//            "https://firebasestorage.googleapis.com/v0/b/microproyecyo.appspot.com/o/Img%202.jpg?alt=media&token=ef797767-6ea1-4498-9411-a7ac4748ba5f"
//        },
//        {
//          label: "Image 3",
//          alt: "image3",
//          url: "https://firebasestorage.googleapis.com/v0/b/microproyecyo.appspot.com/o/Img%203.jpg?alt=media&token=23fdbc4e-6534-4fef-a9eb-005938bfeca6"
//        }
//      ];
     
//      const renderSlides = imageData.map((image) => (
//        <div key={image.alt}>
//          <img src={image.url} alt={image.alt} />
//          <p className="legend">{image.label}</p>
//        </div>
//      ));
     
// export function Home() {
//        const [currentIndex, setCurrentIndex] = useState();
//        function handleChange(index) {
//          setCurrentIndex(index);
//        }
//        return (
//          <div className="App">
//            <Carousel
//              showArrows={true}
//              autoPlay={true}
//              infiniteLoop={true}
//              selectedItem={imageData[currentIndex]}
//              onChange={handleChange}
//              className="carousel-container"
//            >
//              {renderSlides}
//            </Carousel>
//          </div>
//        );
// }





// export function Home() {
//        return(
//        <>
//               <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
//                      <div>
//                             <img src="https://firebasestorage.googleapis.com/v0/b/microproyecyo.appspot.com/o/Img%201.jpg?alt=media&token=2f9fe9e7-4de6-4acf-b568-df1308146834" className={styles.img}/>
//                             {/* <p className="legend">Legend 1</p> */}
//                      </div>
//                      <div>
//                             <img src="https://firebasestorage.googleapis.com/v0/b/microproyecyo.appspot.com/o/Img%202.jpg?alt=media&token=ef797767-6ea1-4498-9411-a7ac4748ba5f" className={styles.img}/>
//                             {/* <p className="legend">Legend 2</p> */}
//                      </div>
//                      <div>
//                             <img src="https://firebasestorage.googleapis.com/v0/b/microproyecyo.appspot.com/o/Img%203.jpg?alt=media&token=23fdbc4e-6534-4fef-a9eb-005938bfeca6" className={styles.img}/>
//                             {/* <p className="legend">Legend 3</p> */}
//                      </div>
//               </Carousel>
//        </>
       
//        ) 
// }

// const items = [
//     {
//            src: 'https://firebasestorage.googleapis.com/v0/b/microproyecyo.appspot.com/o/Img%201.jpg?alt=media&token=2f9fe9e7-4de6-4acf-b568-df1308146834',
//            altText: 'Slide 1',
//            caption: 'Para poder acceder a nuestro catalogo de películas tendras que iniciar sesión o si aún no tienes cuenta puedes registrarte ¡Es Gratis!',
//            header: 'BIENVENIDO A MOVIE+'
//     },
//     {
//            src: 'https://firebasestorage.googleapis.com/v0/b/microproyecyo.appspot.com/o/Img%202.jpg?alt=media&token=ef797767-6ea1-4498-9411-a7ac4748ba5f',
//            altText: 'Slide 2',
//            caption: 'Para poder acceder a nuestro catalogo de películas tendras que iniciar sesión o si aún no tienes cuenta puedes registrarte ¡Es Gratis!',
//            header: 'BIENVENIDO A MOVIE+'
//     },
//     {
//            src: 'https://firebasestorage.googleapis.com/v0/b/microproyecyo.appspot.com/o/Img%203.jpg?alt=media&token=23fdbc4e-6534-4fef-a9eb-005938bfeca6',
//            altText: 'Slide 3',
//            caption: 'Para poder acceder a nuestro catalogo de películas tendras que iniciar sesión o si aún no tienes cuenta puedes registrarte ¡Es Gratis!',
//            header: 'BIENVENIDO A MOVIE+'
//     }
// ];

//  export const Home = () => <UncontrolledCarousel items={items} className={styles.img}/>;
