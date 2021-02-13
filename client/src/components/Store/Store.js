
import React, { useState, useEffect, useCallback } from "react";

import { COLORS } from "../../constants";
import styled from "styled-components";
import StoreItem from './StoreItem'
import SideBar from './SideBar';
import Spinner from '../Tools/Spinner';
import ErrorPage from "../ErrorPage";
import Dropdown from './Dropdown';
import { useParams } from "react-router-dom";

const Store = () => {
  const [storeItems, setStoreItems] = useState([]);
  const [status, setStatus] = useState("idle");
  const [sort, setSort] = useState("default");
  const { criteria, type } = useParams();

  const handleSortSelect = (ev) => {  
      ev.preventDefault(); 
      setSort(ev.target.value);
  };

  const createTitle = ()=>{    
    let typeNewStyle = type.charAt(0).toUpperCase() + type.slice(1);
    if (type === 'all')
      typeNewStyle = 'All Products';
    if (type === 'petsandanimals')
      typeNewStyle = 'Pets and Animals';
    return typeNewStyle;
  }

  const createFetchEndPoint = useCallback(() =>{
    let text = criteria === 'products' ? '/items': `/items/group/${criteria}/${type}`;
    if (sort === 'priceLowHigh')
      text += '?sort_by=price&order_by=asc';
    if (sort === 'priceHighLow')
      text += '?sort_by=price&order_by=desc';
    return text;
  }, [criteria, type, sort]);

  useEffect(() => {
    setStatus("loading");
    const text = createFetchEndPoint();
    fetch(text)
      .then((res) => res.json())
      .then((json) => {
        const { status, data} = json;     
        if (status === 200) {          
          setStoreItems([...data]);
          setStatus("idle");
        } else {
          setStatus("error");
        }
      })
      .catch(() => {
        setStatus("error");
      });
  }, [createFetchEndPoint]);


  if (status=== "error"){
    return (
      <ErrorPage />
    );
  };

  return (
    <Wrapper>  
      <SideBar/>
      <RightWrapper>
        <Title><i>{createTitle()}</i></Title>
        <Dropdown handleSortSelect={handleSortSelect} />         
        {status === "loading" && <Spinner />}  
        {status === "idle" && (        
          <ItemsWrapper>
            {storeItems.map((item) => {
              return <StoreItem key={item._id} item={item} />;
            })}
          </ItemsWrapper>         
      )}
     </RightWrapper> 
   </Wrapper>  
  )}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  border-style: solid;
  border-width: 1px;
  border-color: gray;
  min-height: 665px;
  padding: 40px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0px;   
  }
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  width: 100%;  
`;

const ItemsWrapper = styled.div`
  display: flex;   
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 20px 0px;
  width: 100%;
`;

const Title = styled.p`
 margin: 0 30px;
 font-size: 90px;
 font-family: 'Open Sans Condensed', sans-serif;
 color: ${COLORS.lightGreen};
 text-shadow: 3px 3px lightgray;

 @media (max-width: 940px) {
  font-size: 56px;
 }

`;

export default Store;