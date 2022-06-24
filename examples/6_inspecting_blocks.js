const { ethers } = require("ethers");

const INFURA_ID = ''
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const main = async () => {
    const block = await provider.getBlockNumber() // provider.getBlockNumber() is use get latest block in the network

    console.log(`\nBlock Number: ${block}\n`)

    const blockInfo = await provider.getBlock(block) // this will show you block details with all the transations

    console.log(blockInfo)

    const { transactions } = await provider.getBlockWithTransactions(block) //this store all the transations with details of a block in a variable

    console.log(`\nLogging first transaction in block:\n`) 
    console.log(transactions[0]) // this will show you only one transations detail
}

main()