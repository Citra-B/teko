'use client';

import Image from 'next/image';

import { Container, Form, Button } from 'react-bootstrap';

import formBg from '@teko/public/image/formBg.jpg';

export default function DaftarLembaga() {
  return (
    <>
      <div>
        <Container className="bg-white border rounded p-0 w-[95%] my-[20px]">
          <div className="flex flex-col">
            <div className="relative">
              <h1 className="font-extrabold text-3xl text-left w-1/3 absolute bottom-[8%] left-[8%] text-white md:text-5xl">
                Selamat Datang
              </h1>
              <Image
                className="w-full h-[200px] rounded"
                src={formBg}
                alt="gambar hero"
              />
            </div>
            <div className="flex flex-col py-3">
              <Form>
                <Form.Group className="my-2 mx-3" controlId="formBasicNama">
                  <Form.Label>Masukan nama Lembaga</Form.Label>
                  <Form.Control type="email" placeholder="Masukan Nama" />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group className="my-2 mx-3" controlId="formBasicEmail">
                  <Form.Label>Alamat Email</Form.Label>
                  <Form.Control type="email" placeholder="Masukan Email" />
                  <Form.Text className="text-muted">
                    Kami tidak akan membagikan email Anda.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="my-2 mx-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="my-2 mx-3" controlId="formBasicCheckbox">
                  <Form.Label>Bergerak di bidang,</Form.Label>
                  {['Kemanusiaan', 'Sosial', 'Lingkungan'].map((type) => (
                    <Form.Check
                      key={type}
                      type="checkbox"
                      id={`default-${type}`}
                      label={type}
                      name="genderRadio"
                      value={type}
                    />
                  ))}
                </Form.Group>
                {/* <Form.Group className="my-2 mx-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Kemanusiaan" />
                </Form.Group>
                <Form.Group className="my-2 mx-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Sosial" />
                </Form.Group>
                <Form.Group className="my-2 mx-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Lingkungan" />
                </Form.Group> */}
                <Button
                  type="submit"
                  className="bg-brand border-brand hover:bg-[#14532d] my-2 mx-3"
                >
                  Daftar
                </Button>
              </Form>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
