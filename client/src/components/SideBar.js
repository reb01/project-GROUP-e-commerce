import React, { useState } from 'react';
import styled, { keyframes, css }  from 'styled-components';
import { NavLink } from "react-router-dom";
import {
    FiMinus,
    FiPlus
  } from "react-icons/fi";

import { COLORS } from "../constants";

const SideBar = ()=>{
    const [categoryHidden, setCategoryHidden] = useState(false);
   
    const handleClick = (ev)=>{       
        ev.preventDefault();  
        setCategoryHidden(!categoryHidden);  

    };

    return (
        <>
        <Wrapper>  
              
        <NavBar >            
            <NavigationLink exact to="/store" activeClassName='active'>All store products</NavigationLink> 
            <Divider/>          
            <TitleWrapper>
                <Title>BY CATEGORY</Title>
                <Button onClick={((ev)=>(handleClick(ev)))}>
                    {categoryHidden ? <FiPlus color='grey' size={20}/> : <FiMinus color='grey' size={20}/>}
                    </Button>
            </TitleWrapper>
            <SectionWrapper className={categoryHidden && 'expanded'} >
                <NavigationLink exact to={`/store/entertainment`} activeClassName='active' >Entertainment</NavigationLink>
                <NavigationLink exact to="/store/fitness" activeClassName='active'>Fitness</NavigationLink>
                <NavigationLink exact to="/store/gaming" activeClassName='active'>Gaming</NavigationLink>
                <NavigationLink exact to="/store/industrial" activeClassName='active'>Industrial</NavigationLink>
                <NavigationLink exact to="/store/medical" activeClassName='active'>Medical</NavigationLink>
                <NavigationLink exact to="/store/petsandanimals" activeClassName='active'>Pets and Animals</NavigationLink>
            </SectionWrapper>   
            <Divider/>         
        </NavBar >        
        </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
   margin: 20px 20px;
   min-width: 340px;
   box-sizing:border-box;   
`;

const NavBar = styled.nav`
   display: flex;
   flex-direction: column; 
   font-weight: bold;
   margin-top: 7px;  
`;

const Divider = styled.div`
 border-top: solid 1px #E8E8E8;
 margin-top: 5px;
`;
const SectionWrapper = styled.div`  
    max-height: 400px;
    overflow: hidden;   
    transition: max-height 0.3s ease-in-out;

  &.expanded { 
   max-height: 0px;
}
`;

const NavigationLink = styled(NavLink)`
  /* default styles here */
  text-decoration: none;
  margin: 0px 0 0 25px; 
  padding: 7px 10px ;
  display: flex;
  align-items:center; 
  color: black;
  font-size: 15px;
  font-weight: normal; 
 
  &.active {
    background-color: ${COLORS.fourth};
  }

  &:hover {     
   color: gray;  
  }
`;

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
   // border-top: solid 1px #E8E8E8;
    margin-top: 5px;
`;
const Title = styled.p`
    padding: 0px 0 5px 0;
    margin: 5px 0 0 0;
    
`;

const Button = styled.button`    
    border: none;   
    background-color: white;

    :hover:enabled {   
        cursor: pointer;
        opacity: 0.7;         
    }

    :focus,
    :active {
        outline: none;
    }
  
`;
export default SideBar;