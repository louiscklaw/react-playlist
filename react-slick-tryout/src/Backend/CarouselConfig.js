import React from 'react'

import { Draggable } from 'react-beautiful-dnd'

import { ShareContext } from './context/Share'

const container = {
  border: '1px solid lightgrey',
  borderRadius: '2px',
  padding: '8px',
  marginBottom: '8px',
  backgroundColor: 'white',
  width: '300px',
  overflow: 'hidden',
}

const gold_square = {
  width: '30px',
  height: '30px',
  backgroundColor: 'pink',
}

function CarouselConfig({ carousel_config, index }) {
  let { handleItemEditClick, handleItemDeleteClick } = React.useContext(ShareContext)
  return (
    <>
      <Draggable draggableId={carousel_config.id} index={index}>
        {provided => {
          return (
            <div ref={provided.innerRef} {...provided.draggableProps}>
              <div style={gold_square} {...provided.dragHandleProps}>
                H
              </div>
              <div>
                <div style={container}>
                  <div>
                    <pre>{JSON.stringify(carousel_config.meta, null, 2)}</pre>
                    <button
                      onClick={e => {
                        handleItemEditClick(e, carousel_config.id)
                      }}
                    >
                      E
                    </button>
                    <button
                      onClick={e => {
                        handleItemDeleteClick(e, carousel_config.id)
                      }}
                    >
                      D
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </Draggable>
    </>
  )
}

export default React.memo(CarouselConfig)
