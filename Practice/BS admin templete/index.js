var arr = ['jay',true,1999];
var num  = Array(1,2,3,4,5,6,7,8,9,10);
var meargeArray = num.concat(arr);

// console.log(meargeArray.pop()); // remove last value from array and return thar element

// console.log(meargeArray.push('jay')); // add value in array and return length of array

// console.log(meargeArray.reverse()); //reverse the array

// console.log(meargeArray);



var person= {
    firstName: "Jack",
    lastName: "Smith",
    fullName: function () {
       return this.firstName + "   " + this.lastName;        
    }
};

// let fun = person.fullName() + "\n "+ person['lastName']; // we can fetch value or function like this

// console.log(fun);

 