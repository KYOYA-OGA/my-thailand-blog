import { useRouter } from 'next/router';
import Link from 'next/link';
import { PER_PAGE } from '../lib/constants';

const Pagination = ({ totalCount }) => {
  const router = useRouter();
  const currentPage = parseInt(router.query.id) || 1;

  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  return (
    <ul className="flex items-center justify-center">
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li
          key={index}
          className={
            currentPage === number
              ? 'bg-gray-600 border border-gray-300 text-white hover:bg-gray-400  ml-0  leading-tight'
              : 'bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0  leading-tight'
          }
        >
          <Link href={`/pages/${number}`}>
            <a className="block py-3 px-4">{number}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
