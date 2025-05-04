import React from 'react';

interface Template1PageProps {
  data: {
    title: string;
    body: string;
    videoLink: string;
    buttonText: string;
    siteName: string;
    description: string;
    url: string;
  };
}

const Template1Page: React.FC<Template1PageProps> = ({ data }) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <div dangerouslySetInnerHTML={{ __html: data.body }} />
      <a href={data.videoLink} target="_blank" rel="noopener noreferrer">
        {data.buttonText}
      </a>
      <p>Site: <a href={data.url} target="_blank" rel="noopener noreferrer">{data.siteName}</a></p>
    </div>
  );
};

export default Template1Page;
