'use client';

import { Container, Overlay, BackgroundImage, Group, Title, Box, em } from '@mantine/core';
import { createStyles, rem } from '@mantine/styles';
import Image from 'next/image';

const useStyles = createStyles(() => ({
  wrapper: {
    height: '100vh',
    width: '100vw',
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
}));

const LogoName = () => {
  const { classes } = useStyles();
  return (
    <Group>
      <Image src="/icon.png" alt="logo" width={60} height={60} />
      <Title order={1} className={classes.brandName}>
        iMedia
      </Title>
    </Group>
  );
};

const Main = () => {
  const { classes } = useStyles();
  return (
    <BackgroundImage src="/background.png" className={classes.wrapper}>
      <Container className={classes.header} fluid>
        <Container size="lg" px="xs">
          <LogoName />
        </Container>
      </Container>
    </BackgroundImage>
  );
};

export default Main;
