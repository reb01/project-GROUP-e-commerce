import React from 'react';
import styled from 'styled-components';

const CheckBox = ({ id, value, name, handleClick, isChecked, children })=>{   
    return (
        <Wrapper> 
            <label >           
                <Input type="checkbox" name={name} onClick={(ev)=>handleClick(ev, id, children)} value={value} checked={isChecked} />
            {children}
            </label>         
        </Wrapper>  
    );
};

const Wrapper = styled.div`  
  margin: 0px 0 0 25px; 
  padding: 5px 10px ;
  display: flex;
  align-items:center; 
  color: black;
  font-size: 15px;
  font-weight: normal; 

  &:hover {     
   color: gray;  
  }
`;

const Input = styled.input`
    margin-right: 15px;
`;

export default CheckBox;