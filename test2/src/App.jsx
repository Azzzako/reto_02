import './App.css';
import { useState } from 'react'
import Cards from './Cards'
import img from './assets/dic.png'

function App() {
  const [res, setRes] = useState(null)
  const [search, setSearch] = useState('')

  const handleOnChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }


  const handlerCallApi = async (e) => {
    e.preventDefault()
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
    const data = await response.json()

    if (Array.isArray(data) && data.length > 0) {
      setRes(data[0].meanings)
    } else {
      setRes(null)
    }

    setSearch('')
  }

  // console.log(res)
  return (
    <div>
      <section className='container'>
        <img src={img} alt={img} className='image'/>
        <form onSubmit={handlerCallApi}>
          <input type='text' placeholder='Search' value={search} onChange={handleOnChange} />
          <input type='submit' />
        </form>
      </section>



      <h2 style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>Definitions</h2>

      <div className='definitions'>
        {res?.map((res, index) => {
          return (
            <Cards
              key={index}
              definitions={res.definitions}
            />
          )
        })}
      </div>




    </div>

  );
}

export default App;
