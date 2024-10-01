import type { OnRpcRequestHandler } from '@metamask/snaps-sdk';
import { Box, Text, Bold, Copyable } from '@metamask/snaps-sdk/jsx';

/**
 * Create EIP by sending a request to the server.
 *
 * @param contractAddress - The address of the contract.
 * @returns The response with the publicKey, privateKey, and eip712.
 */
// async function createEip(contractAddress: string) {
//   try {
//     console.log('EIP creation response:', response);
//     return response;
//   } catch (error) {
//     console.error('Error in createEip:', error);
//   }
// }

/**
 * Re-encrypt the data using the provided keys and signature.
 *
 * @param contractAddress - The address of the contract.
 * @param data - The data to be re-encrypted.
 * @param publicKey - The public key from the EIP creation.
 * @param privateKey - The private key from the EIP creation.
 * @param signature - The signature for the transaction.
 * @param signerAddress - The address of the signer.
 * @returns The re-encryption result.
 */
async function reencryptData(
  contractAddress: string,
  data: any,
  publicKey: string,
  privateKey: string,
  signature: string,
  signerAddress: string,
) {
  const response = await fetch('http://46.101.206.70:3000/reencrypt', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      publicKey,
      privateKey,
      signature,
      contractAddress,
      signerAddress,
      data,
    }),
  }).then((response) => response.json());

  return response;
}

export const onRpcRequest: OnRpcRequestHandler = async ({
  origin,
  request,
}) => {
  try {
    switch (request.method) {
      case 'createEip':
        const { contractAddress }: any = request.params;
        try {
          const response = await fetch('http://46.101.206.70:3000/create-eip', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              contractAddress: contractAddress,
            }),
          }).then((response) => response.json());
          return response;
        } catch (error) {
          console.error('Error in createEip:', error);
          return error;
        }

      case 'sign':
        const {
          publicKey,
          privateKey,
          signature,
          balance,
          signerAddress,
          contract,
        }: any = request.params;
        const result = await reencryptData(
          contract,
          balance,
          publicKey,
          privateKey,
          signature,
          signerAddress,
        );

        console.log('Re-encryption result:', result);

        const resultString =
          typeof result === 'object'
            ? JSON.stringify(result, null, 2)
            : String(result);

        return snap.request({
          method: 'snap_dialog',
          params: {
            type: 'alert',
            content: (
              <Box>
                <Text>
                  Hello, <Bold>{origin}</Bold>!
                </Text>
                <Text>Re-encryption result:</Text>
                <Copyable value={resultString} />
              </Box>
            ),
          },
        });

      default:
        throw new Error('Method not found.');
    }
  } catch (error) {
    console.error('Error in onRpcRequest:', error);
    throw new Error('Failed to handle the request.');
  }
};
