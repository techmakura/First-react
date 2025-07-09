import './App.css';
import Counter from './components/counter';
// import Image from './components/image';

function App() {
  return (
    <div>
      {/* Component can take data, manupulate data & return html */}
      <h1>We are using reuseable component</h1>
      
      {/* <Image 
        src="https://plus.unsplash.com/premium_photo-1676637656166-cb7b3a43b81a?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="AI"
        width="160px"
        height="90px"
      />

      <Image 
        src="https://images.unsplash.com/photo-1737894543924-15e1ff7adbdb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Chatgpt"
        width="90px"
        height="160px"
      />

      <Image
        src="https://images.unsplash.com/photo-1521056787327-165dc2a32836?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="books"
        width="160px"
        height="160px"
        // style={{border: "1px solid red"}}
      />

      <Image
        src="https://images.unsplash.com/photo-1464865885825-be7cd16fad8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="books"
        width="500px"
        height="500px"
        // style={{border: "1px solid red"}}
      /> */}



      <h3>State</h3>
      <p> At any period of time the value of any variable is known as state</p>

      <Counter />

    </div>
  );
}

export default App;
