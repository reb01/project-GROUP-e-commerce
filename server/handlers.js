// Write functions for GET/POST methods here

const items = require("./data/items");
const companies = require("./data/companies");

const compareAscNumber = (a, b) =>{  
  return parseFloat(a.price.replace(/[$,]/g,"")) - parseFloat(b.price.replace(/[$,]/g,""));
};

const compareDescNumber = (a, b) =>{
  return parseFloat(b.price.replace(/[$,]/g,"")) - parseFloat(a.price.replace(/[$,]/g,""));
};


const getSingleItem = (req, res) => {
  const id = req.params.id;

  const oneItem = items.find((item) => item._id == id);

  if (oneItem) {
    res.status(200).json({ data: oneItem });
  } else {
    res.status(400).json({
      status: 400,
      message: "That item does not exist in the database",
    });
  }
};

const getCompanyById = (req, res) => {
  const id = req.params.id;
  const oneItem = items.find((item) => item._id == id);
  const findCompanyId = oneItem.companyId;
  const findCompany = companies.find((company) => company._id == findCompanyId);
  if (findCompany) {
    res.status(200).json({ data: findCompany });
  } else {
    res.status(400).json({
      status: 400,
      message: "That company does not exist in the database",
    });
  }
};

const getItems = (req, res) => {    
  const { sort_by, order_by } = req.query;  

   //We need to clone the array because we want to keep the original intact and keep our default order.
  // This way of cloning an array is good only with array of JSON data. 
  let clonedItems = JSON.parse(JSON.stringify(items));    
   // Sort the items if needed. 
  if (sort_by === 'price' && order_by === "asc") {
    clonedItems.sort(compareAscNumber);    
  }
  else if (sort_by === 'price' && order_by === "desc") {
    clonedItems.sort(compareDescNumber);    
  }   

  res.status(200).json({ status: 200, message: "success", data: clonedItems });       
};

const getCompagnies = (req, res) => {  
  res.status(200).json({ status: 200, message: "success", data: companies });
};

const getItemsGroup = (req, res) => {
    const { criteria, type } = req.params;   
    const { sort_by, order_by } = req.query;  
    
    if ( !criteria || !type)
      return res.status(400).json({ status: 400, message: "unknown criteria and type", data: {criteria, type} });
  
      //filter the group by criteria and type
    let itemsGroup = items.filter((item)=>{    
          if (item[criteria])    
            return item[criteria].toLowerCase().replace(/\s/g, "") === type.toLowerCase();  
          return false;     
    });
    
    //sort the items if needed
    if (sort_by === 'price' && order_by === "asc") {
      itemsGroup.sort(compareAscNumber);
      console.log('sortAscending');
    }
    else if (sort_by === 'price' && order_by === "desc") {
      itemsGroup.sort(compareDescNumber);
      console.log('sortDescanding');
    }     
    
    return res.status(200).json({ status: 200, message: "success", data: itemsGroup });  
};


module.exports = {
  getSingleItem,
  getCompanyById,
  getCompagnies,
  getItems,
  getItemsGroup
};
