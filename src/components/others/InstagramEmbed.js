import React from "react";

function InstagramEmbed({ embedLink }) {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//www.instagram.com/embed.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [embedLink]);

  return (
    <blockquote
      className="instagram-media bg-white border-0 shadow-md mx-1 w-[150px]"
      data-instgrm-permalink={embedLink}
    >
      <div className="">
        <a
          href={embedLink}
          className="bg-white block w-full text-center"
          target="_blank"
          rel="noreferrer"
        >
          {/* You can add any design or child components within this link */}
          <div className="py-5">
            <p
              // src="path/to/your/loader/image"
              // alt="Loading..."
              className="mx-auto w-10 h-10"
            />
            <p className="mt-4 text-sm text-gray-400">Loading...</p>
          </div>
        </a>
        {/* <p className="text-gray-300 font-normal text-base leading-4.25 my-2 overflow-hidden px-2 py-1.5 text-center truncate">
          <a
            href={embedLink}
            className="text-gray-300 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Une publication partagée par TEMIZLIK | USTA | TEMIR | MASAJ |
            TEDBIR | DIGER (@cagir.az)
          </a>
        </p> */}
      </div>
    </blockquote>
  );
}

export default InstagramEmbed;
