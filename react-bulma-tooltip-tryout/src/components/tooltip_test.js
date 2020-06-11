import React from 'react'

class TooltipTest extends React.Component{
  render(){
    return(
      <>
        <div>
          <h2>bulma tooltip tryout</h2>
          <div class="column">

            <button class="button is-primary" data-tooltip="Tooltip Text">
              <h2>Tooltip</h2>
            </button>


            <div class="column">
              <button class="button is-primary has-tooltip-top has-tooltip-bottom-desktop has-tooltip-active" data-tooltip="Hi! I'm on top and bottom.">Top and Bottom</button>
            </div>

            <h3>multiline tooltip</h3>
            <div class="column">
              <button class="button is-primary has-tooltip-multiline" data-tooltip="Tooltip with a long Text. So we use has-tooltip-multiline modifier to force multiline display.">Multiline Tooltip</button>
            </div>

          </div>
        </div>
      </>
    )
  }
}

export default TooltipTest