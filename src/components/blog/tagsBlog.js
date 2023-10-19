import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const titleClasses = "font-semibold lg:font-bold text-[16px] lg:text-[20px] lg:leading-[30px] leading-[24px] pb-[15px] pt-[30px] lg:pt-0 text-center lg:text-start border-t border-[#EAEAEA] lg:border-none";
const tagClasses = "font-medium lg:font-semibold text-[12px] leading-[15px] border border-cagiraz rounded-[5px] py-[2px] lg:py-[4px] px-[8px] lg:px-[10px] text-cagiraz";
const tagContainerClasses = "flex flex-row flex-wrap gap-[10px] lg:gap-[15px]";

const fetchTags = async (blogId) => {
  try {
    const response = await axios.get(`https://api.cagir.az/api/post/detail?id=${blogId}`, {
      headers: {
        "Accept-Language": "az",
      },
    });
    return response.data.result;
  } catch (error) {
    console.error(error);
    return {};
  }
};

const Tag = ({ name }) => (
  <div>
    <Link href={`/blog/tag/${name}`}>
      <p className={tagClasses}>{name}</p>
    </Link>
  </div>
);

const TagsBlog = ({ blogId,messages }) => {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchTags(blogId);
      setResponseData(data);
    })();
  }, [blogId]);

  const { tags } = responseData;

  return (
    <div>
      <h4 className={titleClasses}>{messages.tags}</h4>
      {tags && tags.length > 0 ? (
        <div className={tagContainerClasses}>
          {tags.map((tag, index) => <Tag key={index} name={tag.name} />)}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TagsBlog;
