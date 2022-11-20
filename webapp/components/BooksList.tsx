import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { BigNumber } from "ethers";
import { useEffect, useState } from "react";
import useLibraryContract from "../hooks/useLibraryContract";

type LibraryContract = {
  contractAddress: string;
  loading;
  sharedObject;
};

export enum Leader {
  UNKNOWN,
  BIDEN,
  TRUMP
}

const BooksList = ({ contractAddress, loading, sharedObject }: LibraryContract) => {
  const { account, library } = useWeb3React<Web3Provider>();
  const libraryContract = useLibraryContract(contractAddress);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // getCurrentLeader();
  }, [])

  const showBooks = async () => {
    const books1 = await libraryContract.getAllAvailableBooks();
    loading(true);

    setBooks(arr => []);
    books1.map(async i => {
      console.log(i);
      const bookDetails = await libraryContract.getBookDetail(i);
      
      const bookDetailsHuman = {
        title: bookDetails[0],
        copies: bookDetails[1],
        id: i
      }

      setBooks(arr => [...arr, bookDetailsHuman]);
    });

    loading(false);
    console.log(books);
  }

  const borrowBook = async (id) => {
    const tx = await libraryContract.borrowBook(id);
    loading(true);
    await tx.wait();
    loading(false);
  }

  sharedObject.bookList = {
    showBooks
  }

  return (
    <div className="results-form">
      <div className="button-wrapper">
        <button onClick={showBooks}>Show available books</button>
      </div>   
      <ul>
        {books.map((b, i) => (          
          <li key={i}>{b.title} - {b.copies._hex} copies <button onClick={() => borrowBook(b.id)}>Rent that book</button></li>
        ))}
      </ul>
      <style jsx>{`
        .results-form {
          display: flex;
          flex-direction: column;
        }

        .button-wrapper {
          margin: 20px;
        }
        
      `}</style>
    </div>
  );
};

export default BooksList;
