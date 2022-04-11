pragma solidity ^0.8.0;
contract name {

    mapping (address => string)  accountname;
    function namein(string _name) public {
        accountname[msg.sender] = _name;
    }
    function whatIsMyNamepublic() public view returns (string) {
  return accountname[msg.sender];
}
    }
    