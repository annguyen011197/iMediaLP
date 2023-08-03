'use client';

import React, { useCallback, useMemo, useState } from 'react';
import MainLayout from '../MainLayout/MainLayout';
import {
  Card,
  Container,
  List,
  Stack,
  Title,
  Text,
  Group,
  Image,
  Notification,
  px,
  Button,
  Affix,
  Flex,
} from '@mantine/core';
import { IconCopy } from '@tabler/icons-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import resources from '../../app/resource/resources.json';

export default function IPTV() {
  const [copiedStr, setCopiedStr] = useState('');
  const [isShowNotif, setIsShowNotif] = useState(false);
  const timeoutIdRef = React.useRef<NodeJS.Timeout>();
  const notify = useCallback(
    (str: string) => () => {
      setCopiedStr(str);
      setIsShowNotif(true);
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = setTimeout(() => {
        setCopiedStr('');
        setIsShowNotif(false);
      }, 1000);
    },
    []
  );
  const cardList = useMemo(
    () =>
      resources.iptv.map((e) => (
        <Card>
          <Stack spacing={8}>
            <Title order={2} weight="bold">
              {e.title}
            </Title>

            <List spacing={8}>
              {e.links.map((link) => (
                <List.Item>
                  <Group>
                    <Text>{link}</Text>
                    <Group>
                      <CopyToClipboard text={link} onCopy={notify(link)}>
                        <Button variant="gray" p={0}>
                          <IconCopy cursor="pointer" size="1.2rem" />
                        </Button>
                      </CopyToClipboard>

                      <Button
                        variant="gray"
                        p={0}
                        onClick={() => {
                          window.open('xemtv://tv/dashboard');
                        }}
                      >
                        <Image src="/imedia_outline.svg" width={px('1.2rem')} />
                      </Button>
                    </Group>
                  </Group>
                </List.Item>
              ))}
            </List>
          </Stack>
        </Card>
      )),
    []
  );
  return (
    <MainLayout>
      <Container>
        <Stack>
          <Title>Danh sách IPTV gợi ý</Title>
          {isShowNotif && (
            <Affix position={{ bottom: 20, left: 20 }}>
              <Notification withCloseButton={false} color="gray">
                {`Đã copy ${copiedStr}`}
              </Notification>
            </Affix>
          )}
          {cardList}
        </Stack>
      </Container>
    </MainLayout>
  );
}
