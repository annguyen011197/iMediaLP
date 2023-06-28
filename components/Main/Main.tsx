'use client';

import { Title, Flex, Stack, Image, Button } from '@mantine/core';
import { createStyles } from '@mantine/styles';
import { IconDownload } from '@tabler/icons-react';
import MainLayout from '../MainLayout/MainLayout';
import { useRouter } from 'next/navigation';

const useStyles = createStyles(() => ({
  wrapper: {
    minHeight: '100%',
    minWidth: '100%',
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

const Main = () => {
  const { classes } = useStyles();
  const router = useRouter();
  return (
    <MainLayout>
      <Stack>
        <Flex direction="column" h="100%" justify="center">
          <Image src="/tv.png" alt="image" />
        </Flex>
        <Flex direction="column" h="100%" justify="center" gap="md">
          <Title order={1} size={40} className={classes.brandName} align="center">
            Trải nghiệm Tivi, Bóng đá, IPTV miễn phí <br /> Giải trí trong lòng bàn tay!
          </Title>
          <Title order={3} align="center">
            Xem gần 200 kênh Truyền hình trong nước và quốc tế
            <br />
            <br />
            Trực tiếp bóng đá Ngoại Hạng Anh, UEFA Champions League, LaLiga, Ligue 1, Bundesliga, V
            League,...
          </Title>
        </Flex>
        <Flex gap={20} justify="center" mt={32}>
          <Button
            radius="md"
            size="xl"
            className={classes.glowImage}
            rightIcon={<IconDownload size="2rem" stroke={1.5} />}
            onClick={() => {
              router.push('/release');
            }}
          >
            Trải nghiệm ngay
          </Button>
        </Flex>
      </Stack>
    </MainLayout>
  );
};

export default Main;
