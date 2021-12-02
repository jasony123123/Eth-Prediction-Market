async function main() {
    const Oracle1 = await ethers.getContractFactory("Oracle1");
 
    // Start deployment, returning a promise that resolves to a contract object
    const promise_Oracle1 = await Oracle1.deploy(2, "0x8d3A49aB69357775593c5b11555eB7Ab822DD2c2", 
        "0x8d3A49aB69357775593c5b11555eB7Ab822DD2c2", 
        "0x8d3A49aB69357775593c5b11555eB7Ab822DD2c2", 
        "0x8d3A49aB69357775593c5b11555eB7Ab822DD2c2");
    console.log("Contract deployed to address:", promise_Oracle1.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });

// Contract deployed to address: 0x52dDAF1B3D014Da8b7A261Ee3091E9206b943AE0