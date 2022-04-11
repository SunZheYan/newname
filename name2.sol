pragma solidity >=0.4.24;

contract NameContract {

    uint public name = 45;

    function getName() public view returns (uint)
    {
        return name;
    }

    function setName(uint newName) public
    {
        name = newName;
    }

}