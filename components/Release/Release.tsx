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

const releaseVersion = [
  {
    logo: <IconDeviceTv size="2rem" />,
    title: 'Phiên bản Smart TV',
    version: 'Version: abc.xyz',
    descriptionGG: 'Phiên bản hỗ trợ xem truyền hình và radio phù hợp với các thiết bị smart TV',
    linkGG:
      'https://play.google.com/store/apps/details?id=com.kt.apps.media.xemtvhttps://play.google.com/store/apps/details?id=com.kt.apps.media.xemtv&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
    descriptionAPK: 'Phiên bản nâng cao hỗ trợ xem bóng đá và IPTV',
    linkAPK: '',
  },
  {
    logo: <IconDeviceMobile size="2rem" />,
    title: 'Phiên bản Điện thoại',
    version: 'Version: abc.xyz',
    descriptionGG:
      'Phiên bản hỗ trợ xem truyền hình và radio phù hợp với các thiết bị Điện thoại, Tablet, Android Auto',
    linkGG:
      'https://play.google.com/store/apps/details?id=com.kt.apps.media.xemtvhttps://play.google.com/store/apps/details?id=com.kt.apps.media.xemtv&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
    descriptionAPK: 'Phiên bản nâng cao hỗ trợ xem bóng đá và IPTV',
    linkAPK: '',
  },
];

export default function Release() {
  const cardList = useMemo(
    () =>
      releaseVersion.map((e) => (
        <ReleaseCard
          logo={e.logo}
          title={e.title}
          version={e.version}
          descriptionGG={e.descriptionGG}
          linkGG={e.linkGG}
          descrptionAPK={e.descriptionAPK}
          linkAPK={e.linkAPK}
        />
      )),
    []
  );
  return (
    <MainLayout>
      <Container>
        <Stack>
          <Title>Các phiên bản</Title>
          <SimpleGrid cols={2}>{cardList}</SimpleGrid>
        </Stack>
      </Container>
    </MainLayout>
  );
}
