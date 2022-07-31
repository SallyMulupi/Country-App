import React  from 'react'

const Search = ({onSearchChange,search}) => {
    const onSearchText=(e)=>{
        e.preventDefault()
        onSearchChange(e.target.value)
      }
    
    
      return (
            <div className="add-content">
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Seach a country"
                  value={search}
                  onChange={onSearchText}
                  
                />
              </div>
              
            </div>
      )
    }
    
    export default Search