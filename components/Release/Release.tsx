'use client';

import React from 'react';
import { Box, Flex, Card, Container, Grid, SimpleGrid, Stack, Title } from '@mantine/core';
import MainLayout from '../MainLayout/MainLayout';
import { IconBrandGooglePlay, IconDeviceTv } from '@tabler/icons-react';

export default function Release() {
  return (
    <MainLayout>
      <Container>
        <Stack>
          <Title>Các phiên bản</Title>
          <SimpleGrid cols={2}>
            <Card>
              <Stack spacing={8}>
                <IconDeviceTv size="2rem" />
                <Title order={2} weight="bold">
                  Phiên bản Smart TV
                </Title>
                <Title order={4}>Version: abc.xyz</Title>

                <button>
                  <Box
                    onClick={() => {
                      console.log('Click');
                    }}
                  >
                    <Flex gap={8} align="center">
                      <IconBrandGooglePlay size="2rem" />
                      <Stack spacing={0.5}>
                        <Title order={6}>GET IT ON</Title>
                        <Title order={4}>Google play</Title>
                      </Stack>
                    </Flex>
                  </Box>
                </button>
              </Stack>
            </Card>
            <Card>
              <Title>Phiên bản Điện thoại</Title>
            </Card>
          </SimpleGrid>
        </Stack>
      </Container>
    </MainLayout>
  );
}
