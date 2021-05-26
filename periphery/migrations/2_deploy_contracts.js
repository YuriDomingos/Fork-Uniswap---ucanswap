/*
@Autor : Yuri Domingos
Data   : 25 - 05 - 2021


*/
const Router = artifacts.require("UniswapV2Router02.sol");
const WETH   = artifacts.require("WETH.sol"); 

module.exports = async function (deployer, network) {

    let weth;
    const FACTORY_ADDRESS ='
    0xe7C4C1f3881c475B7BAcdF15DAc1dCe59B5173d7';
  
    if ( network === 'mainnet')
    {
        weth = await WETH.at('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');
    }
    else
    {
        await deployer.deploy(WETH);
        weth = await WETH.deployed();

    }

    await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
};

