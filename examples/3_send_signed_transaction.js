const { ethers } = require("ethers");

const INFURA_ID = ''
const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${INFURA_ID}`)
// using Kovan Testnet Network to create test account

const account1 =  '' // senders account address 1
const account2 ='' // receiver account address 2(taking random account)

const privateKey1 = '' // Private key of account 1(sender's account)
const wallet = new ethers.Wallet(privateKey1, provider)

const main = async () => {
    const senderBalanceBefore = await provider.getBalance(account1) // function to get balance
    const recieverBalanceBefore = await provider.getBalance(account2) // function to get balance

    console.log(`\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`)
    console.log(`reciever balance before: ${ethers.utils.formatEther(recieverBalanceBefore)}\n`)

    const tx = await wallet.sendTransaction({
        to: account2,
        value: ethers.utils.parseEther("0.025")
    }) // this functions is to do transaction

    await tx.wait() // waiting till transation get mined
    console.log(tx)

    const senderBalanceAfter = await provider.getBalance(account1) // function to get balance
    const recieverBalanceAfter = await provider.getBalance(account2) // function to get balance

    console.log(`\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`)
    console.log(`reciever balance after: ${ethers.utils.formatEther(recieverBalanceAfter)}\n`)
}

main()