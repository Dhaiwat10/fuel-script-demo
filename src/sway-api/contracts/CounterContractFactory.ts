/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.97.2
  Forc version: 0.66.5
  Fuel-Core version: 0.40.0
*/

import { ContractFactory, decompressBytecode } from "fuels";
import type { Provider, Account, DeployContractOptions } from "fuels";

import { CounterContract } from "./CounterContract";

const bytecode = decompressBytecode("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");

export class CounterContractFactory extends ContractFactory<CounterContract> {

  static readonly bytecode = bytecode;

  constructor(accountOrProvider: Account | Provider) {
    super(
      bytecode,
      CounterContract.abi,
      accountOrProvider,
      CounterContract.storageSlots
    );
  }

  static deploy (
    wallet: Account,
    options: DeployContractOptions = {}
  ) {
    const factory = new CounterContractFactory(wallet);
    return factory.deploy(options);
  }
}
