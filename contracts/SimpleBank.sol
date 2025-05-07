//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract SimpleBank {
    mapping(address => uint256) public balances;

    function setBalance(uint amount) public {
        balances[msg.sender] = amount;
    }

    function getBalance() public view returns (uint256) {
        return balances[msg.sender];
    }

    function increaseBalance(uint amount) public {
        balances[msg.sender] += amount;
    }

    function decreaseBalance(uint amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
    }
}