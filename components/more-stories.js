import PostPreview from '../components/post-preview';

export default function MoreStories({ posts }) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-8 md:gap-x-8 lg:gap-10 mb-32">
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage?.node}
            author={node.author?.node}
            date={node.date}
            slug={node.slug}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
