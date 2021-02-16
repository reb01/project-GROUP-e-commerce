import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { requestStoreInfo, receiveStoreInfo, receiveStoreInfoError } from "../../actions";
import { TitleStore } from './Utilities';
import { COLORS } from "../../constants";
import styled from "styled-components";
import StoreItem from './StoreItem'
import SideBar from './SideBar';
import Spinner from '../Tools/Spinner';
import ErrorPage from "../ErrorPage";
import Dropdown from './Dropdown';


const Store = () => {   
  const {currentStore , status, sort, filters:{price, body_location} } = useSelector((state)=>state.store);  
  const { category } = useParams();  
  const dispatch = useDispatch(); 

   const createFetchEndPoint = useCallback(() =>{
    let text = category === 'allProducts' ? '/items?': `/items/categories/${category}?`;
    if (sort !== 'default')
      text += 'sort_by=' + sort;    
    if (price.value !== 'default'){
      text += '&' + price.value; 
    }
    Object.values(body_location).forEach((item)=>{
      if (item.isChecked)
        text += `&body_location[]=${item.value}`;  
    });   
   
    return text;  
  }, [category, sort, price, body_location]);  

  useEffect(() => {   
    dispatch(requestStoreInfo());
    const text = createFetchEndPoint(); 
    fetch(text)
      .then((res) => res.json())
      .then((json) => {
        const { status, data, message} = json;     
        if (status === 200) {           
          dispatch(receiveStoreInfo(data));
        } else {         
          dispatch(receiveStoreInfoError(message));
        }
      })
      .catch((e) => {       
        dispatch(receiveStoreInfoError(e));
      });
  }, [createFetchEndPoint]);


  if (status=== "error"){
    return (
      <ErrorPage />
    );
  };

  return (
    <Wrapper>  
      <SideBar />
      <RightWrapper>
        <Title><i>{TitleStore[category]}</i></Title>
        <Dropdown />         
        {status === "loading" && <Spinner />}  
        {status === "idle" && (        
          <ItemsWrapper>
            {currentStore.store.map((item) => {
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
  box-sizing:border-box;
  margin: 0 30px;
  font-size: 90px;
  font-family: 'Open Sans Condensed', sans-serif;
  color: ${COLORS.lightGreen};
  text-shadow: 3px 3px lightgray;
  min-height: 122px;

  @media (max-width: 940px) {
    font-size: 56px;
    min-height: 76px;
  }
  `;

export default Store;