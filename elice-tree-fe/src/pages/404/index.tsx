import { Helmet } from 'react-helmet-async';

const TITLE_PAGE = 'Elice Tree | 404 Not Found';

export default function Page404() {
  return (
    <>
      <Helmet>
        <title>{TITLE_PAGE}</title>
      </Helmet>
      잘못된 접근입니다...
    </>
  );
}
