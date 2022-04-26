import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

import Step1Svg from "./undraw_creation_process_re_wuo6.svg";
import Step2Svg from "./undraw_working_out_re_nhkg.svg";
import Step3Svg from "./undraw_cookie_love_re_lsjh.svg";
import Step4Svg from "./undraw_solution_mindset_re_57bf.svg";

const tour_steps = [
  {
    html_content: `
  <div style="
  background-image: url('${Step1Svg}'); 
  background-repeat: no-repeat; 
  background-position: top; 
  background-size: contain;  width: 100%; height: 100%; max-height: 200px; 
  margin-top: 3rem;
  margin-bottom: 3rem;
  ">
  </div>
  <h1>1</h1>
  <p>中國證監會表示，支持符合條件的公募基金，參與跨境理財通業務試點，穩步有序推動產品雙向開放，持續推進內地與香港基金互認，穩妥拓展交易所買賣基金(ETF)互通機制。</p>
  `,
  },
  {
    html_content: `
  <div style="
  background-image: url('${Step2Svg}'); 
  background-repeat: no-repeat; 
  background-position: top; 
  background-size: contain;  width: 100%; height: 100%; max-height: 200px; 
  margin-top: 3rem;
  margin-bottom: 3rem;
  ">
  </div>
  <h1>2</h1>
  <p>中國證監會表示，支持符合條件的公募基金，參與跨境理財通業務試點，穩步有序推動產品雙向開放，持續推進內地與香港基金互認，穩妥拓展交易所買賣基金(ETF)互通機制。</p>
  `,
  },
  {
    html_content: `
  <div style="
  background-image: url('${Step3Svg}'); 
  background-repeat: no-repeat; 
  background-position: top; 
  background-size: contain;  width: 100%; height: 100%; max-height: 200px; 
  margin-top: 3rem;
  margin-bottom: 3rem;
  ">
  </div>

  <h1>3</h1>
  <p>中國證監會表示，支持符合條件的公募基金，參與跨境理財通業務試點，穩步有序推動產品雙向開放，持續推進內地與香港基金互認，穩妥拓展交易所買賣基金(ETF)互通機制。</p>
  `,
  },
  {
    html_content: `
  <div style="
  background-image: url('${Step4Svg}'); 
  background-repeat: no-repeat; 
  background-position: top; 
  background-size: contain;  width: 100%; height: 100%; max-height: 200px; 
  margin-top: 3rem;
  margin-bottom: 3rem;
  ">
  </div>
  <h1>4</h1>
  <p>中國證監會表示，支持符合條件的公募基金，參與跨境理財通業務試點，穩步有序推動產品雙向開放，持續推進內地與香港基金互認，穩妥拓展交易所買賣基金(ETF)互通機制。</p>
  
  `,
  },
];

function createMarkup({ html_content }) {
  return { __html: html_content };
}

export default function WelcomeTour() {
  let [current_slide, setCurrentSlide] = React.useState(0);
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const onAfterChange = (index) => setCurrentSlide(index);

  return (
    <>
      <div>
        <Slider {...settings} afterChange={onAfterChange}>
          {tour_steps.map((step, index) => {
            return (
              <div>
                {/* {JSON.stringify(step)} */}

                <div
                  dangerouslySetInnerHTML={createMarkup(step)}
                  style={{
                    padding: "2rem",
                    paddingBottom: "5rem",
                    height: "calc(100vh - 200px)",
                    display: "flex",
                    flexFlow: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                ></div>
              </div>
            );
          })}
        </Slider>
        <div
          style={{
            position: "fixed",
            height: "150px",
            bottom: "0px",
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <div>{current_slide === tour_steps.length - 1 ? <button>done</button> : <button>next</button>}</div>
        </div>
      </div>
    </>
  );
}
