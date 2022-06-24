const { ethers } = require("ethers");

const INFURA_ID = ''
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const address = '0x436529019aE6B79e2389085cbB6ca1FD772f2fbD' //random account address 
// checking the balance of above account

const main = async () => {
    const balance = await provider.getBalance(address) // function to get balance
    console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
    // ethers.utils.formatEther() function is used to format the ether
    // for example  if your account have some ether. let say,
    // without function it will show  1000000000000000000x
    // with function 10.00000000000000000x
}

main()

