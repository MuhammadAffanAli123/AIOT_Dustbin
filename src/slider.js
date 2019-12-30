import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from './img1.jpg'
import img3 from './img3.jpg'
import img2 from './img2.jpg'
class Slider extends Component {
  render() {
    return (
      <Carousel>
        <div >  
          <img src={img3} style={{height:"100%", width:"100%"}} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={img3} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={img3} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  }
}

export default Slider;



// import React, { Component } from 'react';
//  import ReactDOM from 'react-dom';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
// import img1 from './img1.jpg'
// import img3 from './img3.jpg'
//  import img2 from './img2.jpg'
// class Sliders extends Component  {
//   render() {
//     return (
//       <CarouselProvider
//         naturalSlideWidth={100}
//         naturalSlideHeight={125}
//         totalSlides={3}
//       >
//         <Slider>
//           <Slide index={0}><img src={img1} /></Slide>
//           <Slide index={1}><img src={img2} /></Slide>
//           <Slide index={2}><img src={img3} /></Slide>
//         </Slider>
//         <ButtonBack>Back</ButtonBack>
//         <ButtonNext>Next</ButtonNext>
//       </CarouselProvider>
//     );
//   }
// }
// export default Sliders