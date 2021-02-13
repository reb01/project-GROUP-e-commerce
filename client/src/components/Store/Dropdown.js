import React from 'react';
import styled from 'styled-components';

const Dropdown = ( { handleSortSelect } )=>{
    return (
        <Wrapper>
          <label htmlFor="sort"><strong>SORT BY:</strong></label>
          <Select   id='sort' onChange={(ev)=>handleSortSelect(ev)}>       
            <option key="default" value="default">most popular </option>
            <option key="priceLowHigh" value={`${encodeURIComponent('+')}price`}>price - low to high</option>
            <option key="priceHighLow" value="-price">price - high to low</option>
          </Select>
        </Wrapper>
    );
};


const Wrapper = styled.div`
  align-self: flex-end;
  margin: 10px 50px; 
  @media (max-width: 768px) {
    align-self: center;   
  }
`;

const Select = styled.select`
  align-self: flex-end;
  margin-left: 15px;
  height: 35px;
  width: 150px;
  border-radius: 5px;
`;

export default Dropdown;