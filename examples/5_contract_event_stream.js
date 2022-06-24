const { ethers } = require("ethers");

const INFURA_ID = ''
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",

    "event Transfer(address indexed from, address indexed to, uint amount)"
]; // this abi inherit functions of smart contract

const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F' // DAI Contract
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
    const block = await provider.getBlockNumber() // provider.getBlockNumber() is use get latest block in the network

    const transferEvents = await contract.queryFilter('Transfer', block - 1, block) // contract.queryFilter() is use to get events between one block to another
    console.log(transferEvents)
}

main()