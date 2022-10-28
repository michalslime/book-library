import { expect, assert } from "chai";
import { ethers } from "hardhat";
import { Library } from "../typechain-types";
import { BigNumber } from 'ethers';

describe("Library", function () {
    let libraryFactory;
    let library: Library;

    before(async () => {
        libraryFactory = await ethers.getContractFactory("Library");
        library = await libraryFactory.deploy();
        await library.deployed();
        console.log('deployed');
        library.addBook("title", 4); // id: 1
        library.addBook("title2", 5); // id: 2
        library.addBook("another", 1); // id: 3
    });

    it("Should throw on trying to add book with not the owner", async function () {
        const [owner, addr1] = await ethers.getSigners();
        expect(library.connect(addr1).addBook("title", 3)).to.be.revertedWith('Ownable: caller is not the owner');
    });

    it("Should throw on trying to add book existing book", async function () {
        library.addBook("title", 4);
        expect(library.addBook("title", 3)).to.be.revertedWith('Ownable: caller is not the owner');
    });

    it("Should allow to add book", async function () {
        library.addBook("test title", 4);
        const [title, copies] = await library.getBookDetail(await library.bookCount());
        expect(title).to.equal("test title");
    });

    it("Should show history of given book", async function () {
        console.log('yooo');
        const [owner, addr1, addr2, addr3] = await ethers.getSigners();
        
        await library.connect(addr1).borrowBook(1);
        await library.connect(addr1).returnBook(1);
        await library.connect(addr2).borrowBook(1);
        const data = await library.getOwnerHistoryOfBook(1);
        console.log(data[0]);
        expect(data[0]).to.equal(addr1.address);
        expect(data[1]).to.equal(addr2.address);
    });

    it("Should allow to return book detail for given book for everybody", async function () {
        const [title, copies] = await library.getBookDetail(2);
        expect(title).to.equal("title2");
    });

    it("Should return available books", async function () {
        const [, , addr2,] = await ethers.getSigners();
        await library.connect(addr2).borrowBook(3);
        const availableBooks = await library.getAllAvailableBooks();
        expect(availableBooks[0]).to.equal(1);
        expect(availableBooks[1]).to.equal(2);
        expect(availableBooks[2]).to.not.equal(3);
    });

    it("Should let owner to add book copies", async function () {
        const [, copiesBefore] = await library.getBookDetail(1);
        let numberOfCopies: BigNumber = BigNumber.from(5);
        await library.addBookCopies(1, numberOfCopies);
        const [, copiesAfter] = await library.getBookDetail(1);
        expect(copiesBefore.add(numberOfCopies)).to.equal(copiesAfter);
    });
});
