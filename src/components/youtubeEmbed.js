function YoutubeEmbed({ embedId }) {
    return (
        <div className="relative pb-9/16 w-[302px] h-[537px]">
            <iframe
            className="absolute top-0 left-0 w-full h-full"
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    );
}

export default YoutubeEmbed;


{/* <iframe width="560" height="315" 
src="https://www.youtube.com/embed/JbIG0LqAdOU?si=b93Vf_MYSJwnD3mg"
 title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
 clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
 allowfullscreen></iframe> */}