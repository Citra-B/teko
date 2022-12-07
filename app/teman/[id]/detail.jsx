'use client';

// import Image from 'next/image';
import Link from 'next/link';

import { Container, Card, Alert } from 'react-bootstrap';
import LoadingX from '@teko/components/loading';

import Fetcher from '@teko/helpers/fetcher';
import useSWR from 'swr';

import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
} from 'react-icons/ai';
import { BsGlobe } from 'react-icons/bs';
import { GrFormNextLink } from 'react-icons/gr';

function Platform({ platform }) {
  if (platform === 'facebook' || platform === 'meta') {
    return <AiFillFacebook className="h-[30px] w-[70px] text-brand" />;
  }
  if (platform === 'twitter') {
    return <AiFillTwitterCircle className="h-[30px] w-[70px] text-brand" />;
  }
  if (platform === 'instagram') {
    return <AiFillInstagram className="h-[30px] w-[70px] text-brand" />;
  }
  return <BsGlobe className="h-[20px] w-[20px] text-brand" />;
}

export default function TemanDetail({ id }) {
  const temanIdFetcher = new Fetcher({
    id,
    url: 'teman',
  });
  const { data, error } = useSWR(
    temanIdFetcher.url,
    temanIdFetcher.fetcher,
    temanIdFetcher.swrConfig,
  );
  if (error) {
    return (
      <Alert key="danger" variant="danger">
        {' '}
        Error fetching data{' '}
      </Alert>
    );
  }
  if (!data) {
    return (
      <div className='w-screen h-[70vh] flex align-middle self-center justify-center justify-items-center justify-content-center'>
        <div className='m-auto'>
          <LoadingX type='ball-clip'></LoadingX>
        </div>
      </div>
    );
  }
  return (
    <>
      <Container fluid className="flex flex-col text-center justify-center">
        <Container className="flex justify-center">
          <img
            className="w-full h-[150px] mb-3 rounded md:h-[200px] md:w-[200px] object-cover object-center"
            src={data.logo}
            alt="gambar hero"
          />
        </Container>
        <Container className="flex flex-col justify-center overflow-auto">
          <h1>{data.nama}</h1>
          <h2 className="text-second">
            {data.Kategori.map((item) => `#${item.nama} `)}
          </h2>

          <div className="overflow-clip">
            <h1>{data.deskripsi}</h1>
          </div>
        </Container>
      </Container>
      <Container className="flex flex-col text-center">
        <h3 className="bg-brand w-full center text-white py-2 rounded">
          Kegiatan
        </h3>
      </Container>
      <Container className="text-center flex flex-col mt-2 mb-4 md:grid md:grid-cols-2 md:gap-4">
        {data.Kegiatan.map((item) => (
          <Card key={item.id} className="text-center">
            <Card.Body>
              <Card.Title>{item.nama}</Card.Title>
              <Card.Text className="overflow-hidden">
                {item.ringkasan}
              </Card.Text>
              <Link
                href={{
                  pathname: `/kegiatan/${item.id}`,
                }}
                className="bg-brand border-brand no-underline px-3 py-2 text-white rounded"
              >
                Selengkapnya
              </Link>
            </Card.Body>
            <Card.Footer className="text-muted">{item.updatedAt}</Card.Footer>
          </Card>
        ))}
      </Container>
      <Container className="flex flex-col text-center">
        <h3 className="bg-brand w-full center text-white py-2 rounded">
          Media Sosial
        </h3>
      </Container>
      <Container className="grid gap-3 md:grid-cols-3 mb-4">
        {data && data.SosialMedia.map((sosmed) => (
          <Card key={sosmed.id} style={{ width: '18rem' }}>
            <Card.Body>
              <Container className="grid grid-cols-2 justify-between p-0">
                <Container className="flex flex-row">
                  <Card.Title className="m-auto">
                    <Platform platform={sosmed.platform} />
                  </Card.Title>
                  <Card.Title className="m-auto">{sosmed.nama}</Card.Title>
                </Container>
                <Link
                  href={sosmed.url}
                  className="bg-white border border-brand rounded text-white m-auto p-2"
                >
                  <GrFormNextLink className="h-[30px] w-[30px]" />
                </Link>
              </Container>
            </Card.Body>
          </Card>
        ))}
      </Container>
      {/* fb,ig,twt,web, email */}
    </>
  );
}