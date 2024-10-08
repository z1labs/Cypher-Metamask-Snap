/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../common";
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";

export interface TFHEExecutorInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "cast"
      | "cleanTransientStorage"
      | "fheAdd"
      | "fheBitAnd"
      | "fheBitOr"
      | "fheBitXor"
      | "fheDiv"
      | "fheEq"
      | "fheGe"
      | "fheGt"
      | "fheIfThenElse"
      | "fheLe"
      | "fheLt"
      | "fheMax"
      | "fheMin"
      | "fheMul"
      | "fheNe"
      | "fheNeg"
      | "fheNot"
      | "fheRand"
      | "fheRandBounded"
      | "fheRem"
      | "fheRotl"
      | "fheRotr"
      | "fheShl"
      | "fheShr"
      | "fheSub"
      | "trivialEncrypt"
      | "verifyCiphertext"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "cast",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "cleanTransientStorage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fheAdd",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "fheBitAnd",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "fheBitOr",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "fheBitXor",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "fheDiv",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "fheEq",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "fheGe",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "fheGt",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "fheIfThenElse",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "fheLe",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "fheLt",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "fheMax",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "fheMin",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "fheMul",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "fheNe",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "fheNeg",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "fheNot",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "fheRand", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "fheRandBounded",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "fheRem",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "fheRotl",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "fheRotr",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "fheShl",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "fheShr",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "fheSub",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "trivialEncrypt",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyCiphertext",
    values: [BytesLike, AddressLike, BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "cast", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cleanTransientStorage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fheAdd", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fheBitAnd", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fheBitOr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fheBitXor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fheDiv", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fheEq", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fheGe", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fheGt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fheIfThenElse",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fheLe", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fheLt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fheMax", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fheMin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fheMul", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fheNe", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fheNeg", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fheNot", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fheRand", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fheRandBounded",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fheRem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fheRotl", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fheRotr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fheShl", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fheShr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fheSub", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "trivialEncrypt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyCiphertext",
    data: BytesLike
  ): Result;
}

export interface TFHEExecutor extends BaseContract {
  connect(runner?: ContractRunner | null): TFHEExecutor;
  waitForDeployment(): Promise<this>;

  interface: TFHEExecutorInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  cast: TypedContractMethod<
    [ct: BigNumberish, toType: BytesLike],
    [bigint],
    "nonpayable"
  >;

  cleanTransientStorage: TypedContractMethod<[], [void], "nonpayable">;

  fheAdd: TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;

  fheBitAnd: TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;

  fheBitOr: TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;

  fheBitXor: TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;

  fheDiv: TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;

  fheEq: TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;

  fheGe: TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;

  fheGt: TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;

  fheIfThenElse: TypedContractMethod<
    [control: BigNumberish, ifTrue: BigNumberish, ifFalse: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  fheLe: TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;

  fheLt: TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;

  fheMax: TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;

  fheMin: TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;

  fheMul: TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;

  fheNe: TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;

  fheNeg: TypedContractMethod<[ct: BigNumberish], [bigint], "nonpayable">;

  fheNot: TypedContractMethod<[ct: BigNumberish], [bigint], "nonpayable">;

  fheRand: TypedContractMethod<[randType: BytesLike], [bigint], "nonpayable">;

  fheRandBounded: TypedContractMethod<
    [upperBound: BigNumberish, randType: BytesLike],
    [bigint],
    "nonpayable"
  >;

  fheRem: TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;

  fheRotl: TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;

  fheRotr: TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;

  fheShl: TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;

  fheShr: TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;

  fheSub: TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;

  trivialEncrypt: TypedContractMethod<
    [plaintext: BigNumberish, toType: BytesLike],
    [bigint],
    "nonpayable"
  >;

  verifyCiphertext: TypedContractMethod<
    [
      inputHandle: BytesLike,
      callerAddress: AddressLike,
      inputProof: BytesLike,
      inputType: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "cast"
  ): TypedContractMethod<
    [ct: BigNumberish, toType: BytesLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "cleanTransientStorage"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "fheAdd"
  ): TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "fheBitAnd"
  ): TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "fheBitOr"
  ): TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "fheBitXor"
  ): TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "fheDiv"
  ): TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "fheEq"
  ): TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "fheGe"
  ): TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "fheGt"
  ): TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "fheIfThenElse"
  ): TypedContractMethod<
    [control: BigNumberish, ifTrue: BigNumberish, ifFalse: BigNumberish],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "fheLe"
  ): TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "fheLt"
  ): TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "fheMax"
  ): TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "fheMin"
  ): TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "fheMul"
  ): TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "fheNe"
  ): TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "fheNeg"
  ): TypedContractMethod<[ct: BigNumberish], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "fheNot"
  ): TypedContractMethod<[ct: BigNumberish], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "fheRand"
  ): TypedContractMethod<[randType: BytesLike], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "fheRandBounded"
  ): TypedContractMethod<
    [upperBound: BigNumberish, randType: BytesLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "fheRem"
  ): TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "fheRotl"
  ): TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "fheRotr"
  ): TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "fheShl"
  ): TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "fheShr"
  ): TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "fheSub"
  ): TypedContractMethod<
    [lhs: BigNumberish, rhs: BigNumberish, scalarByte: BytesLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "trivialEncrypt"
  ): TypedContractMethod<
    [plaintext: BigNumberish, toType: BytesLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "verifyCiphertext"
  ): TypedContractMethod<
    [
      inputHandle: BytesLike,
      callerAddress: AddressLike,
      inputProof: BytesLike,
      inputType: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;

  filters: {};
}
