// Write a Car class in Javascript that takes the following properties as parameters and sets them in a constructor:
// 1. Make
// 2. Model
// 3. Year
// 4. Color

class Car{
    constructor(make,model,year,color){
        this.make= make;
        this.model=model;
        this.year=year;
        this.color=color;
    }
    //getMake method to get car make 
    getMake  () {
        return Car.make;
        
    }

    // getModel method to get car model 
    getModel(){
        return Car.model;
    }
    
    //getYear mothod to get car Year 
    getYear(){
        return Car.year ;
    }

    // getColor method for car color 
    getColor(){
        return Car.color;
    }

}
// Finally, make sure to add 4 methods (getMake, getModel, getYear, and getColor) that return the car's respective properties
// (This is called a 'getter' in Object Oriented Programming)

// If you're stuck, take a look at the example class here for reference: https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/#
