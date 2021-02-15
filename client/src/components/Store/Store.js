import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { requestStoreInfo, receiveStoreInfo, receiveStoreInfoError } from "../../actions";
import { COLORS } from "../../constants";
import styled from "styled-components";
import StoreItem from './StoreItem'
import SideBar from './SideBar';
import Spinner from '../Tools/Spinner';
import ErrorPage from "../ErrorPage";
import Dropdown from './Dropdown';


const Store = () => {   
  const {currentStore , status, sort, filterPrice } = useSelector((state)=>state.store);
  const { criteria, type } = useParams();  
  const dispatch = useDispatch(); 

  const createTitle = ()=>{    
    if (status !== "idle")
      return "";
    let typeNewStyle = type.charAt(0).toUpperCase() + type.slice(1);
    if (type === 'all')
      typeNewStyle = 'All Products';
    if (type === 'petsandanimals')
      typeNewStyle = 'Pets and Animals';
    return typeNewStyle;
  }

  const createFetchEndPoint = useCallback(() =>{
    let text = criteria === 'products' && type ==="all" ? '/items?': `/items/group/${criteria}/${type}?`;
    if (sort !== 'default')
      text += 'sort_by=' + sort;    
    if (filterPrice.value !== 'default')
      text += '&' + filterPrice.value;  
    return text;  
  }, [criteria, type, sort, filterPrice]);

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
        <Title><i>{createTitle()}</i></Title>
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