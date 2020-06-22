/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
//function objectProperties(someObj){}
 
    function emp(id,name, age, salary){
    
        this.id = id
        this.name= name
        this.age = age
        this.salary = salary
        
    }
    
    
    let empInfo = new emp('112', 'john', 34, 27000)
    console.log(empInfo);
    
    let empDetail= new emp('113', 'Marry', 29, 500000)
    console.log(empDetail);
    
    

