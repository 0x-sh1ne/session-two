//SPDX-LICENSE-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract SimpleStorage {
    //State Variables
    uint256 public count;
    string public words;

    function setValues(string memory _text, uint256  _number) public {
        count = _number;
        words = _text;
    }

    function getValuefcount() external view returns (uint256) {
        return count;
    }

    function getValuefwords() external view returns (string memory) {
        return words;
    }


}