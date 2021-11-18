import Date from '../components/date';
import PostTitle from '../components/post-title';
import Categories from '../components/categories';

import Image from 'next/image';

export default function PostHeader({ title, coverImage, date, categories }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>

      {coverImage && (
        <div className="text-center mb-8 md:mb-16 sm:mx-0">
          {/* {coverImage && <CoverImage title={title} coverImage={coverImage} />} */}
          <Image
            width={900}
            height={600}
            alt={`Cover Image for ${title}`}
            src={coverImage?.sourceUrl}
            className="w-full max-w-full"
          />
        </div>
      )}

      <div className="mb-6 text-lg flex items-center space-x-5 md:space-x-8 justify-center">
        <p className="bg-blue-100 text-blue-800 text-base font-medium inline-flex items-center px-4 py-2  rounded-md">
          <svg
            className="w-3 h-3 mr-1 text-blue-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            ></path>
          </svg>
          {date && <Date dateString={date} />}
        </p>
        <p>
          <Categories categories={categories} />
        </p>
      </div>
    </>
  );
}
