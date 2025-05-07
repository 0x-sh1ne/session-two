//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract ContractOne {
    uint256 balance;
    address owner;
    mapping(string => uint256) accounts;

    constructor() {
        balance = 10000;
        owner = address(0);
        accounts["TheBlokc"] = 99;
        accounts["jp"] = 231;

        console.log("balance is", balance);
        console.log("owner is", owner);
        console.log("accounts are", accounts["TheBlokc"]);
        console.log("accounts are", accounts["jp"]);

    }
}
