import { NextPage, NextPageContext } from "next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ServicePage from "../../components/adminSide/servicePage/servicePage";
import { AdminPagePath } from "../../contants/pagePath";
import { ServiceFuntions } from "../../database";
import { setPageName } from "../../redux/pageSlide";

interface Props {
  page: string;
  params: any;
}

const handlePage = (page: string, params: any) => {
  switch (page) {
    case AdminPagePath.service: {
      return <ServicePage {...params} />;
    }
    default: {
      return <>This is {page} page</>;
    }
  }
};

const DashboardPage: NextPage<Props> = ({ page, params }) => {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(setPageName(page));
  }, []);

  return <>{handlePage(page, params)}</>;
};

export default DashboardPage;

export const getServerSideProps = async (context: NextPageContext) => {
  const { page } = context.query;
  let params = {};
  switch (page) {
    case AdminPagePath.service: {
      const services = await ServiceFuntions.getByQuery({
        query: {
          status: true,
        },
        page: 0,
        limit: process.env.LIMIT_RECORDS ? +process.env.LIMIT_RECORDS : 10,
        sort: {
          createdAt: -1,
        },
      });
      params = { ...params, services };
      break;
    }
    case AdminPagePath.dashboard: {
      break;
    }
    default: {
      return {
        notFound: true,
      };
    }
  }

  return {
    props: { page, params: JSON.parse(JSON.stringify(params)) },
  };
};
