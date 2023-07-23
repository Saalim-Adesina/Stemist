import Navbar from './Navbar'
import Home from './Home'

function App() {
  const handleClick = () => {
    console.log('Hello Ninjas')
  }

  const handleClick2 = (name, e) => {
    console.log("Hello" + name + e.target)
  }


  return (
    <div className="App">

		<Navbar></Navbar>

		<div className="content">
      <button onClick={handleClick}>Click Me</button>
      <button onClick= {(e)=>handleClick2('Saalim', e)} > Click me Again </button>

			<Home></Home>
		
    </div>
    </div>
  );
}

export default App;
