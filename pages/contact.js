import Container from '../components/container';
import Layout from '../components/layout';
import Intro from '../components/intro';
import Seo from '../components/seo';

import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    if (honeypot !== '') return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          setSuccess(true);
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
        },
        (error) => {
          console.log(error.text);
          setError(true);
        }
      );
  }
  return (
    <>
      <Layout>
        <Seo pageTitle={'お問い合わせ - こっそり生きる。'} />
        <Container>
          <Intro />
          <div className="md:text-center">
            <h2 className="text-2xl md:text-3xl">お問い合わせ</h2>
            <p className="mt-3">
              できるだけ返信するよう努めますが何卒ご容赦くださいませ😇
            </p>
          </div>
          <section className="mt-10 mb-28 md:mt-16 max-w-3xl mx-auto">
            <form onSubmit={sendEmail}>
              <input type="hidden" name="contactNumber" />
              <input
                type="hidden"
                className="hidden"
                name="honeypot"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />

              <div>
                <label
                  htmlFor="fullName"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  お名前
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  name="fullName"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mt-6 md:mt-8">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  メールアドレス
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                    placeholder="test@test.com"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-6 md:mt-8">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  件名
                </label>
                <input
                  type="text"
                  id="subject"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div className="mt-6 md:mt-8">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  お問い合わせ内容
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                  placeholder="メッセージをどうぞ…"
                  name="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <div className="text-center mt-16">
                <button
                  type="submit"
                  className={
                    !name || !email || !message
                      ? 'pointer-events-none bg-gray-300 btn-secondary w-1/2 md:w-1/3'
                      : 'btn-secondary w-1/2 md:w-1/3'
                  }
                >
                  送信する
                </button>
              </div>

              {success && (
                <p className="my-5 text-center text-success">
                  無事送信されました！
                </p>
              )}
              {error && (
                <p className="my-5 text-center text-red-500">
                  送信に失敗しました。もう一度お試しください。
                </p>
              )}
            </form>
          </section>
        </Container>
      </Layout>
    </>
  );
};

export default Contact;
