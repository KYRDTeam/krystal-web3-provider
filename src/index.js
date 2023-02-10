// Copyright © 2017-2022 Trust Wallet.
//
// This file is part of Trust. The full Trust copyright notice, including
// terms governing use, modification, and redistribution, is contained in the
// file LICENSE at the root of the source code distribution tree.

"use strict";

import KrystalWeb3Provider from "./ethereum_provider";
import KrystalSolanaWeb3Provider from "./solana_provider";
import KrystalCosmosWeb3Provider from "./cosmos_provider";
import KrystalAptosWeb3Provider from "./aptos_provider";

window.krystalwallet = {
  Provider: KrystalWeb3Provider,
  SolanaProvider: KrystalSolanaWeb3Provider,
  CosmosProvider: KrystalCosmosWeb3Provider,
  AptosProvider: KrystalAptosWeb3Provider,
  postMessage: null,
};
