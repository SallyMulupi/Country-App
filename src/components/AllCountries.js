import React,{useState} from 'react'
import CountryInfo from './CountryInfo';
import Search from "./Search";
const AllCountries = ({continents}) => {
    const [search, setSearch] = useState("");


    const countryTDisplay=continents.map((continent) => (
        <CountryInfo
        key={continent.id}
        name={continent.name.common}
        capital={continent.capital}
        languages={continent.language}
        flag={continent.flag}
        flags={continent.flags.png}
        population={continent.population}
        />
        ))
        // {      countryTDisplay.filter((continent) => continent.capital.toLowerCase().includes(search.toLowerCase()));
        // }
        
        return (
            <div className="bothfoodsearch">
              <div>
                <Search onSearchChange={setSearch} search={search}/>
              </div>
            <div className="mainFoodcontainer">
            {/* <CountryInfo/> */}
            {countryTDisplay}
            </div>
            </div>
          );
    }
    
    export default AllCountries