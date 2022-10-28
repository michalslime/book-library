/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  LibraryHelpers,
  LibraryHelpersInterface,
} from "../../contracts/LibraryHelpers";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_isbn",
        type: "string",
      },
      {
        internalType: "string",
        name: "_title",
        type: "string",
      },
      {
        internalType: "string",
        name: "_author",
        type: "string",
      },
    ],
    name: "addBook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "books",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "isbn",
        type: "string",
      },
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "string",
        name: "author",
        type: "string",
      },
      {
        internalType: "bool",
        name: "borrowed",
        type: "bool",
      },
      {
        internalType: "address",
        name: "borrowingAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "copies",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBooks",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "isbn",
            type: "string",
          },
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "string",
            name: "author",
            type: "string",
          },
          {
            internalType: "bool",
            name: "borrowed",
            type: "bool",
          },
          {
            internalType: "address",
            name: "borrowingAddress",
            type: "address",
          },
        ],
        internalType: "struct LibraryFactory.Book[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "historicalBorrowers",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "titleToIsbn",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b610edf8061007e6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80639f349789116100665780639f34978914610108578063a2e28f301461011d578063d6db337d1461015d578063e5891dcd14610170578063f2fde38b1461019057600080fd5b8063687440461461009857806369c46826146100c6578063715018a6146100db5780638da5cb5b146100e3575b600080fd5b6100ab6100a636600461096f565b6101a3565b6040516100bd969594939291906109d8565b60405180910390f35b6100d96100d4366004610ade565b610391565b005b6100d96104fa565b6000546001600160a01b03165b6040516001600160a01b0390911681526020016100bd565b61011061050e565b6040516100bd9190610b66565b61014b61012b366004610c31565b805160208183018101805160028252928201919093012091525460ff1681565b60405160ff90911681526020016100bd565b6100f061016b366004610c6e565b61075b565b61018361017e366004610c31565b6107a2565b6040516100bd9190610cb3565b6100d961019e366004610ccd565b610847565b600181815481106101b357600080fd5b600091825260209091206005909102018054600182018054919350906101d890610cf6565b80601f016020809104026020016040519081016040528092919081815260200182805461020490610cf6565b80156102515780601f1061022657610100808354040283529160200191610251565b820191906000526020600020905b81548152906001019060200180831161023457829003601f168201915b50505050509080600201805461026690610cf6565b80601f016020809104026020016040519081016040528092919081815260200182805461029290610cf6565b80156102df5780601f106102b4576101008083540402835291602001916102df565b820191906000526020600020905b8154815290600101906020018083116102c257829003601f168201915b5050505050908060030180546102f490610cf6565b80601f016020809104026020016040519081016040528092919081815260200182805461032090610cf6565b801561036d5780601f106103425761010080835404028352916020019161036d565b820191906000526020600020905b81548152906001019060200180831161035057829003601f168201915b5050506004909301549192505060ff8116906001600160a01b036101009091041686565b6103996108c5565b60016040518060c0016040528060018054905060016103b89190610d46565b81526020808201879052604082018690526060820185905260006080830181905260a090920182905283546001818101865594835291819020835160059093020191825582015191929091908201906104119082610dae565b50604082015160028201906104269082610dae565b506060820151600382019061043b9082610dae565b5060808201516004909101805460a0909301516001600160a01b031661010002610100600160a81b0319921515929092166001600160a81b031990931692909217179055604051600290610490908590610e6e565b908152604051908190036020019020805460ff169060006104b083610e8a565b91906101000a81548160ff021916908360ff16021790555050826003836040516104da9190610e6e565b908152602001604051809103902090816104f49190610dae565b50505050565b6105026108c5565b61050c600061091f565b565b60606001805480602002602001604051908101604052809291908181526020016000905b8282101561075257838290600052602060002090600502016040518060c00160405290816000820154815260200160018201805461056f90610cf6565b80601f016020809104026020016040519081016040528092919081815260200182805461059b90610cf6565b80156105e85780601f106105bd576101008083540402835291602001916105e8565b820191906000526020600020905b8154815290600101906020018083116105cb57829003601f168201915b5050505050815260200160028201805461060190610cf6565b80601f016020809104026020016040519081016040528092919081815260200182805461062d90610cf6565b801561067a5780601f1061064f5761010080835404028352916020019161067a565b820191906000526020600020905b81548152906001019060200180831161065d57829003601f168201915b5050505050815260200160038201805461069390610cf6565b80601f01602080910402602001604051908101604052809291908181526020018280546106bf90610cf6565b801561070c5780601f106106e15761010080835404028352916020019161070c565b820191906000526020600020905b8154815290600101906020018083116106ef57829003601f168201915b50505091835250506004919091015460ff811615156020808401919091526101009091046001600160a01b03166040909201919091529082526001929092019101610532565b50505050905090565b8151602081840181018051600482529282019185019190912091905280548290811061078657600080fd5b6000918252602090912001546001600160a01b03169150829050565b8051602081830181018051600382529282019190930120915280546107c690610cf6565b80601f01602080910402602001604051908101604052809291908181526020018280546107f290610cf6565b801561083f5780601f106108145761010080835404028352916020019161083f565b820191906000526020600020905b81548152906001019060200180831161082257829003601f168201915b505050505081565b61084f6108c5565b6001600160a01b0381166108b95760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6108c28161091f565b50565b6000546001600160a01b0316331461050c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016108b0565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121561098157600080fd5b5035919050565b60005b838110156109a357818101518382015260200161098b565b50506000910152565b600081518084526109c4816020860160208601610988565b601f01601f19169290920160200192915050565b86815260c0602082015260006109f160c08301886109ac565b8281036040840152610a0381886109ac565b90508281036060840152610a1781876109ac565b941515608084015250506001600160a01b039190911660a090910152949350505050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112610a6257600080fd5b813567ffffffffffffffff80821115610a7d57610a7d610a3b565b604051601f8301601f19908116603f01168101908282118183101715610aa557610aa5610a3b565b81604052838152866020858801011115610abe57600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600060608486031215610af357600080fd5b833567ffffffffffffffff80821115610b0b57600080fd5b610b1787838801610a51565b94506020860135915080821115610b2d57600080fd5b610b3987838801610a51565b93506040860135915080821115610b4f57600080fd5b50610b5c86828701610a51565b9150509250925092565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b83811015610c2357603f19898403018552815160c08151855288820151818a870152610bbb828701826109ac565b9150508782015185820389870152610bd382826109ac565b91505060608083015186830382880152610bed83826109ac565b60808581015115159089015260a0948501516001600160a01b031694909701939093525050509386019390860190600101610b8d565b509098975050505050505050565b600060208284031215610c4357600080fd5b813567ffffffffffffffff811115610c5a57600080fd5b610c6684828501610a51565b949350505050565b60008060408385031215610c8157600080fd5b823567ffffffffffffffff811115610c9857600080fd5b610ca485828601610a51565b95602094909401359450505050565b602081526000610cc660208301846109ac565b9392505050565b600060208284031215610cdf57600080fd5b81356001600160a01b0381168114610cc657600080fd5b600181811c90821680610d0a57607f821691505b602082108103610d2a57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b80820180821115610d5957610d59610d30565b92915050565b601f821115610da957600081815260208120601f850160051c81016020861015610d865750805b601f850160051c820191505b81811015610da557828155600101610d92565b5050505b505050565b815167ffffffffffffffff811115610dc857610dc8610a3b565b610ddc81610dd68454610cf6565b84610d5f565b602080601f831160018114610e115760008415610df95750858301515b600019600386901b1c1916600185901b178555610da5565b600085815260208120601f198616915b82811015610e4057888601518255948401946001909101908401610e21565b5085821015610e5e5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60008251610e80818460208701610988565b9190910192915050565b600060ff821660ff8103610ea057610ea0610d30565b6001019291505056fea2646970667358221220f4611bc9767f3016dd78c31da916f13e18e8428927efcc19d692c3b90fe904b964736f6c63430008110033";

type LibraryHelpersConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LibraryHelpersConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LibraryHelpers__factory extends ContractFactory {
  constructor(...args: LibraryHelpersConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LibraryHelpers> {
    return super.deploy(overrides || {}) as Promise<LibraryHelpers>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LibraryHelpers {
    return super.attach(address) as LibraryHelpers;
  }
  override connect(signer: Signer): LibraryHelpers__factory {
    return super.connect(signer) as LibraryHelpers__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibraryHelpersInterface {
    return new utils.Interface(_abi) as LibraryHelpersInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibraryHelpers {
    return new Contract(address, _abi, signerOrProvider) as LibraryHelpers;
  }
}
