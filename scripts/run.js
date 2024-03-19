const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const runContractFactory = await hre.ethers.getContractFactory("runtime");
    const runContract = await runContractFactory.deploy();
    await runContract.waitForDeployment();

    console.log("Contract deployed to:", await runContract.getAddress());
    console.log("Contract deployed by:", owner.address);

    let runCount;
    runCount = await runContract.getTotalRuns();
    console.log(Number(runCount));

    let runTxn = await runContract.run(" Ransom Init .");
    await runTxn.wait();

    runTxn = await runContract.connect(randomPerson).run("wagwam.");
    await runTxn.wait();

    let allRuns = await runContract.getAllRuns();
    console.log(allRuns);
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
