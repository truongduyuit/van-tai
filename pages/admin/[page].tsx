import { NextPage, NextPageContext } from "next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  ContactInfoPage,
  LoginPage,
  PostPage,
  ServicePage,
} from "../../components";
import { AdminLayout } from "../../components/Layouts/AdminLayout";
import { DefaultQuery } from "../../contants";
import { AdminPagePath } from "../../contants/pagePath";
import {
  ContactInfoFunction,
  MongooseBaseService,
  PostFuntions,
  ServiceFuntions,
} from "../../database";
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
    case AdminPagePath.post: {
      return <PostPage {...params} />;
    }
    case AdminPagePath.login: {
      return <LoginPage {...params} />;
    }
    case AdminPagePath.contactInfo: {
      return <ContactInfoPage {...params} />;
    }
    default: {
      return <AdminLayout>This is {page} page</AdminLayout>;
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
      const services = await ServiceFuntions.getByQuery(DefaultQuery);
      params = { ...params, services };
      break;
    }
    case AdminPagePath.post: {
      const posts = await PostFuntions.getByQuery(DefaultQuery);
      params = { ...params, posts };
      break;
    }
    case AdminPagePath.contactInfo: {
      const contactInfo = await ContactInfoFunction.getOne({});
      params = { ...params, contactInfo };
      break;
    }
    case AdminPagePath.dashboard: {
      break;
    }
    case AdminPagePath.login:
      break;
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
