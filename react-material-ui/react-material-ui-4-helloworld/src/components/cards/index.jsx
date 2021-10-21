// by index_file_template
import React from 'react';

import ImgMediaCard from "src/components/cards/ImgMediaCard/index.jsx"
import MediaCard from "src/components/cards/MediaCard/index.jsx"
import MediaControlCard from "src/components/cards/MediaControlCard/index.jsx"
import OutlinedCard from "src/components/cards/OutlinedCard/index.jsx"
import RecipeReviewCard from "src/components/cards/RecipeReviewCard/index.jsx"
import SimpleCard from "src/components/cards/SimpleCard/index.jsx"

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        <ImgMediaCard />
<MediaCard />
<MediaControlCard />
<OutlinedCard />
<RecipeReviewCard />
<SimpleCard />
      </div>
    </>
  );
}
