import {Fragment} from 'react'
import {useData} from './store'

function App() {
  const {name, nameSet, toggle, toggleSet, number, updateNum} = useData((state) => state)
  return (
    <Fragment>
      <div>
        {toggle ? name : ''}
        <button onClick={() => nameSet('Leroy')}>CHANGE NAME</button>
        <button onClick={() => toggleSet(!toggle)}>HIDE</button>
      </div>
      <button onClick={() => updateNum(10)}>{number}</button>
    </Fragment>
  )
}

export default App
