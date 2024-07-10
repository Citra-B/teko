'use client';

import TekoImage from '@teko/components/image';
import Fetcher from '@teko/helpers/fetcher';
import Link from 'next/link';
import useSWR from 'swr';

// eslint-disable-next-line object-curly-newline
import { Container, Row, Col, Card } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

import TekoNavbar from '@teko/components/navbar';
import TekoFooter from '@teko/components/footer';

import hero from '@teko/public/image/hero.png';
import temanP from '@teko/public/image/teman.png';

import { FiArrowUpRight } from 'react-icons/fi';

const statsFetcher = new Fetcher({ url: 'data?q=stats' });
function Stats() {
  const { data, error } = useSWR(
    statsFetcher.url,
    statsFetcher.fetcher,
    statsFetcher.swrConfig,
  );
  if (error) {
    return (
      <Skeleton
        className="rounded-md z-30 bg-white w-28 mt-8 p-[3vmin] ml-6 shadow-lg sm:w-32 md:w-40 lg:w-52 xl:w-64 xxl:w-80 lg:p-[5vmin] xl:p-[6vmin]"
        containerClassName="flex-grow: 1; flex-direction: row"
        count={4}
      />);
  }
  if (!data) {
    return (
      <Skeleton
        className="rounded-md z-30 bg-white w-28 mt-8 p-[3vmin] ml-6 shadow-lg sm:w-32 md:w-40 lg:w-52 xl:w-64 xxl:w-80 lg:p-[5vmin] xl:p-[6vmin]"
        containerClassName="flex-grow: 1; flex-direction: row"
        count={4}
      />
    );
  }
  return data.map((stat) => (
    <div
      key={stat.name}
      className="rounded-md relative z-30 bg-white w-28 mt-8 p-[3vmin] mx-auto shadow-lg sm:w-32 md:w-40 lg:w-52 xl:w-64 xxl:w-80 lg:p-[5vmin] xl:p-[6vmin] "
    >
      <h1 className="m-0 p-0 text-3xl text-brand xxl:text-4xl">{stat.value}</h1>
      <p className="m-0 p-0 text-brand xxl:text-2xl">{stat.name}</p>
    </div>
  ));
}

const temansFetcher = new Fetcher({ url: 'teman?page=1' });
function Temans() {
  const { data, error } = useSWR(
    temansFetcher.url,
    temansFetcher.fetcher,
    temansFetcher.swrConfig,
  );
  if (error) return <div>failed to load</div>;
  if (!data) {
    return [...Array(4)].map((i) => (
      <Col key={i} className="p-0">
        <Card>
          <Skeleton className="m-3 w-[85%] h-[205px] md:h-[200px]" />
          <Card.Body>
            <Card.Title>
              <Skeleton />
            </Card.Title>
            <Card.Text>
              <Skeleton />
            </Card.Text>
            <Link href={'#'} className="rounded">
              <Skeleton width={60} height={30} />
            </Link>
          </Card.Body>
        </Card>
      </Col>
    ));
  }
  return data.map((teman) => (
    <Link
      href={{
        pathname: `/teman/${teman.id}`,
      }}
      className="no-underline text-black hover:scale-105 transform transition duration-300 ease-in-out"
      key={teman.nama}
    >
      <Col className="p-0" key={teman.id}>
        <Card className="border-brand drop-shadow">
          <TekoImage
            variant="top"
            width="200"
            height="200"
            alt={`logo ${teman.nama}`}
            className="aspect-square object-contain object-center self-center"
          />
          <Card.Body className="h-[200px] border-t border-brand">
            <Card.Title className="block text-ellipsis break-words overflow-hidden max-h-fit">
              {teman.nama}{' '}
            </Card.Title>
            <p className="block text-ellipsis break-words overflow-hidden max-h-[100px]">
              {teman.ringkasan}
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Link>
  ));
}

export default function BerandaPage() {
  return (
    <>
      <TekoNavbar current="Beranda"></TekoNavbar>
      <header>
        <section className="relative">
          <h1 className="font-extrabold text-base text-left w-1/3 absolute bottom-[14%] left-[8%] text-brand xs:text-xl sm:text-2xl md:text-5xl xxl:text-7xl">
            Bersama Membangun Negeri
          </h1>
          <TekoImage className="w-full" src={hero} alt="gambar hero" />
        </section>
      </header>

      <main>
        <Container fluid className="p-0 ">
          <div className="w-full h-[110vmin] relative xs:h-[80vmin] s:h-[60vmin]">
            <div className="w-full h-full bg-brand pt-[19vmin] text-center">
              <h1 className="mb-2 text-3xl text-white lg:text-4xl xxl:text-5xl">
                Ada apa di Teko?
              </h1>
              <p className="text-sm text-white xs:text-base lg:text-xl xxl:text-2xl">
                Menghadirkan layanan informasi yang dapat membantu TEMAN kami
                <br></br> juga keberhasilan bersama yang diselenggarakan oleh
                TEMAN untuk masyarakat
              </p>
            </div>
          </div>
          <Container fluid className="text-center">
            <div className="mt-[-50vmin] flex flex-md-row flex-wrap justify-center xs:mt-[-30vmin] s:mt-[-10vmin] sm:mt-[-17vmin]">
              <Stats />
            </div>
          </Container>
        </Container>

        <section className="flex my-4">
          <div className="mx-auto">
            <div className="flex flex-col items-center min-w-[320px] mx-auto lg:flex-row">
              <section className="w-full text-center text-sm m-2 p-3 lg:w-fit">
                <h1 className="text-brand font-extrabold m-1 text-xl md:text-2xl lg:text-3xl  lg:text-right xl:text-6xl">
                  Teman Kita
                </h1>
                <p className="m-1 md:text-base lg:text-xl lg:text-right xl:text-3xl">
                  Adalah suatu sebutan untuk kami terhadap komunitas yang
                  menjalankan kegiatannya untuk mengabdi kepada masyarakat.
                  Tentunya banyak sekali Teman Kita yang sudah membantu dan
                  terdaftar dalam web kami
                  <br />
                  <Link
                    href={'/teman'}
                    className="font-extrabold no-underline text-brand text-xl lg:text-xxl xl:text-4xl flex justify-center lg:justify-end p-2 lg:p-3"
                  >
                    Lihat Teman
                    <FiArrowUpRight className="h-[4%] w-[4%] xl:w-[5%] xl:h-[5%] text-brand my-auto" />
                  </Link>
                </p>
              </section>
              <div className="w-full flex justify-center">
                <TekoImage
                  className="w-3/5 lg:w-fit "
                  src={temanP}
                  alt="foto about"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <Container className="grid p-0">
            <Row className=" grid m-4 gap-4 s:grid-cols-2 lg:grid-cols-4">
              <Temans />
            </Row>
          </Container>
        </section>
        <section className="flex justify-center my-5">
          <div className="mx-auto">
            <p className="text-brand text-xl xs:text-2xl md:text-3xl xl:text-5xl xxl:text-6xl">
              <span className="font-bold">Mari</span>
              <br />
              kita bersama membantu untuk
              <br className="h-2" />
              <q className="bg-brand text-white text-xxl xl:text-4xl xxl:text-5xl font-bold px-2 py-1 rounded">
                Indonesia yang lebih baik!
              </q>
            </p>
          </div>
        </section>
      </main>

      <TekoFooter></TekoFooter>
    </>
  );
}
