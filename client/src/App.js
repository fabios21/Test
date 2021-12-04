import './App.css';
import SideBar from './components/SideBar';
import Panel from './components/Panel';

function App() {
  return (
    <div class="container">
      <div class="row border rounded-lg justify-content-center">
        <div class="col-2"><SideBar/></div>
        <div class="col-10"><Panel/></div>
      </div>
      
    </div>
  );
}

export default App;
