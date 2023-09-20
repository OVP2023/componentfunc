import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './vite.svg'
import './index.css'

function App(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <div className="main-content">
          <h2>{props.brand}</h2>
          <h1>{props.title}</h1>
          <h3>{props.description}</h3>
          <div className="description">{props.descriptionFull}</div>
          <div className="highlight-window mobile">
            <div className="highlight-overlay"></div>
          </div>
          <div className="divider"></div>
          <div className="purchase-info">
            <div className="price">
              {props.currency}
              {props.price.toFixed(2)}
            </div>
            <button>Добавить в корзину</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
