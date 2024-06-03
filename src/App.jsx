import Card from './components/Card';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <div className="Container">
      <h2 className="clearfix"  style={{ textAlign: 'center' }}>Cosa desidera Ordinare?</h2>
      <hr />
      <div className='row'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
    </>

  );
}

export default App;
