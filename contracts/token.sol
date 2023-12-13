//SPDX-License-Identifier: Unlicense

// created erc-20 token about - 9:05 in the smoke test video

//always declare the version 1st
pragma solidity ^0.8.0;

import "hardhat/console.sol";

// then name your contract - State variable, belongs to the contracts state, written to BC
contract Token {
    string public name;
    string public symbol;
    uint256 public decimals = 18;
    uint256 public totalSupply;
    // same as uint256 public totalSupply = 1000000 * (10**decimals); //same as 1,000,000 X 10^18;

    constructor(string memory _name, string memory _symbol, uint256 _totalSupply){
        name = _name;
        symbol = _symbol;
        totalSupply = _totalSupply * (10**decimals);
    }
}
// save with a space at the end of file
