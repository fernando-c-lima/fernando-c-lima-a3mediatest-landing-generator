import React from 'react';

interface Template2PageProps {
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

const Template2Page: React.FC<Template2PageProps> = ({ data }) => {
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

export default Template2Page;
