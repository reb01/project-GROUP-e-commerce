import React, {useState} from 'react';
import styled from 'styled-components';
import { COLORS } from "../constants";
import { Link } from "react-router-dom";

const StoreItem =({id, name, image, price })=>{
    const [hidden, setHidden] = useState(true);

    const handleMouseEnter = ()=>{
        setHidden(false);
    }
    const handleMouseLeave = ()=>{
        setHidden(true);
    }

    const handleClick = (ev)=>{       
        ev.preventDefault();      
    };

    return (
        <StyledLink exact to={`/item/${id}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <Wrapper>
                <ImageWrapper>
                    <Image src={image} alt="itemImage"/>
                    <Button hidden={hidden} onClick={(ev)=>handleClick(ev)}>ADD TO CART</Button>
                </ImageWrapper>
                <Price>{price}</Price>
                <Name>{name}</Name>            
            </Wrapper>
        </StyledLink>
    )

};

const Image  = styled.img`
    width:  200px;
    height: 250px;
    object-fit: contain;
`;

const Wrapper = styled.div`  
    display: flex;
    flex-direction:column;  
    box-sizing: border-box;
    width: 250px;
    height: 420px;
    margin: 10px;
    padding: 10px 15px;
    background-color: ${COLORS.lightGrey};
`;
const ImageWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    background-color: white;
    padding-bottom: 35px;
`;

const Button = styled.button`
    position: absolute;
    border: none;
    border-radius: 15px;
    padding: 10px 20px;
    color: white;
    bottom: 5%;
    background-color: ${COLORS.third};
    display: ${(p)=>p.hidden ? 'none' : 'block'};

    :hover {   
        cursor: pointer;
        opacity: 0.7;    
  }
`;

const Name = styled.p`
    font-size: 13px;  
    margin-top: auto;   
    color: black;
`;

const Price = styled.p`
    font-weight: bold;
    color: ${COLORS.primary};
`;

const StyledLink = styled(Link)`
  text-decoration: none;

`;

export default StoreItem;