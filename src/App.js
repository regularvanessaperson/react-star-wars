import {Route} from 'react-router-dom'
import StarshipList from "./components/StarshipList"
import StarshipPage from "./components/StarshipPage"
import Layout from "./components/common/Layout"
import './App.css';



function App() {
  return (
    <div className="App">
      <Layout>
      <Route exact path='/' component = {StarshipList} />
      <Route path='/starshipPage' component = {StarshipPage}  />
      </Layout>
    </div>
  );
}

export default App;
