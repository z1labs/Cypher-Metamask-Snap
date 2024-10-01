import React, { useState } from 'react';
import styled from 'styled-components';
import {
  ConnectButton,
  InstallFlaskButton,
  ReconnectButton,
  ReencryptButton,
  Card,
} from '../components';
import { defaultSnapOrigin } from '../config';
import {
  useMetaMask,
  useInvokeSnap,
  useMetaMaskContext,
  useRequestSnap,
} from '../hooks';
import { isLocalSnap, shouldDisplayReconnectButton } from '../utils';
import { EncryptedERC20__factory } from '../typechain'; // Adjust the path according to your project structure
import { ethers } from 'ethers'; // Ensure ethers.js is available

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin-top: 7.6rem;
  margin-bottom: 7.6rem;
  ${({ theme }) => theme.mediaQueries.small} {
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: auto;
  }
`;

const Heading = styled.h1`
  margin-top: 0;
  margin-bottom: 2.4rem;
  text-align: center;
`;

const Span = styled.span`
  color: ${(props) => props.theme.colors.primary?.default};
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
  ${({ theme }) => theme.mediaQueries.small} {
    font-size: ${({ theme }) => theme.fontSizes.text};
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 64.8rem;
  width: 100%;
  height: 100%;
  margin-top: 1.5rem;
`;

const Notice = styled.div`
  background-color: ${({ theme }) => theme.colors.background?.alternative};
  border: 1px solid ${({ theme }) => theme.colors.border?.default};
  color: ${({ theme }) => theme.colors.text?.alternative};
  border-radius: ${({ theme }) => theme.radii.default};
  padding: 2.4rem;
  margin-top: 2.4rem;
  max-width: 60rem;
  width: 100%;

  & > * {
    margin: 0;
  }
  ${({ theme }) => theme.mediaQueries.small} {
    margin-top: 1.2rem;
    padding: 1.6rem;
  }
`;

const ErrorMessage = styled.div`
  background-color: ${({ theme }) => theme.colors.error?.muted};
  border: 1px solid ${({ theme }) => theme.colors.error?.default};
  color: ${({ theme }) => theme.colors.error?.alternative};
  border-radius: ${({ theme }) => theme.radii.default};
  padding: 2.4rem;
  margin-bottom: 2.4rem;
  margin-top: 2.4rem;
  max-width: 60rem;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.small} {
    padding: 1.6rem;
    margin-bottom: 1.2rem;
    margin-top: 1.2rem;
    max-width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ERCContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;

  ${({ theme }) => theme.mediaQueries.small} {
    align-items: center;
  }
`;

const Index = () => {
  const { error } = useMetaMaskContext();
  const { isFlask, snapsDetected, installedSnap } = useMetaMask();
  const requestSnap = useRequestSnap();
  const invokeSnap = useInvokeSnap();

  const [erc20Address, setErc20Address] = useState('');

  const isMetaMaskReady = isLocalSnap(defaultSnapOrigin)
    ? isFlask
    : snapsDetected;

  const handleReencrypt = async () => {
    await window.ethereum.request({ method: 'eth_requestAccounts' });

    if (!ethers.isAddress(erc20Address)) {
      console.error('Invalid ERC20 address');
      return;
    }

    try {
      const signer = await new ethers.BrowserProvider(
        window.ethereum,
      ).getSigner();
      const userAddress = await signer.getAddress();

      const { publicKey, privateKey, eip712 }: any = await invokeSnap({
        method: 'createEip',
        params: {
          contractAddress: erc20Address
        }
      });

      const encryptedERC20 = EncryptedERC20__factory.connect(
        erc20Address,
        signer,
      );

      const balance = await encryptedERC20.balanceOf(userAddress);
      const signerAddress = await signer.getAddress();
      const params = [signerAddress, JSON.stringify(eip712)];
      const signature = await signer.signMessage(JSON.stringify(params));


      await invokeSnap({
        method: 'sign',
        params: {
          publicKey,
          privateKey,
          signature,
          balance: balance.toString(),
          signerAddress,
          contract: erc20Address,
        },
      });
    } catch (err) {
      console.error('Error interacting with contract or snap:', err);
    }
  };

  return (
    <Container>
      <Heading>
        ERC20 Balance Reencryptor <Span> by Cypher </Span>
      </Heading>
      <Subtitle>
        Get started by input the Encrypted ERC20 contract address and click to decrypt balance
      </Subtitle>
      <CardContainer>
        {error && (
          <ErrorMessage>
            <b>An error happened:</b> {error.message}
          </ErrorMessage>
        )}
        {!isMetaMaskReady && (
          <Card
            content={{
              title: 'Install',
              description:
                'Snaps is pre-release software only available in MetaMask Flask, a canary distribution for developers with access to upcoming features.',
              button: <InstallFlaskButton />,
            }}
            fullWidth
          />
        )}
        {!installedSnap && (
          <Card
            content={{
              title: 'Connect',
              description:
                'Get started by connecting to and installing the example snap.',
              button: (
                <ConnectButton
                  onClick={requestSnap}
                  disabled={!isMetaMaskReady}
                />
              ),
            }}
            disabled={!isMetaMaskReady}
          />
        )}

        <Card
          content={{
            title: 'ERC20 Contract Address & Decrypt',
            description:
              'Input the ERC20 contract address and click to decrypt.',
            button: (
              <ERCContainer>
                <input
                  type="text"
                  value={erc20Address} // Bind the state to the input field
                  onChange={(e) => setErc20Address(e.target.value)} // Update state when input changes
                  placeholder="Enter ERC20 contract address"
                  style={{
                    padding: '10px',
                    width: '100%',
                    boxSizing: 'border-box',
                    marginBottom: '10px',
                  }}
                />
                <ReencryptButton
                  onClick={handleReencrypt}
                  disabled={!installedSnap}
                  style={{
                    marginTop: '10px',
                  }}
                />
              </ERCContainer>
            ),
          }}
          fullWidth
        />

        <ButtonContainer>
          <ReconnectButton
            onClick={requestSnap}
            disabled={!installedSnap}
            style={{
              width: '200px', // Adjust button width if necessary
            }}
          />
        </ButtonContainer>

        <Notice>
          <p>
            Please note that the <b>snap.manifest.json</b> and{' '}
            <b>package.json</b> must be located in the server root directory and
            the bundle must be hosted at the location specified by the location
            field.
          </p>
        </Notice>
      </CardContainer>
    </Container>
  );
};

export default Index;
