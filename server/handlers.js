const items = require("./data/items");
const companies = require("./data/companies");
const { sortAndFilter } = require("./helpers");


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
  const { sort_by, price, body_location } = req.query;  
 
   //We need to clone the array because we want to keep the original intact and keep our default order.
  // This way of cloning an array is good only with array of JSON data. 
  let clonedItems = JSON.parse(JSON.stringify(items)); 
  //sort and filter the items if needed   
  clonedItems = sortAndFilter(clonedItems, sort_by, price, body_location); 

  res.status(200).json({ status: 200, message: "success", data: clonedItems });       
};

const getCompagnies = (req, res) => {  
  res.status(200).json({ status: 200, message: "success", data: companies });
};

const getItemsCategory = (req, res) => {
    const { category } = req.params;   
    const { sort_by, price, body_location } = req.query; 
    console.log(req.query);
   
    if ( !category)
      return res.status(400).json({ status: 400, message: "unknown category", data: {category} });
  
      //filter the group by criteria and type
    let itemsGroup = items.filter((item)=>{    
          if (item.category)    
            return item.category.toLowerCase().replace(/\s/g, "") === category.toLowerCase();  
          return false;     
    });

    if (itemsGroup.length === 0)
      return res.status(400).json({ status: 400, message: "category not found", data: {category} });
    
    //sort and filter the items if needed
    itemsGroup = sortAndFilter(itemsGroup, sort_by, price, body_location);   
    
    return res.status(200).json({ status: 200, message: "success", data: itemsGroup });  
};


module.exports = {
  getSingleItem,
  getCompanyById,
  getCompagnies,
  getItems,
  getItemsCategory
};
