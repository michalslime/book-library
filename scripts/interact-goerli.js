const hre = require("hardhat");

const BookLibrary = require('../artifacts/contracts/Library.sol/Library.json')

const run = async function () {
    const provider = new hre.ethers.providers.InfuraProvider("goerli", "7c4090b24e6f458bbb026743f6140e1e")

    const latestBlock = await provider.getBlock("latest")
    console.log(latestBlock.hash)
    const wallet = new hre.ethers.Wallet("dbcfe59c3d94960e994afec103b4fc752c700d12209fb19f9a9a22d294105cd2", provider); // Private key!
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

