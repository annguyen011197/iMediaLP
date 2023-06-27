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
} from '@mantine/core';
import { createStyles, rem } from '@mantine/styles';
import { ReactNode } from 'react';
import { HeaderResponsive } from '../HeaderResponsive/HeaderResponsive';
import links from '@/uttils/links';

const useStyles = createStyles(() => ({
  wrapper: {
    minHeight: '100vh',
    minWidth: '100vw',
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
}));

const MainLayout = ({ children }: { children: ReactNode }) => {
  const { classes } = useStyles();
  return (
    <BackgroundImage src="/background.png" className={classes.wrapper}>
      <HeaderResponsive links={links} />

      <Container size="lg" px="xs" pt={120}>
        {children}
      </Container>
    </BackgroundImage>
  );
};

export default MainLayout;
