import { faker } from '@faker-js/faker';
import path from 'path';
import fs from 'fs';

function createFakePage(index: number, template: "paginatemplate1" | "paginatemplate2") {
  const slug = `${index}`;
  
  // Define a URL base de acordo com o template
  const url =
    template === "paginatemplate1"
      ? `https://getflowempower.com/ps/pscollins01/${slug}`
      : `https://glucosecontrolguide.com/fb/sgs/vsl3/prn-ca1/h1l1/${slug}`;

  const content = {
    title: faker.lorem.sentence(),
    videoLink: "https://fun.pulseytfun.com/preclick",
    buttonText: "Click Here to Watch The Video",
    content: faker.lorem.paragraphs(3),
    siteName: "getflowempower.com",
    description: faker.lorem.sentence(),
    url, // aqui está a URL correta conforme template
  };

  const dir = path.resolve("src/content", template);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  fs.writeFileSync(path.join(dir, `${slug}.json`), JSON.stringify(content, null, 2));
}

for (let i = 1; i <= 1000; i++) {
  createFakePage(i, "paginatemplate1");
  createFakePage(i, "paginatemplate2");
}
