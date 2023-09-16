import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import RelatedBlogs from "@/src/components/blog/relatedBlogs";
import CategoriesBlog from "@/src/components/blog/categoriesBlog";
import TagsBlog from "@/src/components/blog/tagsBlog";
import SocialNetworks from "@/src/components/others/social_ntwrks";
import ModalStandart from "@/src/components/modal/modal_stand";
import InputBtnNbTransition from "@/src/components/input/input_btn_nb_transition";

export async function getServerSideProps(context) {
  const { blogId } = context.query;
  let responseData = {};

  try {
    const response = await axios.get(
      `https://api.cagir.az/api/post/detail?id=${blogId}`,
      {
        headers: { "Accept-Language": "az" },
      }
    );
    responseData = response.data.result;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return { props: { initialData: responseData } };
}

function BlogPost({ initialData }) {
  const {
    query: { blogId },
    locales,
  } = useRouter();
  const intl = useIntl();
  const { locale: chosenLang, messages } = intl;

  const {
    id,
    imageUrl,
    adImageUrl,
    viewCount,
    insertDate,
    postNames,
    tags,
    categoryId,
    category,
  } = initialData;
  console.log(postNames[0].title);
  const { description, shortDescription, postId, title } = postNames?.length
    ? postNames[0]
    : {};

  const subject = category?.categoryNames?.[0]?.name || "Default Value";

  return (
    <div>
      <Head>
        <title>{postNames[0].title}</title>
      </Head>
      <div className="flex flex-col lg:flex-row gap-x-[40px] xl:gap-x-[50px] 2xl:gap-x-[60px] pt-[25px] pb-[60px] lg:pb-[90px]">
        {/* Main Content */}
        <div className="w-full lg:w-2/3 pb-[30px] lg:pb-0">
          <SocialNetworks classNames="hidden lg:flex flex-row gap-x-[20px] pb-[30px]" />
          <Image
            src={`https://api.cagir.az${imageUrl}`}
            alt={title}
            width={900}
            height={900}
          />
          <div className="flex justify-between pt-5 lg:pt-30 pb-15 lg:pb-30">
            <p className="text-gray900 font-medium lg:font-semibold text-8 lg:text-14 leading-12 lg:leading-21">
              {insertDate?.slice(0, 10)}
            </p>
            <p className="text-cagiraz font-semibold text-10 lg:text-18 leading-15 lg:leading-27">
              Baxış: {viewCount}
            </p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: description }} />
          <SocialNetworks classNames="flex flex-row gap-x-[20px] pt-[10px] lg:pt-[30px]" />
        </div>
        {/* Sidebar */}
        <div className="w-full lg:w-1/3 flex flex-col gap-y-[40px] lg:gap-y-[40px]">
          <RelatedBlogs
            {...{ blogId, categoryId, subject, messages, chosenLang }}
          />
          <CategoriesBlog {...{ messages, chosenLang }} />
          <TagsBlog {...{ blogId, messages, chosenLang }} />
          <Image
            src={`https://api.cagir.az${adImageUrl}`}
            alt="Ad Image"
            width={424}
            height={512}
          />
          <ModalStandart
            dialogId="my_modal_3"
            content={<InputBtnNbTransition name={messages["fast-order"]} />}
          />
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
