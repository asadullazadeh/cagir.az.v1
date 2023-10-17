import React, { useState, useEffect } from "react";
import Image from "next/image";
import download from "@/icons/form/download.svg";
import delete_icon from "@/icons/form/delete.svg";

const Download_image = ({ messages, onImageUpload }) => {
  const [uploadImage, setUploadImage] = useState({
    imageData: null,
    imageBase64: "",
  });

  const [deleteBtn, setDeleteBtn] = useState(false);

  const handleClick = () => {
    // setDeleteBtn((prev) => !prev)
    setUploadImage({
      imageData: null,
      imageBase64: "",
    });
  };

  useEffect(() => {
    if (uploadImage.imageData) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newUploadImage = { ...uploadImage, imageBase64: e.target.result };
        setUploadImage(newUploadImage);
        onImageUpload(newUploadImage); // Pass the data up to the parent
        // console.log("Base64 Image:", e.target.result);
      };
      reader.readAsDataURL(uploadImage.imageData);
    } else {
      setUploadImage("");
    }
  }, [uploadImage.imageData, onImageUpload]);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setUploadImage((prevState) => ({
        ...prevState,
        imageData: e.target.files[0],
      }));
    }
  };

  
  return (
    <div className="flex flex-col gap-y-[5px]  ">
      <p className="hidden lg:block font-semibold text-[12px] leading-[18px] text-black500">
        {messages["upload-image"]}
      </p>

      <div className="flex flex-row justify-between w-full border-2 border-cagiraz border-dashed rounded-[10px] lg:rounded-full h-[40px] px-[16px]">
        <label
          htmlFor="dropzone-file"
          className="flex flex-row justify-between items-center  space-x-[16px]  cursor-pointer  w-full"
        >
          <div className="flex flex-row gap-x-[15px] sm:gap-x-[30px] lg:gap-x-[15px]  items-center">
            <Image src={download} alt="download_icon" />

            {uploadImage?.imageData?.name ? (
              <p className="font-semibold text-[10px] leading-[15px] text-gray900">
                {uploadImage.imageData.name}
              </p>
            ) : (
              <>
                <p className="font-semibold text-[10px] leading-[15px] text-gray900">
                  Şəkil yüklə (Ətraflı məlumat üçün)
                </p>
              </>
            )}
          </div>

          <input
            placeholder="Şəkil yüklə (Ətraflı məlumat üçün)"
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
        <button onClick={handleClick}>
          <Image src={delete_icon} alt="delete_icon" className="" />
        </button>
      </div>
    </div>
  );
};

export default Download_image;
