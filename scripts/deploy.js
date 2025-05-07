// const hre = require("hardhat");

// async function main() {
//     const currentTimeStamp = Math.floor(Date.now() / 1000);
//     const unlockTime = currentTimeStamp + 100; // 30 days from now
//     const lockedAmount = hre.ethers.parseEther("0.0001"); // 0.001 ETH
//     const lock = await hre.ethers.deployContract("Lock", [unlockTime], {
//         value: lockedAmount,
//     })

//     await lock.waitForDeployment();

//     console.log(`Lock with ${hre.ethers.formatEther(lockedAmount)} ETH deployed to ${lock.target}`);

// }

// main().catch((error) => {
//     console.error(error);
//     process.exitCode = 1;
// });

const hre = require("hardhat");

async function main() {
    const contract = await hre.ethers.deployContract("SimpleBank"); //Contract.sol contract name + yung tinatanggap nyang parameter sa constructor'

    await contract.waitForDeployment();

    console.log(`Deployed to ${contract.target}`); // backticks used 
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});


