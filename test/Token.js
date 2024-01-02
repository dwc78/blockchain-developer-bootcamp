const {expect} = require('chai');
const {ethers} = require('hardhat');
//above state pulls in ethers from HH & Chai libraries

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe('Token', () => {
    // tests go inside here, "token" is calling the token.sol
    let token
    let accounts
    let deployer

    beforeEach(async () => {
        //code get executed here that get executed before each...
         
        const Token = await ethers.getContractFactory('Token')
        token = await Token.deploy('Tesla Dave', 'ROCKETCAR', '1000000')

        accounts = await ethers.getSigners()
        deployer = accounts[0]
})

describe('Deployment', () => {
    const name = 'Tesla Dave'
    const symbol = 'ROCKETCAR'
    const decimals = '18'
    const totalSupply = tokens('1000000')

    //create containing function - add async
    it('has correct name', async () => {
    //Check that token name is correct - use Chai matchers here...
    expect(await token.name()).to.equal(name)
    })
    
    it ('has correct symbol', async () => {
    //Check that token symbol is correct - use Chai matchers here...
    expect(await token.symbol()).to.equal(symbol)
    })
    
    it('has correct decimals', async () => {
    //Check that token decimal count is correct - use Chai matchers here...
    expect (await token.decimals()).to.equal(decimals)
    })
    
    it ('has correct total Supply', async () => {
    //Check that token total supply count is correct - use Chai matchers here...
    expect(await token.totalSupply()).to.equal(totalSupply)
    })

    it ('assigns total Supply to Deployer', async () => {
    //Check that token total supply count is correct - use Chai matchers here...
    // console.log(deployer.address)
    expect(await token.balanceOf(deployer.address)).to.equal(totalSupply)

    })
})
})
