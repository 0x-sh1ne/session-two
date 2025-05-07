//SPDX-LICENSE-Identifier: UNLICENSED
pragma solidity ^0.8.0;


contract structsExample {
    // Declaring a struct
    struct Person {
        uint256 height;
        string name;
        uint256 age;
    }

    Person public person1; //creating a struct object

    constructor() {    //pwedeng wala itong constructor, basta hindi nag revert hahhaha
        person1 = Person(0, "none", 0); //initializing the struct object with default values (placeholder value para di sya magreturn)
    }
    
    // Person public person1; //calling a struct, name ng struct then public next is NewName

    function setPersonData(uint256 setHeight, string memory setName, uint256 setAge) public {
        person1 = Person(setHeight, setName, setAge); //setting the values of the struct
    }
    
    function getPersonData() public view returns (uint256, string memory, uint256) {
        return (person1.height, person1.name, person1.age); //getting the values of the struct
    }


}