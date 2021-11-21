import Date from '../components/date';
import CoverImage from './cover-image';
import Link from 'next/link';
import Image from 'next/image';

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <div className="shadow-lg flex flex-col h-full rounded-md overflow-hidden">
      <div className="text-center">
        {coverImage ? (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        ) : (
          <Link href={`/posts/${slug}`}>
            <a aria-label={title}>
              <Image
                src="/images/under-construction.jpg"
                width={350}
                height={200}
                alt="準備中"
                className="object-cover"
              />
            </a>
          </Link>
        )}
      </div>
      <div className="flex-grow h-full flex flex-col py-3 pb-8 px-5">
        <h3 className="text-2xl mb-3">
          <Link href={`/posts/${slug}`}>
            <a
              className="hover:text-success"
              dangerouslySetInnerHTML={{ __html: title }}
            ></a>
          </Link>
        </h3>
        <div className="text-lg mb-4">{date && <Date dateString={date} />}</div>
        <div
          className="text-lg leading-relaxed mb-8"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
        <div className="mt-auto">
          <Link href={`/posts/${slug}`}>
            <a className="btn-primary">もっと読む</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
