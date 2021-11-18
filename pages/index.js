import Head from 'next/head';
import Container from '../components/container';
import MoreStories from '../components/more-stories';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPostsForHome } from '../lib/api';

export default function Index({ allPosts: { edges }, preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>こっそり生きる。</title>
        </Head>
        <Container>
          <Intro />
          {edges.length > 0 && <MoreStories posts={edges} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
  };
}
