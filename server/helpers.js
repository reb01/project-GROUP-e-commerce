const compareAscPrice = (a, b) =>{  
    return parseFloat(a.price.replace(/[$,]/g,"")) - parseFloat(b.price.replace(/[$,]/g,""));
  };
  
  const compareDescPrice = (a, b) =>{
    return parseFloat(b.price.replace(/[$,]/g,"")) - parseFloat(a.price.replace(/[$,]/g,""));
  };
  
  const sortAndFilter = (itemsArray, sortBy, priceFilter) =>{
    let filterItemsArray = itemsArray;
    if (sortBy === '+price') {
      itemsArray.sort(compareAscPrice);      
    }
    if (sortBy === '-price') {
      itemsArray.sort(compareDescPrice);      
    }
    if (priceFilter) {
      const gte = priceFilter.gte ? priceFilter.gte : 0;
      const lte = priceFilter.lte ? priceFilter.lte : Number.MAX_SAFE_INTEGER;
      filterItemsArray = itemsArray.filter((item)=>{  
          return parseFloat(item.price.replace(/[$,]/g,"")) >= gte &&  parseFloat(item.price.replace(/[$,]/g,"")) < lte; 
        });
    }
    return filterItemsArray;  
  };

  module.exports = {
    sortAndFilter,
    compareAscPrice,
    compareDescPrice
  };
  