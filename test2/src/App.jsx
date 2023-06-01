import './App.css';
import { useState } from 'react'
import Cards from './Cards'

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
  }

  console.log(res)
  return (
    <>
      <form onSubmit={handlerCallApi}>
        <input type='text' placeholder='Search' value={search} onChange={handleOnChange} />
        <input type='submit' />
      </form>
  
      
    
    {res?.map((res, index) => {
      return (
        <Cards 
        key={index}
        definitions={res.definitions}
        />
      )
    })}

  
      
    </>

  );
}

export default App;
