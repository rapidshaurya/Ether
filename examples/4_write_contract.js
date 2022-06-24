const { ethers } = require("ethers");

const INFURA_ID = ''
const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${INFURA_ID}`)
// using Kovan Testnet Network to create test account

const account1 =  '' // senders account address 1
const account2 ='' // receiver account address 2(taking random account)

const privateKey1 = '' // Private key of account 1(sender's account)
const wallet = new ethers.Wallet(privateKey1, provider)

const ERC20_ABI = [
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount) returns (bool)",
]; // using smart contract functions for reading and sending ether 
// this abi inherit two function of smart contract 
const address = '0xa36085F69e2889c224210F603D836748e7dC0088'
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
    const balance = await contract.balanceOf(account1) // for reading balance from smart contract

    console.log(`\nReading from ${address}\n`)
    console.log(`Balance of sender: ${balance}\n`)

    const contractWithWallet = contract.connect(wallet)

    const tx = await contractWithWallet.transfer(account2, balance) // transfer total link of account to account 2
    await tx.wait()

    console.log(tx)

    const balanceOfSender = await contract.balanceOf(account1)  // for reading balance from smart contract

    const balanceOfReciever = await contract.balanceOf(account2) // for reading balance from smart contract

    console.log(`\nBalance of sender: ${balanceOfSender}`)
    console.log(`Balance of reciever: ${balanceOfReciever}\n`)
}

main()