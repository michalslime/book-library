const hre = require("hardhat");

const BookLibrary = require('../artifacts/contracts/Library.sol/Library.json')

const run = async function () {
    // first you need to run local node:
    // npx hardhat node
    // then deploy contract on local node:
    // npx hardhat run --network localhost scripts/deploy.js
    // copy contract address and use it point (1)
    // run: node interact.js
    const provider = new hre.ethers.providers.JsonRpcProvider("http://localhost:8545")

    const latestBlock = await provider.getBlock("latest")
    console.log(latestBlock.hash)
    const wallet = new hre.ethers.Wallet("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", provider);
    const balance = await wallet.getBalance();
    console.log(hre.ethers.utils.formatEther(balance, 18))

    // (1)
    const contractAddress = "0xBdB9781ac0DF33926C7F413A26322F4026462686"
    const libraryContract = new hre.ethers.Contract(contractAddress, BookLibrary.abi, wallet)
    // console.log(libraryContract)

    const txAddBook = await libraryContract.addBook("Title 1", 5);
    const txAddBookReceipt = await txAddBook.wait();
    if (txAddBookReceipt.status != 1) { // 1 means success
        console.log("Transaction was not successful")
        return
    }

    const txAddBook2 = await libraryContract.addBook("Title 2", 1);
    const txAddBookReceipt2 = await txAddBook2.wait();
    if (txAddBookReceipt2.status != 1) { // 1 means success
        console.log("Transaction was not successful")
        return
    }

    const availableBooks = await libraryContract.getAllAvailableBooks()
    console.log("Available books: ", JSON.stringify(availableBooks));

    // why console logs from contract dont show up here? In tests they are appearing
    const txBorrowBook = await libraryContract.borrowBook(1)
    const txBorrowBookReceipt = await txBorrowBook.wait();
    if (txBorrowBookReceipt.status != 1) { // 1 means success 
        console.log("Transaction was not successful")
        return
    }

    const bookDetail = await libraryContract.getBookDetail(1)
    console.log("Book details: ", JSON.stringify(bookDetail));

    const txReturnBook = await libraryContract.returnBook(1)
    const txReturnBookReceipt = await txReturnBook.wait();
    if (txReturnBookReceipt.status != 1) { // 1 means success
        console.log("Transaction was not successful")
        return
    }

    const availableBooks2 = await libraryContract.getAllAvailableBooks()
    console.log("Available books2: ", JSON.stringify(availableBooks2));
}

run()

