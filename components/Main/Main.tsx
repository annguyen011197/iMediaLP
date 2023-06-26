'use client';

import { Group, BackgroundImage, Title, Container, SimpleGrid, Box, Flex, Stack, Grid, Image } from '@mantine/core'
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

      <Container size='lg' px='xs' mt={20}>
        <Grid columns={5} mih='60vh'>
          <Grid.Col span={3}>
            <Flex direction={'column'} h={'100%'} justify={'center'} gap={'md'}>
              <Title order={1} className={classes.brandName}>
                Trải nghiệm Tivi, Bóng đá, IPTV miễn phí - Giải trí trong lòng bàn tay!
              </Title>
              <Title order={3}>
                Xem gần 200 kênh Truyền hình trong nước và quốc tế
                <br/>
                <br/>
                Trực tiếp bóng đá Ngoại Hạng Anh, UEFA Champions League, LaLiga, Ligue 1, Bundesliga, V League,...
              </Title>
            </Flex>
          </Grid.Col>
          <Grid.Col span={2}>
            <Flex direction={'column'} h={'100%'} justify={'center'}>
              <Image src='/introduce.png' alt='image' mx='auto' />
            </Flex>
          </Grid.Col>
        </Grid>
      </Container>
    </BackgroundImage>
  );
};

export default Main;
