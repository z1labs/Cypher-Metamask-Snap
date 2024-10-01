import styled, { useTheme } from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
  border-top: 1px solid ${(props) => props.theme.colors.border?.default};
`;


export const Footer = () => {
  const theme = useTheme();

  return (
    <FooterWrapper>
    </FooterWrapper>
  );
};
