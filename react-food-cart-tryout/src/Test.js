import React from 'react'


export default function Test () {
  return(
    <div class="p-3 position-relative">
      <div class="list-card-body">
        <h6 class="mb-1"><a href="restaurant.html" class="text-black">The osahan Restaurant
          </a>
        </h6>
        <p class="text-gray mb-3">North • Hamburgers • Pure veg</p>
        <p class="text-gray mb-3 time"><span class="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2"><i
              class="feather-clock"></i> 15–25 min</span> <span class="float-right text-black-50"> $500 FOR
            TWO</span></p>
      </div>
      <div class="list-card-badge">
        <span class="badge badge-danger">OFFER</span> <small>65% OSAHAN50</small>
      </div>
    </div>
  )
}