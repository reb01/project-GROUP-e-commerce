import React from 'react';
import styled from 'styled-components';


const RadioButton = ({ id, value, name, isDefault, handleClick, children })=>{
    return (
        <RadioButtonWrapper>            
            <input type="radio" name={name} id={id} onClick={(ev)=>handleClick(ev, id)} value={value} defaultChecked={isDefault} />
            <Label htmlFor={id}>{children}</Label>         
        </RadioButtonWrapper>  
    );
};

const RadioButtonWrapper = styled.div`  
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

const Label = styled.label`
    margin-left: 15px;
`;

export default RadioButton;