import React from 'react'


type YoutubeEmbedProp = {
    embedId: string,
};

const YoutubeEmbed = ({ embedId }: YoutubeEmbedProp) => (
    <div className="video-responsive"> 
    <iframe width="1280" height="720" src={`https://www.youtube.com/embed/${embedId}`} title="How To Embed YouTube Videos in React / Gatsby (and make them Responsive)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
);


export default YoutubeEmbed;
