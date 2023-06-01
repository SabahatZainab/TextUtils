import NavBar from './components/NavBar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
     {/* <NavBar title="TextUtils"/> */}
     <NavBar/>
     <div className="container my-3">
     {/* <TextForm heading="Enter Your Text Below"/> */}
     <TextForm/>
     </div>
   
   </>
    
  );
}

export default App;
