import React from 'react';
import Content from '../component/Content';
import Footer from '../component/Footer';
import Header from '../component/Header';

const Page = (props) => {
  const { isDark, setIsDark } = props;
  console.log(isDark);
  return (
    <div className="page">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Page;
