import Head from 'next/head';
import Link from 'next/link';

import { PER_PAGE } from '../lib/constants';

import Container from '../components/container';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Pagination from '../components/pagination';
import PostGrid from '../components/post-grid';

export default function Index({ allPosts: { edges, pageInfo }, preview }) {
  const totalCount = pageInfo.offsetPagination.total;

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>こっそり生きる。</title>
        </Head>
        <Container>
          <Intro />
          {edges.length > 0 && <PostGrid posts={edges} />}
          <div className="text-center mb-12 md:mb-20">
            <Pagination totalCount={totalCount} />
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPosts(0, PER_PAGE, preview);

  return {
    props: { allPosts, preview },
  };
}
