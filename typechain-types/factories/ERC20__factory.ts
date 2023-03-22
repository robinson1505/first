/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ERC20, ERC20Interface } from "../ERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balancesOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
    inputs: [],
    name: "symbol",
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
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200158a3803806200158a8339818101604052810190620000379190620002f9565b8160019081620000489190620005c9565b5080600290816200005a9190620005c9565b50620000763368056bc75e2d631000006200007e60201b60201c565b50506200079d565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620000f0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000e79062000711565b60405180910390fd5b8060008082825462000103919062000762565b9250508190555080600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546200015b919062000762565b925050819055505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001cf8262000184565b810181811067ffffffffffffffff82111715620001f157620001f062000195565b5b80604052505050565b60006200020662000166565b9050620002148282620001c4565b919050565b600067ffffffffffffffff82111562000237576200023662000195565b5b620002428262000184565b9050602081019050919050565b60005b838110156200026f57808201518184015260208101905062000252565b60008484015250505050565b6000620002926200028c8462000219565b620001fa565b905082815260208101848484011115620002b157620002b06200017f565b5b620002be8482856200024f565b509392505050565b600082601f830112620002de57620002dd6200017a565b5b8151620002f08482602086016200027b565b91505092915050565b6000806040838503121562000313576200031262000170565b5b600083015167ffffffffffffffff81111562000334576200033362000175565b5b6200034285828601620002c6565b925050602083015167ffffffffffffffff81111562000366576200036562000175565b5b6200037485828601620002c6565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620003d157607f821691505b602082108103620003e757620003e662000389565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620004517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000412565b6200045d868362000412565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620004aa620004a46200049e8462000475565b6200047f565b62000475565b9050919050565b6000819050919050565b620004c68362000489565b620004de620004d582620004b1565b8484546200041f565b825550505050565b600090565b620004f5620004e6565b62000502818484620004bb565b505050565b5b818110156200052a576200051e600082620004eb565b60018101905062000508565b5050565b601f82111562000579576200054381620003ed565b6200054e8462000402565b810160208510156200055e578190505b620005766200056d8562000402565b83018262000507565b50505b505050565b600082821c905092915050565b60006200059e600019846008026200057e565b1980831691505092915050565b6000620005b983836200058b565b9150826002028217905092915050565b620005d4826200037e565b67ffffffffffffffff811115620005f057620005ef62000195565b5b620005fc8254620003b8565b620006098282856200052e565b600060209050601f8311600181146200064157600084156200062c578287015190505b620006388582620005ab565b865550620006a8565b601f1984166200065186620003ed565b60005b828110156200067b5784890151825560018201915060208501945060208101905062000654565b868310156200069b578489015162000697601f8916826200058b565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b7f45524332303a6d696e7420746f20746865207a65726f20616464726573730000600082015250565b6000620006f9601e83620006b0565b91506200070682620006c1565b602082019050919050565b600060208201905081810360008301526200072c81620006ea565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006200076f8262000475565b91506200077c8362000475565b925082820190508082111562000797576200079662000733565b5b92915050565b610ddd80620007ad6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063313ce56711610066578063313ce567146101345780636392a51f1461015257806395d89b4114610182578063a9059cbb146101a0578063dd62ed3e146101d057610093565b806306fdde0314610098578063095ea7b3146100b657806318160ddd146100e657806323b872dd14610104575b600080fd5b6100a0610200565b6040516100ad9190610816565b60405180910390f35b6100d060048036038101906100cb91906108d1565b61028e565b6040516100dd919061092c565b60405180910390f35b6100ee610389565b6040516100fb9190610956565b60405180910390f35b61011e60048036038101906101199190610971565b61038f565b60405161012b919061092c565b60405180910390f35b61013c6104f5565b60405161014991906109e0565b60405180910390f35b61016c600480360381019061016791906109fb565b6104fe565b6040516101799190610956565b60405180910390f35b61018a610516565b6040516101979190610816565b60405180910390f35b6101ba60048036038101906101b591906108d1565b6105a4565b6040516101c7919061092c565b60405180910390f35b6101ea60048036038101906101e59190610a28565b6105b9565b6040516101f79190610956565b60405180910390f35b6001805461020d90610a97565b80601f016020809104026020016040519081016040528092919081815260200182805461023990610a97565b80156102865780601f1061025b57610100808354040283529160200191610286565b820191906000526020600020905b81548152906001019060200180831161026957829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036102fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f590610b3a565b60405180910390fd5b81600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506001905092915050565b60005481565b600080600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610454576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044b90610bcc565b60405180910390fd5b82816104609190610c1b565b600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506104eb8585856105de565b9150509392505050565b60006012905090565b60036020528060005260406000206000915090505481565b6002805461052390610a97565b80601f016020809104026020016040519081016040528092919081815260200182805461054f90610a97565b801561059c5780601f106105715761010080835404028352916020019161059c565b820191906000526020600020905b81548152906001019060200180831161057f57829003601f168201915b505050505081565b60006105b13384846105de565b905092915050565b6004602052816000526040600020602052806000526040600020600091509150505481565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361064e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064590610cc1565b60405180910390fd5b6000600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156106d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106cc90610d53565b60405180910390fd5b82816106e19190610c1b565b600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555082600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546107739190610d73565b9250508190555060019150509392505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156107c05780820151818401526020810190506107a5565b60008484015250505050565b6000601f19601f8301169050919050565b60006107e882610786565b6107f28185610791565b93506108028185602086016107a2565b61080b816107cc565b840191505092915050565b6000602082019050818103600083015261083081846107dd565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006108688261083d565b9050919050565b6108788161085d565b811461088357600080fd5b50565b6000813590506108958161086f565b92915050565b6000819050919050565b6108ae8161089b565b81146108b957600080fd5b50565b6000813590506108cb816108a5565b92915050565b600080604083850312156108e8576108e7610838565b5b60006108f685828601610886565b9250506020610907858286016108bc565b9150509250929050565b60008115159050919050565b61092681610911565b82525050565b6000602082019050610941600083018461091d565b92915050565b6109508161089b565b82525050565b600060208201905061096b6000830184610947565b92915050565b60008060006060848603121561098a57610989610838565b5b600061099886828701610886565b93505060206109a986828701610886565b92505060406109ba868287016108bc565b9150509250925092565b600060ff82169050919050565b6109da816109c4565b82525050565b60006020820190506109f560008301846109d1565b92915050565b600060208284031215610a1157610a10610838565b5b6000610a1f84828501610886565b91505092915050565b60008060408385031215610a3f57610a3e610838565b5b6000610a4d85828601610886565b9250506020610a5e85828601610886565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610aaf57607f821691505b602082108103610ac257610ac1610a68565b5b50919050565b7f45524332303a20617070726f76656420746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000610b24602383610791565b9150610b2f82610ac8565b604082019050919050565b60006020820190508181036000830152610b5381610b17565b9050919050565b7f45524332303a207472616e66657220616d6f756e74206578636565647320616c60008201527f6c6f77616e636500000000000000000000000000000000000000000000000000602082015250565b6000610bb6602783610791565b9150610bc182610b5a565b604082019050919050565b60006020820190508181036000830152610be581610ba9565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610c268261089b565b9150610c318361089b565b9250828203905081811115610c4957610c48610bec565b5b92915050565b7f45524332303a7472616e7366657220746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000610cab602283610791565b9150610cb682610c4f565b604082019050919050565b60006020820190508181036000830152610cda81610c9e565b9050919050565b7f45524332303a7472616e7366657220616d6f756e74206578636565642074686560008201527f2062616c616e6365000000000000000000000000000000000000000000000000602082015250565b6000610d3d602883610791565b9150610d4882610ce1565b604082019050919050565b60006020820190508181036000830152610d6c81610d30565b9050919050565b6000610d7e8261089b565b9150610d898361089b565b9250828201905080821115610da157610da0610bec565b5b9291505056fea264697066735822122043267b19206a097208100887325c904adb102a455c774104da9ac0155b01806564736f6c63430008120033";

type ERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20__factory extends ContractFactory {
  constructor(...args: ERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC20>;
  }
  override getDeployTransaction(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override attach(address: string): ERC20 {
    return super.attach(address) as ERC20;
  }
  override connect(signer: Signer): ERC20__factory {
    return super.connect(signer) as ERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20Interface {
    return new utils.Interface(_abi) as ERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC20 {
    return new Contract(address, _abi, signerOrProvider) as ERC20;
  }
}