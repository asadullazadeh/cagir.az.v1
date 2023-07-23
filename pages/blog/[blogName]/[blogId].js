import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import RelatedBlogs from "@/src/components/main/relatedBlogs";
import CategoriesBlog from "@/src/components/main/categoriesBlog";
import TagsBlog from "@/src/components/main/tagsBlog";
import SocialNetworks from "@/src/components/others/social_ntwrks";
import ModalStandart from "@/src/components/modal/modal_stand";
import InputBtnNbTransition from "@/src/components/input/input_btn_nb_transition";

function BlogPost() {
  const [responseData, setResponseData] = useState([]);
  const router = useRouter();
  const { query } = router;
  const { blogId } = query;
  // console.log(blogId);  service/getAllForFront

  useEffect(() => {
    axios
      .get(`https://api.cagir.az/api/post/detail?id=${blogId}`, {
        headers: {
          "Accept-Language": "az",
        },
      })
      .then((response) => {
        // Handle the response data
        setResponseData(response.data.result);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, [blogId, query, router]);
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
  } = responseData;

  const { description, shortDescription, postId, title } =
    responseData.postNames && responseData.postNames.length > 0
      ? responseData.postNames[0]
      : {};

  // subject is the category name
  const subject = category?.categoryNames?.[0]?.name ?? "Default Value";
  // console.log(responseData);
  return (
    <div
      className="flex flex-col lg:flex-row lg:gap-x-[40px] xl:gap-x-[50px] 2xl:gap-x-[60px] 
    pb-[60px] lg:pb-[90px]"
    >
      {/* Left part-a full blog description */}
      <div
        className="w-full lg:w-2/3 pb-[30px] lg:pb-0 
      drop-shadow-card lg:drop-shadow-none lg:hover:drop-shadow-card transition duration-300"
      >
        <SocialNetworks classNames="hidden lg:flex flex-row gap-x-[20px] pb-[30px]" />
        <Image
          width={300}
          height={300}
          src={`https://api.cagir.az${imageUrl}`}
          // src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80"
          alt={title}
          className="rounded-[20px] w-full aspect-[300/164] lg:aspect-[908/499]"
        />
        <div className="flex flex-row justify-between pt-[5px] lg:pt-[30px] pb-[15px] lg:pb-[30px]">
          <p className="font-medium lg:font-semibold text-[8px] lg:text-[14px] leading-[12px] lg:leading-[21px] text-gray900">
            {insertDate ? insertDate.slice(0, 10) : ""}
          </p>
          <p className="font-semibold text-[10px] lg:text-[18px] leading-[15px] lg:leading-[27px] text-cagiraz">
            Baxış: {viewCount}
          </p>
        </div>
        {/* <h3 className="my-h2 pb-[5px] lg:pb-[30px]">{title}</h3> */}

        <div dangerouslySetInnerHTML={{ __html: description }} />

        <SocialNetworks classNames="flex flex-row gap-x-[20px] pt-[10px] lg:pt-[30px]" />
      </div>
      <div className="w-full lg:w-1/3 flex flex-col lg:gap-y-[40px]">
        {/* Oxsar yazilar */}
        <RelatedBlogs
          blogId={blogId}
          categoryId={categoryId}
          subject={subject}
        />
        <CategoriesBlog />
        {/* tags */}
        <TagsBlog blogId={blogId} />
        {/*  */}
        <Image
          onClick={() => window.my_modal_3.showModal()}
          className="w-full h-auto hidden lg:block"
          alt="adImageUrl"
          width={200}
          height={200}
          src={`https://api.cagir.az${adImageUrl}`}
        />
        <ModalStandart
          dialogId="my_modal_3"
          content={<InputBtnNbTransition name="Sürətli sifariş" />}
        />

        {/*  */}
      </div>
    </div>
  );
}

export default BlogPost;