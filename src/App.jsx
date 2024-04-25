import './index.css'
import { useState } from 'react'
import Header from './components/Header'
import Guitar from './components/Guitar'
import { db } from './data/db'

function App() {
  const [data, setData] = useState(db);
  const [cart, setCart] = useState([]);

  function addToCart(guitar){
  const itemExists = cart.findIndex(item => item.id == guitar.id);
  if(itemExists >=0){
    const updateCart = [...cart];
    updateCart[itemExists].quantity++;
    setCart(updateCart);
  } else{
    guitar.quantity=1;
    setCart([...cart,guitar]);
  }

  }

  function deleteItem(id){
    setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))
  }
 
  return (
    <>
    <Header
    cart={cart}
    deleteItem={deleteItem}
    
    />
    <main className="container-xl mt-5">
      <h2 className='text-center'>Nuestra colección</h2>
      <div className='row mt-5'>
        {data.map((guitar) => (
          <Guitar
          key={guitar.id}
          guitar={guitar}
          addToCart={addToCart}
          
          />
        ))}

      </div>

    </main>
    </>
  )
}

export default App
