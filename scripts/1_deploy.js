
async function main() {
    // deploy.js created about 31:00 in video
   // fetch contract to deploy
    const Token = await ethers.getContractFactory("Token")
    
   // deploy token contract
   const token = await Token.deploy()
   await token.deployed()
   console.log(`Token Deployed to: ${token.address}`)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  