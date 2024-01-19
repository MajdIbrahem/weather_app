import React, { ChangeEvent } from 'react'

import {optiontype} from '../types'
type searchtypes = {
    term: string,
    options: [],
    inputChange: (e: ChangeEvent<HTMLInputElement>) => void,
    optionSelect: (option: optiontype) => void,
    submitHandler:()=>void
    
}
const Search = ({term,inputChange,options,optionSelect,submitHandler}:searchtypes) :JSX.Element=> {
return (
    
        <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:p-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg text-zinc-700">
            <h1 className="text-4xl font-thin">WEATHER <span className="font-black">FORCAST</span></h1>
            <p className="text-sm mt-2">Enter below  a place you want to know the weather of and select an option from the droptown  </p>
            <div className="flex relative mt-10 md:mt-4">
            <input type='text' value={term} onChange={inputChange} className='px-2 py-1 rounded-l-md boreder-2 border-white  outline-none'></input>
            <ul className="absolute top-9 bg-white ml-1 rounded-b-md ">{
                options.map((option:optiontype ,index: number) =>
                (<li key={option.name + '_' +index}>
                <button onClick={()=>optionSelect(option)} className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer">{option.name}</button>
                </li>)
                
            )}</ul>
            <button onClick={submitHandler} className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 text-zinc-100 px-2 py-1 cursor-pointer">Search</button>
            </div>
        </section>

)
}

export default Search