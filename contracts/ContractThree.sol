//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract functionExercise {
    uint256 balance = 0;

    constructor(uint256 initialBalance) {
        balance = initialBalance;
    
    }

    function addBalance(uint256 toAdd) public {
        balance += toAdd;
    }

    function getBalance() public view returns (uint256) {
        return balance;
    }

    function calculator(uint node, uint amount) public {
        if (node == 1) {
            balance += amount;
        }
        
        else if (node == 2) {
            balance -= amount;
        }
        
        else if (node == 3) {
            balance *= amount;
        }
        
        else if (node == 4) {
            // require(amount != 0, "Cannot divide by zero");
            balance /= amount;
        }
        
        // else {
        //     revert("Invalid node value");
        // }
    }
}