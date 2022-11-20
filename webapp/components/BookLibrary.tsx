import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import useLibraryContract from "../hooks/useLibraryContract";

type LibraryContract = {
  contractAddress: string;
  loading: any;
  sharedObject: any;
};

export enum Leader {
  UNKNOWN,
  BIDEN,
  TRUMP
}

const BookLibrary = ({ contractAddress, loading, sharedObject }: LibraryContract) => {
  const { account, library } = useWeb3React<Web3Provider>();
  const libraryContract = useLibraryContract(contractAddress);
  const [title, setTitle] = useState<string | undefined>();
  const [copies, setCopies] = useState<number | undefined>();

  useEffect(() => {
    // getCurrentLeader();
  }, [])

  const titleInput = (input) => {
    setTitle(input.target.value)
  }

  const copiesInput = (input) => {
    setCopies(input.target.value)
  }

  const addBook = async () => {
    const tx = await libraryContract.addBook(title, copies);
    loading(true);
    await tx.wait();
    resetForm();
  }

  const resetForm = async () => {
    sharedObject.bookList && sharedObject.bookList.showBooks();
    loading(false);
    setTitle('');
    setCopies(0);
  }

  return (
    <div className="results-form">
      <form>
        <label>
          Title:
          <input onChange={titleInput} value={title} type="text" name="title" />
        </label>
        <label>
          Copies:
          <input onChange={copiesInput} value={copies} type="number" name="copies" />
        </label>
      </form>
      <div className="button-wrapper">
        <button onClick={addBook}>Add book</button>
      </div>
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

export default BookLibrary;
