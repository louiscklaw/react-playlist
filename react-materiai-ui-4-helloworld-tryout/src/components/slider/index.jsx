import React from 'react';

import ContinuousSlider from "src/components/slider/ContinuousSlider/index.jsx"
import CustomizedSlider from "src/components/slider/CustomizedSlider/index.jsx"
import DiscreteSlider from "src/components/slider/DiscreteSlider/index.jsx"
import DiscreteSliderLabel from "src/components/slider/DiscreteSliderLabel/index.jsx"
import DiscreteSliderMarks from "src/components/slider/DiscreteSliderMarks/index.jsx"
import DiscreteSliderSteps from "src/components/slider/DiscreteSliderSteps/index.jsx"
import DiscreteSliderValues from "src/components/slider/DiscreteSliderValues/index.jsx"
import InputSlider from "src/components/slider/InputSlider/index.jsx"
import NonLinearSlider from "src/components/slider/NonLinearSlider/index.jsx"
import RangeSlider from "src/components/slider/RangeSlider/index.jsx"
import TrackFalseSlider from "src/components/slider/TrackFalseSlider/index.jsx"
import TrackInvertedSlider from "src/components/slider/TrackInvertedSlider/index.jsx"
import VerticalSlider from "src/components/slider/VerticalSlider/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <ContinuousSlider />
<CustomizedSlider />
<DiscreteSlider />
<DiscreteSliderLabel />
<DiscreteSliderMarks />
<DiscreteSliderSteps />
<DiscreteSliderValues />
<InputSlider />
<NonLinearSlider />
<RangeSlider />
<TrackFalseSlider />
<TrackInvertedSlider />
<VerticalSlider />
      </div>
    </>
  );
}
