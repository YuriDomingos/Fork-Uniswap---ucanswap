pragma solidity = 0.5.16;

import '@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract Token2 is ERC20Detailed, ERC20 {
    constructor() ERC20Detailed('UCANCOIN2', 'UC2', 18) public {

    }
}
