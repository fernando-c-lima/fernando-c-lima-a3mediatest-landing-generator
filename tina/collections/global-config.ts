import type { Collection } from "tinacms";
import IconComponent from "../components/IconComponent";

export const GlobalConfigCollection: Collection = {
  name: "config",
  label: "Global Config",
  path: "src/content/config",
  format: "json",
  ui: {
    global: true,
  },
  fields: [
    {
      name: "seo",
      label: "General site config",
      type: "object",
      fields: [
        {
          name: "title",
          label: "Site title for SEO",
          type: "string",
          required: false,
        },
        {
          name: "description",
          label: "Site description for SEO",
          type: "string",
          required: false,
        },
        {
          name: "siteOwner",
          label: "Your Name, Company Name (Used in the footer",
          required: false,
          type: "string",
          ui: {
            defaultValue: "Your name here",
          },
        },
      ],
    },
    {
      name: "nav",
      label: "Site Navigation Menu (Reorder, Add, Remove)",
      type: "object",
      list: false,
      ui: {
        itemProps: (item) => {
          return {
            label: item.title,
          };
        },
      },
      fields: [
        {
          name: "title",
          label: "Title of Nav Item",
          type: "string",
          required: false,
        },
        {
          name: "link",
          label: "Path of the Nav Item",
          type: "string",
          required: false,
        },
      ],
    },
    {
      name: "contactLinks",
      label: "Contact Links",
      type: "object",
      list: false,
      ui: {
        itemProps: (item) => {
          return {
            label: item.title,
          };
        },
      },
      fields: [
        {
          name: "title",
          label: "Title",
          type: "string",
        },
        {
          name: "link",
          label: "Link",
          type: "string",
        },
        {
          name: "icon",
          label: "Icon",
          type: "string",
          ui: {
            //@ts-ignore
            component: IconComponent,
          },
        },
      ],
    },
  ],
};
