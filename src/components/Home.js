import React from 'react'
import styled from 'styled-components';


const FooterContainer=styled.div`
display: flex;
flex-direction: row;
background-color: black;
color: white;
padding: 5rem;
justify-content: space-between;
align-items: center;
`
function Home() {
  return (
    <div  className='homecontainer'>
        <div className='homeinfo'>
            <h1>CONTINENTS COUNTRIES </h1>
            <h2>SEARCH FOR A COUNTRY</h2>
        </div>
        {/* <FooterContainer>
      <Footer/>
      </FooterContainer> */}
    </div>

  )
}

export default Home