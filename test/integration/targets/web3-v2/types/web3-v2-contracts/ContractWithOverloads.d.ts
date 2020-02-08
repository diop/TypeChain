/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { Contract, ContractOptions, EventOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import { Callback, ContractEvent, TransactionObject } from "./types";

export class ContractWithOverloads extends Contract {
  constructor(jsonInterface: any[], address?: string, options?: ContractOptions);
  clone(): ContractWithOverloads;
  methods: {
    getCounter(offset: number | string): TransactionObject<BN>;

    counter(): TransactionObject<BN>;

    increaseCounter(by: number | string): TransactionObject<void>;
  };
  events: {
    allEvents: (options?: EventOptions, cb?: Callback<EventLog>) => EventEmitter;
  };
}