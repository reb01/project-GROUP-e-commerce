import React, { useState, useEffect } from "react";
import styled from "styled-components";
import StoreItem from './StoreItem'
import Spinner from './Tools/Spinner'

const Store = () => {
  const [storeItems, setStoreItems] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {   
    setStatus("loading");   
    fetch('/items')
    .then((res) => res.json())
    .then((json) => {
        if(json){        
          console.log([...json.data]);
          setStoreItems([...json.data]);
          setStatus('idle');     
        }        
    })  
    .catch(()=>{
      setStatus('error');
    })     
  } , []);

  return (    
      <Wrapper>
      {status=== "loading" && <Spinner />}
      {status=== "error" && <p>error</p>}
      {status === "idle" &&
        <ItemsWrapper>
         {storeItems.map((item)=>{
          return(<StoreItem 
                    key={item._id}
                    id={item._id}
                    image={item.imageSrc} 
                    name={item.name}
                    price={item.price}
                    />)
        })}
        </ItemsWrapper>    
        } 
      </Wrapper>   
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-width: 1px;
  border-color: gray;   
  min-height: 400px;
`;

const ItemsWrapper = styled.div`  
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default Store;
