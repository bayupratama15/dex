import { Trans, t } from '@lingui/macro'
import React from 'react'
import { useMedia } from 'react-use'
import { Flex, Text } from 'rebass'
import styled from 'styled-components'

import { Telegram } from 'components/Icons'
import Discord from 'components/Icons/Discord'
import Medium from 'components/Icons/Medium'
import PoweredByIconDark from 'components/Icons/PoweredByIconDark'
import PoweredByIconLight from 'components/Icons/PoweredByIconLight'
import TwitterIcon from 'components/Icons/TwitterIcon'
import InfoHelper from 'components/InfoHelper'
import { KYBER_NETWORK_DISCORD_URL, KYBER_NETWORK_TWITTER_URL } from 'constants/index'
import useTheme from 'hooks/useTheme'
import { useIsDarkMode } from 'state/user/hooks'
import { ExternalLink, ExternalLinkNoLineHeight } from 'theme'

const FooterWrapper = styled.div`
  background: ${({ theme }) => theme.buttonGray + '33'};
  width: 100%;

  ${({ theme }) => theme.mediaWidth.upToLarge`
    margin-bottom: 4rem;
  `};
`

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  width: 100%;
  padding: 16px;
  flex-direction: column-reverse;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    padding: 16px 16px;
  }

  @media only screen and (min-width: 1000px) {
    padding: 16px 32px;
  }

  @media only screen and (min-width: 1366px) {
    padding: 16px 215px;
  }

  @media only screen and (min-width: 1500px) {
    padding: 16px 252px;
  }
`

const InfoWrapper = styled.div`
  display: flex;
  gap: 16px;
  font-size: 12px;
  color: ${({ theme }) => theme.subText + '33'};
  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-top: 16px;
    gap: 24px;
  `};
`

const Separator = styled.div`
  width: 1px;
  background: ${({ theme }) => theme.border};
  ${({ theme }) => theme.mediaWidth.upToSmall`
    display: none
  `}
`

const Item = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.subText};
  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column;
    gap: 12px;
  `};
`

export const FooterSocialLink = () => {
  const theme = useTheme()
  return (
    <Flex alignItems="center" justifyContent="center" sx={{ gap: '24px' }}>
      <ExternalLinkNoLineHeight href="https://t.me/Cryon_Portal">
        <Telegram size={16} color={theme.subText} />
      </ExternalLinkNoLineHeight>
      <ExternalLinkNoLineHeight href={KYBER_NETWORK_TWITTER_URL}>
        <TwitterIcon color={theme.subText} />
      </ExternalLinkNoLineHeight>
    </Flex>
  )
}

function Footer() {
  const isDarkMode = useIsDarkMode()
  const above768 = useMedia('(min-width: 768px)')

  return (
    <FooterWrapper>
      <FooterContent>
        <InfoWrapper>
          <Item>
            <Text marginRight="6px">
              <Trans>Powered By Cryon Network</Trans>
            </Text>
          </Item>
          <Separator />

          {/* <Item>
            <Text marginRight="6px" display="flex">
              <Trans>Audited By</Trans>
              {!above768 && <InfoHelper size={14} text={t`Covers smart-contracts`} placement="top" />}
            </Text>
            <ExternalLink href="https://chainsecurity.com/security-audit/kyberswap-elastic" style={{ display: 'flex' }}>
              <img
                src={
                  !isDarkMode
                    ? 'https://chainsecurity.com/wp-content/themes/chainsecurity-wp/resources/images/temp/logo.svg'
                    : require('../../assets/svg/chainsecurity.svg').default
                }
                alt=""
                width="98px"
              />
            </ExternalLink>
            {above768 && <InfoHelper size={14} text={t`Covers smart-contracts`} placement="top" />}
          </Item> */}
        </InfoWrapper>
        <FooterSocialLink />
      </FooterContent>
    </FooterWrapper>
  )
}

export default Footer
