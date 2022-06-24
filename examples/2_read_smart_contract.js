const { ethers } = require("ethers");

const INFURA_ID = '6b7326134b194ca18b106fdc8bc8fb1a'
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const ERC20_ABI = [
    "function name() view returns (string)",
    "function owner() view returns (address)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
];

const address = '0xdAC17F958D2ee523a2206206994597C13D831ec7' // DAI Contract
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
    const name = await contract.name()
    const owner = await contract.owner()
    const totalSupply = await contract.totalSupply()

    console.log(`\nReading from ${address}\n`)
    console.log(`Name: ${name}`)
    console.log(`owner: ${owner}`)
    console.log(`Total Supply: ${totalSupply}\n`)

    const balance = await contract.balanceOf('0x2b456255cd9820b1c471b1c80cc46AcCe8EB5acA')

    console.log(`Balance Returned: ${balance}`)
    console.log(`Balance Formatted: ${ethers.utils.formatEther(balance)}\n`)
}

main()
