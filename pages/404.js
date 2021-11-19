import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Container from '../components/container';
import Layout from '../components/layout';
import Intro from '../components/intro';
import Seo from '../components/seo';

const notFound = () => {
  return (
    <>
      <Layout>
        <Seo
          pageTitle={'404 - こっそり生きる。'}
          pageImg={'/images/not-found.svg'}
        />
        <Container>
          <Intro />
          <div className="text-center">
            <Image
              src="/images/not-found.svg"
              width="300"
              height="300"
              alt="404"
            />
            <p className="mt-5">おっと…存在しないページのようです。</p>
            <div className="mt-8 md:mt-10">
              <Link href={`/`}>
                <a className="btn-primary">ホームに戻る</a>
              </Link>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default notFound;
