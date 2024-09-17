import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './Store';
import { Address, Restaurant } from './model/restaurant';
import BestMenu from './BestMenu';

let data:Restaurant = {
  name: "굳건한 식당",
  category: "western",
  address: {
    city: "ilsan",
    detail: "hugok",
    zipCode: 12345
  },
  menu: [{
    name: "rose pasta",
    price: 2000,
    category:"PASTA"
  },
  {
    name: "garlic steak",
    price: 3000,
    category:"PASTA"
  }]
}

const App:React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data)
  const changeAddres = (address:Address) => {
    setMyRestaurant({...myRestaurant, address:address})
  }

  const showBestMenuName = (name:string) => {
    return name
  }

  return ( 
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAddres}/>
      <BestMenu name="불고기피자" category="피자" price={2400} showBestMenuName={showBestMenuName} />
    </div>
  )
}
export default App;
