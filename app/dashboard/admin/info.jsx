import Fetcher from '@teko/helpers/fetcher';
import useSWR from 'swr';

export default function Info() {
  const userFetcer = new Fetcher('user');
  const { data } = useSWR(
    userFetcer.url,
    userFetcer.fetcher,
    userFetcer.swrConfig,
  );
  if (!data) {
    return (
      <div className="m-auto md:flex md:flex-row">
        {/* TODO style dibawah ini */}
        <h3 className="text-sm font-bold text-brand mr-4"> Belum Login </h3>
        <h3 className="text-sm text-brand"> Silahkan Login </h3>
      </div >
    );
  }
  return (
    <div className="m-auto md:flex md:flex-row">
      <h3 className="text-lg font-bold text-brand mr-4">
        {data.name} <span className="font-light">| {data.email} </span>
      </h3>
    </div>
  );
}