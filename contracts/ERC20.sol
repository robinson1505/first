// SPDX-License-Identifier:MIT
pragma solidity ^0.8.9;

contract ERC20 {
    uint256 public totalSupply;
    string public name;
    string public symbol;
    mapping(address => uint256) public balancesOf;
    mapping(address => mapping(address => uint256)) public allowance;

    constructor(string memory name_, string memory symbol_) {
        name = name_;
        symbol = symbol_;
        _mint(msg.sender, 100e18);
    }

    function decimals() external pure returns (uint8) {
        return 18;
    }

    // Transfer Function
    function transfer(
        address recipient,
        uint256 amount
    ) external returns (bool) {
        return _transfer(msg.sender, recipient, amount);
    }

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool) {
uint256 currentAllownce =allowance[sender][msg.sender];
require (currentAllownce >= amount,"ERC20: tranfer amount exceeds allowance");

// update the allowance mapping

allowance[sender][msg.sender] = currentAllownce -amount;

        return _transfer(sender, recipient, amount);
    }
function approve(address spender, uint256 amount) external returns(bool){
   require(spender != address(0), "ERC20: approved to the zero address");  
   allowance[msg.sender][spender] = amount;

   return true;
}



    // Transfer Function
    function _transfer(
        address sender,
        address recipient,
        uint256 amount
    ) private returns (bool) {
        require(recipient != address(0), "ERC20:transfer to the zero address");

        uint256 senderBalance = balancesOf[sender];

        require(
            senderBalance >= amount,
            "ERC20:transfer amount exceed the balance"
        );

        balancesOf[sender] = senderBalance - amount;
        balancesOf[recipient] += amount;
        return true;
    }
function _mint(address to, uint256 amount) internal{
      require(to != address(0), "ERC20:mint to the zero address");

      totalSupply += amount;
      balancesOf[to] += amount;

}

}
