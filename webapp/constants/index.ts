
  export interface Networks {
    [key: number]: string;
  }
  export const walletConnectSupportedNetworks: Networks = {
    // Add your network rpc URL here
    5: "https://goerli.infura.io/v3/7c4090b24e6f458bbb026743f6140e1e"
  };

  // Network chain ids
  export const supportedMetamaskNetworks = [1, 3, 4, 5, 42];

  export const ALBT_TOKEN_ADDRESS = "0xc6869a93ef55e1d8ec8fdcda89c9d93616cf0a72";
  export const LIBRARY_ADDRESS = "0x8B1DAE2635eBFff55eE6f34456De15F69CB68D60";