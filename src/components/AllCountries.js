import React,{useState} from 'react'
import CountryInfo from './CountryInfo';
import Search from "./Search";
const AllCountries = ({continents}) => {
    const [search, setSearch] = useState("");


