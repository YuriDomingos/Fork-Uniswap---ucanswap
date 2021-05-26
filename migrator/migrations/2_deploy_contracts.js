
const BonusToken = artifacts.require("BonusToken.sol");
const LiquidityMigrator = artifacts.require('LiquidityMigrator.sol');


module.exports = function (deployer)
{
    await deployer.deploy(BonusToken);
    const bonusToken = await BonusToken.deployed();

    const routerAddress = '';
    const pairAddress = '';
    const routerForkAddress = '';
    const pairForkAddress = '';

 
    await deployer.deploy(

        LiquidityMigrator,
          outerAddress ,
          pairAddress ,
         routerForkAddress,
         pairForkAddress

    );

    const LiquidityMigrator = await LiquidityMigrator.deployed();
};