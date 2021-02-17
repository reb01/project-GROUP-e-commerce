export const priceRadioButtonData = [      
    {
        id:'0',  
        value: 'default',     
        label: 'all prices',
        name: 'price',
        isDefault: true
    },
    {
        id:'1',  
        value: 'price[lte]=30',    
        label: 'under $30',
        name: 'price',
        isDefault: false
    },
    {
        id:'2',  
        value: 'price[gte]=30&price[lte]=60',    
        label: '$30 - $60',
        name: 'price',
        isDefault: false
    },
    {
        id:'3',  
        value: 'price[gte]=60&price[lte]=100',    
        label: '$60 - $100',
        name: 'price',
        isDefault: false
    },
    {
        id:'4',  
        value: 'price[gte]=100&price[lte]=200',    
        label: '$100 - $200',
        name: 'price',
        isDefault: false
    },
    {
        id:'5',  
        value: 'price[gte]=200&price[lte]=300',    
        label: '$200 - $300',
        name: 'price',
        isDefault: false
    },
    {
        id:'6',  
        value: 'price[gte]=300&price[lte]=400',    
        label: '$300 - $400',
        name: 'price',
        isDefault: false
    },
    {
        id:'7',  
        value: 'price[gte]=400',    
        label: 'over $400',
        name: 'price',
        isDefault: false
    }
  
];

export const TitleStore = {
    allProducts: 'All Products',
    entertainment: 'Entertainment',
    fitness: 'Fitness',
    lifestyle: 'Lifestyle',
    gaming: 'Gaming',
    industrial: 'Industrial',
    medical: 'Medical',
    petsandanimals: 'Pets And Animals'
};