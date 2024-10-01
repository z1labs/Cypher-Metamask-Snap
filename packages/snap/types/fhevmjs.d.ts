declare module "fhevmjs" {
    export function createInstance(options: { networkUrl: string; gatewayUrl: string }): Promise<any>;
    export interface Instance {
      generateKeypair(): { publicKey: string; privateKey: string };
      createEIP712(publicKey: string, contractAddress: string): any;
      reencrypt(
        handle: any,
        privateKey: string,
        publicKey: string,
        signature: string,
        contractAddress: string,
        userAddress: string
      ): Promise<any>;
    }
  }
  