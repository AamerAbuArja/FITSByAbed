import React from 'react';
import { useTranslation } from 'react-i18next';


const Blog = ({changeLanguage }) => {
  const { t, i18n } = useTranslation();
  return (
    <section className="pt-28 pb-16 px-4">
      <h1 className="text-center text-2xl sm:text-3xl font-bold mb-8 text-[#0078B8]">
      {t('Stay_Updated_with_Our_Partners_Tweets')}
      </h1>

      {/* Grid Container for Responsiveness */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
        {/* Microsoft Twitter Feed */}
        <div className="w-full max-w-sm sm:max-w-md mx-auto">
          <h2 className="text-center text-lg sm:text-2xl font-semibold mb-4">Microsoft Twitter Feed</h2>
          <div className="h-96 overflow-y-auto border p-4">
            <a 
              className="twitter-timeline"
              href="https://twitter.com/Microsoft?ref_src=twsrc%5Etfw">
              Tweets by Microsoft
            </a>
            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
          </div>
        </div>

        {/* Epicor Twitter Feed */}
        <div className="w-full max-w-sm sm:max-w-md mx-auto">
          <h2 className="text-center text-lg sm:text-2xl font-semibold mb-4">Epicor Twitter Feed</h2>
          <div className="h-96 overflow-y-auto border p-4">
            <a 
              className="twitter-timeline"
              href="https://twitter.com/Epicor?ref_src=twsrc%5Etfw">
              Tweets by Epicor
            </a>
            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
