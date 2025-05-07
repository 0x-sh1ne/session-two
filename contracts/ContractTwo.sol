//SPDX-LICENSE-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract ContractTwo{
    uint256 balance = 2;

    constructor(uint256 deposit) {
        console.log("1. balance is now", balance);
        balance += deposit;
        console.log("2. balance is now", balance);
    }
}