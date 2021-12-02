async function main() {
    const PredictionMarket = await ethers.getContractFactory("PredictionMarket");
 
    // Start deployment, returning a promise that resolves to a contract object
    const promise_PredictionMarket = await PredictionMarket.deploy("0x52dDAF1B3D014Da8b7A261Ee3091E9206b943AE0")
    console.log("Contract deployed to address:", promise_PredictionMarket.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });

// Contract deployed to address: 0x5a2eD53Bf123E824b1559E514Dd7009Bf14add46