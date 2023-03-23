import { ethers } from "hardhat";


async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const unlockTime = currentTimestampInSeconds + 60;

  // const lockedAmount = ethers.utils.parseEther("0.001");

  const ERC20 = await ethers.getContractFactory("ERC20");
  const erc20 = await ERC20.deploy("Hello","HEL");

  await erc20.deployed();

  console.log("ERC20 deployed to: " ,erc20.address)

  // console.log(
  //   `Lock with ${ethers.utils.formatEther(lockedAmount)}ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  // );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
