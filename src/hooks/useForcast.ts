import { ChangeEvent, useState } from "react"
import { forecastType, optiontype } from "../types"


export const useForcast = () => {
    const [term, setTerm] = useState<string>('')
    const [city,setCity]=useState<optiontype|null>()
    const [options, setOptions] = useState<[]>([])
    const [forcast,setForcast]=useState<forecastType |null>(null)
    const getSearchOption = async(value: string) => {
        const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=8c2f45eacc91ad0b660e7694528fd1cb`)
        const data = await res.json()
        console.log(data)

        setOptions(data)
        }
    const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value=e.target.value.trim()
        setTerm(value)
        if (value==='') return
        getSearchOption(value)
        
    }
    
    const getforcast= async (city: optiontype) => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=8c2f45eacc91ad0b660e7694528fd1cb`)
        const data = await res.json()
        const forcastdata = {
            ...data.city,
            list:data.list.slice(0,16)
        }
        setForcast(forcastdata)
    }
    const optionSelect = (option: optiontype) => {
        setCity(option)
        setOptions([])
        setTerm(option.name)
    }
    const submitHandler = () => {
        if (!city) return
        getforcast(city)
    }

return{term,options,forcast,submitHandler,optionSelect,inputChange}
}
export default useForcast