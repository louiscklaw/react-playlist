// by index_file_template
import React from 'react';

import CustomizedRatings from "src/components/rating/CustomizedRatings/index.jsx"
import HalfRating from "src/components/rating/HalfRating/index.jsx"
import HoverRating from "src/components/rating/HoverRating/index.jsx"
import RatingSize from "src/components/rating/RatingSize/index.jsx"
import SimpleRating from "src/components/rating/SimpleRating/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <CustomizedRatings />
<HalfRating />
<HoverRating />
<RatingSize />
<SimpleRating />
      </div>
    </>
  );
}
