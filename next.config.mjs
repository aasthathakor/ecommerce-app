// next.config.mjs

import { createRequire } from "module";
const require = createRequire(import.meta.url);

const nextConfig = {
  images: {
    remotePatterns: [
      {
        loader: "imgix", 
        path: "https://cf38-2405-201-2006-7d89-4136-c88f-ed9f-fdcd.ngrok-free.app/", 
      },
      {
        loader: "default",
      }
    ]
   
  },
};



