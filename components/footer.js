import Container from './container';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="brick-bg border-t border-accent-2">
      <Container>
        <div className="py-10 grid grid-cols-1 md:grid-cols-2">
          <div>
            <p>
              ふらりとタイ移住したWeb系エンジニアの記録です。
              <br />
              人生どうにかなるといいですね。
            </p>
            <div className="flex items-center mt-3">
              <Image
                src="/images/kyoya.png"
                width="100"
                height="100"
                alt="kyoya"
                className="rounded-full"
              />
              <div className="ml-5">
                <h2>KYOYA</h2>
                <p>若いおじさん</p>
              </div>
            </div>
          </div>
          <div className="mt-5 md:mt-0 space-y-3 md:space-y-6">
            <p>
              技術ブログもやってます→
              <a
                href="https://www.kyoya.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-success hover:opacity-80 ml-2"
              >
                KyoyaDev Blog
              </a>
            </p>
            <div className="flex items-center">
              <p>お問い合わせはこちらへ→</p>
              <Link href={`/contact`}>
                <a className="font-semibold text-success hover:opacity-80 ml-2">
                  お問い合わせ
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
