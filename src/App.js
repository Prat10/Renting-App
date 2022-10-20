import './App.css';
import { useState } from 'react'
import Displaycontent from './components/Displaycontent';
import { getHouesByLocation, Houses_data } from './RequireData/HouseData';
import './components/Heart.css'
import Navbar from './components/Navbar';

function App() {
  const [houseData, setHouseData] = useState(Houses_data)
  const onLocationChanged = (value) => {
    const searchedData = getHouesByLocation(value)
    setHouseData(searchedData)
  }
  return (
    <div className="App">
      <Navbar />
      <div className='header-text'><h1>Search the Properties Rent..</h1>
        <select className='search-select'>
          <option value='0'>Search with Searchbar</option></select></div>
      <div className='container-div'>
        {/* <input
          placeholder='Enter your Location'></input> */}
        <select placeholder='Select your location' onChange={(e) => onLocationChanged(e.target.value)}>
          <option>Select Location</option>
          <option value='india'>India</option>
          <option value='hk'>Hong Kong</option>
          <option value='taiwan'>Taiwan</option>
          <option value='russia'>Russia</option>
          <option value='germany'>Germany</option>
          <option value='japan'>Japan</option>
        </select>
        <select placeholder='select move-in' onChange={(e) => onLocationChanged(e.target.value)}>
          <option value='0'>Property Type</option>
          <option value='1'>Houses</option>
          <option value='2'>Rent</option>
          <option value='3'>Rooms</option>

        </select>
        <select onChange={(e) => onLocationChanged(e.target.value)}>
          <option value='0'>Tenant Type</option>
          <option value='1'>Family</option>
          <option value='2'>Boys</option>
          <option value='3'>Girls</option>
          <option value='4'>Any</option>
        </select>
        <select>
          <option value='0'>Select Prices</option>
          <option value='1'>2500</option>
          <option value='2'>4000</option>
          <option value='3'>6000</option>
          <option value='4'>9000</option>
          <option value='5'>12000</option>
        </select>
        <a href='#'>
          <button>Search</button>
        </a>
      </div>
      <div className='display'>
        <Displaycontent data={houseData} />
      </div>
    </div>
  );
}

export default App;
