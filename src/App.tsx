import {useRoutes,Link} from 'react-router-dom'
import router from './router'

function App() {
  const outlet=useRoutes(router);
  return (
    <div className="App">
      <Link to='/home'>home</Link>
      <Link to='/about'>about</Link>
      {outlet}
    </div>
  )
}

export default App
