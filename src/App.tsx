import useForcast from "./hooks/useForcast"
import Search from "./components/Search"
import Forcast from "./components/Forecast"


const App = ():JSX.Element => {
const{term,options,forcast,submitHandler,optionSelect,inputChange}=useForcast()
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-screen w-full">
      {forcast?<Forcast data={forcast}></Forcast>: <Search submitHandler={submitHandler} optionSelect={optionSelect} options={options} inputChange={inputChange} term={term} ></Search>
}
    </main>
  )
}

export default App
