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
  glowImage: {
    boxShadow: '0px 0px 5px #fff',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
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
      {/* Header */}
      <Container className={classes.header} fluid>
        <Container size="lg" px="xs">
          <LogoName />
        </Container>
      </Container>

      <Container size="lg" px="xs" mt={20}>
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
              Trực tiếp bóng đá Ngoại Hạng Anh, UEFA Champions League, LaLiga, Ligue 1, Bundesliga,
              V League,...
            </Title>
          </Flex>
          <Flex gap={20} justify="center">
            <Button radius="md" size="xl" className={classes.glowImage}>
              Tải phiên bản trên TV
            </Button>
            <Button radius="md" size="xl" className={classes.glowImage}>
              Tải phiên bản trên điện thoại
            </Button>
          </Flex>
        </Stack>
      </Container>
    </BackgroundImage>
  );
};

export default Main;
