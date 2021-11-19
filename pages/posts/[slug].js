import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Link from 'next/link';

import parse from 'html-react-parser';

import Container from '../../components/container';
import PostBody from '../../components/post-body';
import Header from '../../components/header';
import PostHeader from '../../components/post-header';
import Layout from '../../components/layout';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import PostTitle from '../../components/post-title';
import Head from 'next/head';
import { CMS_NAME } from '../../lib/constants';
import Tags from '../../components/tags';

export default function Post({ post, posts, preview }) {
  const { seo } = post;
  const yoastHead = parse(seo.fullHead);
  const router = useRouter();
  // const morePosts = posts?.edges;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container post>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="max-w-4xl mx-auto">
              <Head>{yoastHead}</Head>
              <div className="bg-white py-10 px-4 md:px-6 rounded-md shadow-lg">
                <PostHeader
                  title={post.title}
                  coverImage={post.featuredImage?.node}
                  categories={post.categories}
                  date={post.date}
                />
                <PostBody content={post.content} />
              </div>
              <footer>
                {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
              </footer>
            </article>

            <div className="my-12 mb-20 md:my-20 text-center">
              <Link href={`/`}>
                <a className="btn-primary">ホームに戻る</a>
              </Link>
            </div>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData);
  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: false,
  };
}
