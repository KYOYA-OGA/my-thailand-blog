import Head from 'next/head';

import Container from '../../components/container';
import Intro from '../../components/intro';
import { getAllPosts, getTotalPosts } from '../../lib/api';
import Pagination from '../../components/pagination';
import PostGrid from '../../components/post-grid';
import { PER_PAGE } from '../../lib/constants';
import Seo from '../../components/seo';

export default function BlogPageId({ paginatedPosts }) {
  const totalCount = paginatedPosts.pageInfo.offsetPagination.total;
  const posts = paginatedPosts.edges;

  return (
    <>
      <Seo />
      <Container>
        <Intro />
        {posts.length > 0 && <PostGrid posts={posts} />}
        <div className="text-center mb-12 md:mb-20">
          <Pagination totalCount={totalCount} />
        </div>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const totalPosts = await getTotalPosts();

  const range = (start, end) => {
    return [...Array(end - start + 1)].map((_, i) => start + i);
  };

  const paths = range(1, Math.ceil(totalPosts.total / PER_PAGE)).map(
    (pageNum) => `/pages/${pageNum}`
  );

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const pageOffset = (id - 1) * PER_PAGE;
  const paginatedPosts = await getAllPosts(pageOffset, PER_PAGE);
  return {
    props: { paginatedPosts },
  };
}
