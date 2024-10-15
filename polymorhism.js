class animals{
    constructor(name){
         this.name = name;
     } 

     sayName(){
         console.log(this.name);
       }
}

class animals extends animals{
   constructor(name, rollNumber){
      super(name);
      this.rollNumber = rollNumber;
  }

      logDetails(){
      console.log(`Name: ${this.name}, Roll
      number: ${this.rollNumber}`)
      }
      
      sayName(){
      console.log("From animals");
      super.sayName();
      }
}
      var dog = new Student("dexteramea", 1);
      dog.logDetails();
      dog.sayName();