import logo from './logo.svg';
import './App.css';

// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {

const Slide1 = () => <div style={{height:'90vh', width:'100vw', backgroundColor:'gold'}}>slide 1</div>
const Slide2 = () => <div style={{height:'90vh', width:'100vw', backgroundColor:'tomato'}}>slide 2</div>
const Slide3 = () => <div style={{height:'90vh', width:'100vw', backgroundColor:'cyan'}}>slide 3</div>
const Slide4 = () => <div style={{height:'90vh', width:'100vw', backgroundColor:'green'}}>slide 4</div>
const Slide5 = () => <div style={{height:'90vh', width:'100vw', backgroundColor:'red'}}>slide 5</div>

  return (
    <div className="App">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide><Slide1 /></SwiperSlide>
        <SwiperSlide><Slide2 /></SwiperSlide>
        <SwiperSlide><Slide3 /></SwiperSlide>
        <SwiperSlide><Slide4 /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
