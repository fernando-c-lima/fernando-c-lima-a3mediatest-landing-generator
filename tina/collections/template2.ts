import type { Collection } from "tinacms";

export const Template2Collection: Collection = {
  name: "template2",
  label: "Template 2",
  path: "src/content/paginatemplate2",
  format: "json",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Título",
    },
    {
      type: "string",
      name: "videoLink",
      label: "Link do vídeo",
    },
    {
      type: "string",
      name: "buttonText",
      label: "Texto do botão",
    },
    {
      type: "rich-text",
      name: "content",
      label: "Conteúdo",
    },
    {
      type: "string",
      name: "siteName",
      label: "Nome do site",
    },
    {
      type: "string",
      name: "description",
      label: "Descrição",
    },
    {
      type: "string",
      name: "url",
      label: "URL",
    },
  ],
};
