import 'intersection-observer'
import React from 'react'
import { ScrollView, StickySection } from '@cantonjs/react-scroll-view'

import './App.css'

function App() {
  const handleEndReached = () => {
    console.log('load more')
  }

  return (
    <div className='App'>
      <ScrollView style={{ height: '100vh' }}>
        <StickySection sticky={<h1>ランチ</h1>}>
          <ul>
            <li>
              <div>
                ホテルモントレ銀座20周年
                スペシャルランチ
              </div>
            </li>
            <li>
              <div>Menu 1.1</div>
            </li>
            <li>
              <div>Menu 1.2</div>
            </li>
            <li>
              <div>Menu 1.3</div>
            </li>
            <li>
              <div>Menu 1.4</div>
            </li>
          </ul>
        </StickySection>
        <StickySection sticky={<h1>ディナー</h1>}>
          <ul>
            <li>
              <div>Menu 2.1</div>
            </li>
            <li>
              <div>Menu 2.2</div>
            </li>
            <li>
              <div>Menu 2.3</div>
            </li>
            <li>
              <div>Menu 2.4</div>
            </li>
            <li>
              <div>Menu 2.5</div>
            </li>
            <li>
              <div>Menu 2.6</div>
            </li>
          </ul>
        </StickySection>
        <StickySection sticky={<h1>ドリンク</h1>}>
          <ul>
            <li>
              <div>Menu 3.1</div>
            </li>
            <li>
              <div>Menu 3.1</div>
            </li>
            <li>
              <div>Menu 3.1</div>
            </li>
            <li>
              <div>Menu 3.1</div>
            </li>
            <li>
              <div>Menu 3.1</div>
            </li>
            <li>
              <div>Menu 3.1</div>
            </li>
          </ul>
        </StickySection>
        <StickySection sticky={<h1>4</h1>}>
          <ul>
            <li>Carl Wetzler</li>
            <li>Cherry Greeno</li>
            <li>Cris Kepley</li>
            <li>Carl Wetzler</li>
            <li>Cherry Greeno</li>
            <li>Cris Kepley</li>
            <li>Carl Wetzler</li>
            <li>Cherry Greeno</li>
            <li>Cris Kepley</li>
            <li>Carl Wetzler</li>
            <li>Cherry Greeno</li>
            <li>Cris Kepley</li>
            <li>Carl Wetzler</li>
            <li>Cherry Greeno</li>
            <li>Cris Kepley</li>
          </ul>
        </StickySection>
        <StickySection sticky={<h1>5</h1>}>
          <ul>
            <li>Carl Wetzler</li>
            <li>Cherry Greeno</li>
            <li>Cris Kepley</li>
            <li>Carl Wetzler</li>
            <li>Cherry Greeno</li>
            <li>Cris Kepley</li>
            <li>Carl Wetzler</li>
            <li>Cherry Greeno</li>
            <li>Cris Kepley</li>
            <li>Carl Wetzler</li>
            <li>Cherry Greeno</li>
            <li>Cris Kepley</li>
            <li>Carl Wetzler</li>
            <li>Cherry Greeno</li>
            <li>Cris Kepley</li>
          </ul>
        </StickySection>
        <StickySection sticky={<h1>6</h1>}>
          <ul>
            <li>Carl Wetzler</li>
            <li>Cherry Greeno</li>
            <li>Cris Kepley</li>
            <li>Carl Wetzler</li>
            <li>Cherry Greeno</li>
            <li>Cris Kepley</li>
            <li>Carl Wetzler</li>
            <li>Cherry Greeno</li>
            <li>Cris Kepley</li>
            <li>Carl Wetzler</li>
            <li>Cherry Greeno</li>
            <li>Cris Kepley</li>
            <li>Carl Wetzler</li>
            <li>Cherry Greeno</li>
            <li>Cris Kepley</li>
          </ul>
        </StickySection>
        <StickySection sticky={<h1>7</h1>}>
          <ul>
            <li>Carl Wetzler</li>
            <li>Cherry Greeno</li>
            <li>Cris Kepley</li>
            <li>Carl Wetzler</li>
            <li>Cherry Greeno</li>
            <li>Cris Kepley</li>
            <li>Carl Wetzler</li>
            <li>Cherry Greeno</li>
            <li>Cris Kepley</li>
            <li>Carl Wetzler</li>
            <li>Cherry Greeno</li>
            <li>Cris Kepley</li>
            <li>Carl Wetzler</li>
            <li>Cherry Greeno</li>
            <li>Cris Kepley</li>
          </ul>
        </StickySection>
      </ScrollView>

    </div>
  )
}

export default App
