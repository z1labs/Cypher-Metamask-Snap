/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  IFHEVMCoprocessor,
  IFHEVMCoprocessorInterface,
} from "../../../../../contracts/fhevm/lib/Impl.sol/IFHEVMCoprocessor";
import { Contract, Interface, type ContractRunner } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ct",
        type: "uint256",
      },
      {
        internalType: "bytes1",
        name: "toType",
        type: "bytes1",
      },
    ],
    name: "cast",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cleanTransientStorage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
      {
        internalType: "bytes1",
        name: "scalarByte",
        type: "bytes1",
      },
    ],
    name: "fheAdd",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
      {
        internalType: "bytes1",
        name: "scalarByte",
        type: "bytes1",
      },
    ],
    name: "fheBitAnd",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
      {
        internalType: "bytes1",
        name: "scalarByte",
        type: "bytes1",
      },
    ],
    name: "fheBitOr",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
      {
        internalType: "bytes1",
        name: "scalarByte",
        type: "bytes1",
      },
    ],
    name: "fheBitXor",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
      {
        internalType: "bytes1",
        name: "scalarByte",
        type: "bytes1",
      },
    ],
    name: "fheDiv",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
      {
        internalType: "bytes1",
        name: "scalarByte",
        type: "bytes1",
      },
    ],
    name: "fheEq",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
      {
        internalType: "bytes1",
        name: "scalarByte",
        type: "bytes1",
      },
    ],
    name: "fheGe",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
      {
        internalType: "bytes1",
        name: "scalarByte",
        type: "bytes1",
      },
    ],
    name: "fheGt",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "control",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ifTrue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ifFalse",
        type: "uint256",
      },
    ],
    name: "fheIfThenElse",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
      {
        internalType: "bytes1",
        name: "scalarByte",
        type: "bytes1",
      },
    ],
    name: "fheLe",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
      {
        internalType: "bytes1",
        name: "scalarByte",
        type: "bytes1",
      },
    ],
    name: "fheLt",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
      {
        internalType: "bytes1",
        name: "scalarByte",
        type: "bytes1",
      },
    ],
    name: "fheMax",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
      {
        internalType: "bytes1",
        name: "scalarByte",
        type: "bytes1",
      },
    ],
    name: "fheMin",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
      {
        internalType: "bytes1",
        name: "scalarByte",
        type: "bytes1",
      },
    ],
    name: "fheMul",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
      {
        internalType: "bytes1",
        name: "scalarByte",
        type: "bytes1",
      },
    ],
    name: "fheNe",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ct",
        type: "uint256",
      },
    ],
    name: "fheNeg",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ct",
        type: "uint256",
      },
    ],
    name: "fheNot",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes1",
        name: "randType",
        type: "bytes1",
      },
    ],
    name: "fheRand",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "upperBound",
        type: "uint256",
      },
      {
        internalType: "bytes1",
        name: "randType",
        type: "bytes1",
      },
    ],
    name: "fheRandBounded",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
      {
        internalType: "bytes1",
        name: "scalarByte",
        type: "bytes1",
      },
    ],
    name: "fheRem",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
      {
        internalType: "bytes1",
        name: "scalarByte",
        type: "bytes1",
      },
    ],
    name: "fheRotl",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
      {
        internalType: "bytes1",
        name: "scalarByte",
        type: "bytes1",
      },
    ],
    name: "fheRotr",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
      {
        internalType: "bytes1",
        name: "scalarByte",
        type: "bytes1",
      },
    ],
    name: "fheShl",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
      {
        internalType: "bytes1",
        name: "scalarByte",
        type: "bytes1",
      },
    ],
    name: "fheShr",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
      {
        internalType: "bytes1",
        name: "scalarByte",
        type: "bytes1",
      },
    ],
    name: "fheSub",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ct",
        type: "uint256",
      },
      {
        internalType: "bytes1",
        name: "toType",
        type: "bytes1",
      },
    ],
    name: "trivialEncrypt",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "inputHandle",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "callerAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "inputProof",
        type: "bytes",
      },
      {
        internalType: "bytes1",
        name: "inputType",
        type: "bytes1",
      },
    ],
    name: "verifyCiphertext",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IFHEVMCoprocessor__factory {
  static readonly abi = _abi;
  static createInterface(): IFHEVMCoprocessorInterface {
    return new Interface(_abi) as IFHEVMCoprocessorInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IFHEVMCoprocessor {
    return new Contract(address, _abi, runner) as unknown as IFHEVMCoprocessor;
  }
}
