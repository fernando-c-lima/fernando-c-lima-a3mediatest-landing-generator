import type { Collection } from "tinacms";

export const Template1Collection: Collection = {
  name: "template1",
  label: "Template 1",
  path: "src/content/paginatemplate1",
  format: "json",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Título",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Corpo",
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
