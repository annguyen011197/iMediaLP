'use client';

import {
  Group,
  BackgroundImage,
  Title,
  Container,
  SimpleGrid,
  Box,
  Flex,
  Stack,
  Grid,
  Image,
  Paper,
  Button,
  Text,
} from '@mantine/core';
import { createStyles, rem } from '@mantine/styles';
import { ReactNode } from 'react';
import { HeaderResponsive } from '../HeaderResponsive/HeaderResponsive';
import links from '@/uttils/links';
import { IconBrandFacebookFilled } from '@tabler/icons-react';
import Link from 'next/link';

const useStyles = createStyles(() => ({
  wrapper: {
    minHeight: '100vh',
    minWidth: '100v',
    backgroundAttachment: 'fixed',
    paddingBottom: 120,
  },
  header: {
    height: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  brandName: {
    color: 'white',
    fontWeight: 'bolder',
    fontFamily: 'Roboto',
  },
  fill: {
    height: '100%',
    width: '100%',
  },
  px5: {},
  glowImage: {
    boxShadow: '0px 0px 5px #fff',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  footer: {
    zIndex: -1,
    padding: 20,
  },
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const MainLayout = ({ children }: { children: ReactNode }) => {
  const { classes } = useStyles();
  return (
    <>
      <Box w="100vw" h={240} bg="white" pos="fixed" bottom={0} className={classes.footer}>
        <Container className={classes.footerContainer}>
          <Title align="center" order={4} color="dark">
            iMedia
          </Title>
          <Flex justify="center" gap={20} mt={20}>
            <Link href="https://www.facebook.com/">
              <Image
                src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                width={40}
              />
            </Link>
            <Link href="https://www.facebook.com/">
              <Image src="/zalo.svg" width={40} />
            </Link>
          </Flex>
          <Flex justify="center" gap={20} mt={40}>
            <Text>Privacy</Text>
            <Text>Term</Text>
            <Text>FAQ</Text>
          </Flex>
        </Container>
      </Box>
      <BackgroundImage src="/background.png" className={classes.wrapper}>
        <HeaderResponsive links={links} />

        <Container size="lg" px="xs" pt={120}>
          {children}
        </Container>
      </BackgroundImage>
      <Box w="100%" h={240} />
    </>
  );
};

export default MainLayout;
