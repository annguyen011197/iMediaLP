'use client';

import React, { ReactNode, useMemo } from 'react';
import {
  Box,
  Flex,
  Card,
  Container,
  Grid,
  SimpleGrid,
  Stack,
  Title,
  createStyles,
  rem,
  Text,
  Image,
  em,
  Button,
} from '@mantine/core';
import { IconDeviceMobile, IconDeviceTv, IconDownload } from '@tabler/icons-react';
import Link from 'next/link';
import MainLayout from '../MainLayout/MainLayout';
import resources from '../../app/resource/resources.json';

const useStyles = createStyles(() => ({
  button: {
    width: '50%',
  },
  spacing: {
    marginTop: 24,
  },
  smallSpacing: {
    margin: 4,
  },
  glowImage: {
    boxShadow: '0px 0px 5px #fff',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

function GooglePlayButton({ href }: { href: string }) {
  const { classes } = useStyles();
  return (
    <Link className={classes.button} href={href}>
      <Image
        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
        alt="Get it on Google Play"
      />
    </Link>
  );
}

function ReleaseCard({
  logo,
  title,
  version,
  descriptionGG,
  descrptionAPK,
  linkGG,
  linkAPK,
}: {
  logo: ReactNode;
  title: string;
  version: string;
  descriptionGG: string;
  descrptionAPK: string;
  linkGG: string;
  linkAPK: string;
}) {
  const { classes } = useStyles();
  return (
    <Card>
      <Stack spacing={8}>
        {/* <IconDeviceTv size="2rem" /> */}
        {logo}
        <Title order={2} weight="bold">
          {title}
        </Title>
        <Title order={4}>{version}</Title>
        <div className={classes.spacing} />
        <Text fz="md">{`- ${descriptionGG}`}</Text>
        <GooglePlayButton href={linkGG} />
        <div className={classes.spacing} />
        <Text fz="md">{`- ${descrptionAPK}`}</Text>
        <Button
          className={`${classes.glowImage} ${classes.button}`}
          mt={20}
          leftIcon={<IconDownload />}
        >
          Tải về APK
        </Button>
      </Stack>
    </Card>
  );
}

export function ReleaseList() {
  const cardList = useMemo(
    () =>
      resources.releaseVersion.map((e) => {
        const logo =
          e.type === 'tv' ? <IconDeviceTv size="2rem" /> : <IconDeviceMobile size="2rem" />;
        return (
          <ReleaseCard
            logo={logo}
            title={e.title}
            version={e.version}
            descriptionGG={e.descriptionGG}
            linkGG={e.linkGG}
            descrptionAPK={e.descriptionAPK}
            linkAPK={e.linkAPK}
          />
        );
      }),
    []
  );

  return (
    <SimpleGrid
      cols={2}
      breakpoints={[
        { maxWidth: 'lg', cols: 2 },
        { maxWidth: 'sm', cols: 1 },
      ]}
    >
      {cardList}
    </SimpleGrid>
  );
}

export default function Release() {
  return (
    <MainLayout>
      <Container>
        <Stack>
          <Title>Các phiên bản</Title>
          <ReleaseList />
        </Stack>
      </Container>
    </MainLayout>
  );
}
