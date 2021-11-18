import Avatar from '../components/avatar';
import Date from '../components/date';
import CoverImage from '../components/cover-image';
import PostTitle from '../components/post-title';
import Categories from '../components/categories';

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>

      <div className="text-center mb-8 md:mb-16 sm:mx-0">
        {coverImage && <CoverImage title={title} coverImage={coverImage} />}
      </div>
      <div className="">
        <div className="mb-6 text-lg">
          <p>投稿日: {date && <Date dateString={date} />}</p>
          <p>
            カテゴリー:
            <Categories categories={categories} />
          </p>
        </div>
      </div>
    </>
  );
}
