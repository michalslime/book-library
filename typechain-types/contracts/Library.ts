/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface LibraryInterface extends utils.Interface {
  functions: {
    "BookLedger(uint256)": FunctionFragment;
    "addBook(string,uint256)": FunctionFragment;
    "addBookCopies(uint256,uint256)": FunctionFragment;
    "bookCount()": FunctionFragment;
    "borrowBook(uint256)": FunctionFragment;
    "getAllAvailableBooks()": FunctionFragment;
    "getBookDetail(uint256)": FunctionFragment;
    "getOwnerHistoryOfBook(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "returnBook(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "BookLedger"
      | "addBook"
      | "addBookCopies"
      | "bookCount"
      | "borrowBook"
      | "getAllAvailableBooks"
      | "getBookDetail"
      | "getOwnerHistoryOfBook"
      | "owner"
      | "renounceOwnership"
      | "returnBook"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "BookLedger",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "addBook",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "addBookCopies",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "bookCount", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "borrowBook",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllAvailableBooks",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBookDetail",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getOwnerHistoryOfBook",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "returnBook",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "BookLedger", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addBook", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addBookCopies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bookCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "borrowBook", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAllAvailableBooks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBookDetail",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOwnerHistoryOfBook",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "returnBook", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface Library extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LibraryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    BookLedger(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber] & {
        name: string;
        availableCopies: BigNumber;
        ownerCount: BigNumber;
      }
    >;

    addBook(
      _name: PromiseOrValue<string>,
      _copies: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addBookCopies(
      _bookId: PromiseOrValue<BigNumberish>,
      _copies: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    bookCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    borrowBook(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAllAvailableBooks(overrides?: CallOverrides): Promise<[BigNumber[]]>;

    getBookDetail(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    getOwnerHistoryOfBook(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    returnBook(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  BookLedger(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber] & {
      name: string;
      availableCopies: BigNumber;
      ownerCount: BigNumber;
    }
  >;

  addBook(
    _name: PromiseOrValue<string>,
    _copies: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addBookCopies(
    _bookId: PromiseOrValue<BigNumberish>,
    _copies: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  bookCount(overrides?: CallOverrides): Promise<BigNumber>;

  borrowBook(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAllAvailableBooks(overrides?: CallOverrides): Promise<BigNumber[]>;

  getBookDetail(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber]>;

  getOwnerHistoryOfBook(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  returnBook(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    BookLedger(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber] & {
        name: string;
        availableCopies: BigNumber;
        ownerCount: BigNumber;
      }
    >;

    addBook(
      _name: PromiseOrValue<string>,
      _copies: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    addBookCopies(
      _bookId: PromiseOrValue<BigNumberish>,
      _copies: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    bookCount(overrides?: CallOverrides): Promise<BigNumber>;

    borrowBook(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getAllAvailableBooks(overrides?: CallOverrides): Promise<BigNumber[]>;

    getBookDetail(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    getOwnerHistoryOfBook(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    returnBook(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    BookLedger(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addBook(
      _name: PromiseOrValue<string>,
      _copies: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addBookCopies(
      _bookId: PromiseOrValue<BigNumberish>,
      _copies: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    bookCount(overrides?: CallOverrides): Promise<BigNumber>;

    borrowBook(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAllAvailableBooks(overrides?: CallOverrides): Promise<BigNumber>;

    getBookDetail(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOwnerHistoryOfBook(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    returnBook(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BookLedger(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addBook(
      _name: PromiseOrValue<string>,
      _copies: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addBookCopies(
      _bookId: PromiseOrValue<BigNumberish>,
      _copies: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    bookCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    borrowBook(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAllAvailableBooks(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBookDetail(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOwnerHistoryOfBook(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    returnBook(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
