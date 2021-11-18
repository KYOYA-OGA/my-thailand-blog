import Link from 'next/link';

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between my-16">
      <Link href={`/`}>
        <a>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8 font-kaisei">
            こっそり生きる。
          </h1>
        </a>
      </Link>

      <h4 className="text-center md:text-left text-lg mt-3 md:pl-8">
        タイ田舎暮らし雑記帳
      </h4>
    </section>
  );
}
