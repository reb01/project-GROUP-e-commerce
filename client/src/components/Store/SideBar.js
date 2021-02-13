import React, { useState } from 'react';
import styled, { keyframes, css }  from 'styled-components';
import { NavLink } from "react-router-dom";
import {
    FiMinus,
    FiPlus
  } from "react-icons/fi";

import { COLORS } from "../../constants";

const SideBar = ()=>{
    const [categoryHidden, setCategoryHidden] = useState(false);
    const [locationHidden, setLocationHidden] = useState(true);
   
    const handleClickCategory = (ev)=>{       
        ev.preventDefault();  
        setCategoryHidden(!categoryHidden);  
    };

    const handleClickLocation = (ev)=>{       
        ev.preventDefault();  
        setLocationHidden(!locationHidden);  

    };

    return (
        <>
        <Wrapper>  
              
        <NavBar >            
            <NavigationLink exact to="/store/products/all" activeClassName='active'>All products</NavigationLink> 
            <Divider/>          
            <TitleWrapper>
                <Title>BY CATEGORY</Title>
                <Button onClick={((ev)=>(handleClickCategory(ev)))}>
                    {categoryHidden ? <FiPlus color='grey' size={20}/> : <FiMinus color='grey' size={20}/>}
                    </Button>
            </TitleWrapper>
            <SectionWrapper className={categoryHidden && 'expanded'} >
                <NavigationLink exact to={`/store/category/entertainment`} activeClassName='active' >Entertainment</NavigationLink>
                <NavigationLink exact to="/store/category/fitness" activeClassName='active'>Fitness</NavigationLink>
                <NavigationLink exact to="/store/category/lifestyle" activeClassName='active'>Lifestyle</NavigationLink>
                <NavigationLink exact to="/store/category/gaming" activeClassName='active'>Gaming</NavigationLink>
                <NavigationLink exact to="/store/category/industrial" activeClassName='active'>Industrial</NavigationLink>
                <NavigationLink exact to="/store/category/medical" activeClassName='active'>Medical</NavigationLink>
                <NavigationLink exact to="/store/category/petsandanimals" activeClassName='active'>Pets and Animals</NavigationLink>
            </SectionWrapper>   
            <Divider/>       
            <TitleWrapper>
                <Title>BY BODY LOCATION</Title>
                <Button onClick={((ev)=>(handleClickLocation(ev)))}>
                    {locationHidden ? <FiPlus color='grey' size={20}/> : <FiMinus color='grey' size={20}/>}
                    </Button>
            </TitleWrapper>
            <SectionWrapper className={locationHidden && 'expanded'} >
                <NavigationLink exact to={`/store/body_location/arms`} activeClassName='active' >Arms</NavigationLink>
                <NavigationLink exact to="/store/body_location/chest" activeClassName='active'>Chest</NavigationLink>
                <NavigationLink exact to="/store/body_location/feet" activeClassName='active'>Feet</NavigationLink>
                <NavigationLink exact to="/store/body_location/hands" activeClassName='active'>Hands</NavigationLink>
                <NavigationLink exact to="/store/body_location/head" activeClassName='active'>Head</NavigationLink>
                <NavigationLink exact to="/store/body_location/neck" activeClassName='active'>Neck</NavigationLink>
                <NavigationLink exact to="/store/body_location/torso" activeClassName='active'>Torso</NavigationLink>
                <NavigationLink exact to="/store/body_location/waist" activeClassName='active'>Waist</NavigationLink>
                <NavigationLink exact to="/store/body_location/wrist" activeClassName='active'>Wrist</NavigationLink>
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
   @media (max-width: 940px) {
     min-width: 260px;   
 } 
 @media (max-width: 768px) {
    margin-top: 0; 
 } 
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
    transition: max-height 0.45s ease-in-out;

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