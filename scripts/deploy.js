const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.provider.getBalance(deployer.address);

    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Account balance: ", accountBalance.toString());

    const runContractFactory = await hre.ethers.getContractFactory("runtime");
    const runContract = await runContractFactory.deploy();
    await runContract.waitForDeployment();

    console.log("runtime address: ", await runContract.getAddress());
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();
