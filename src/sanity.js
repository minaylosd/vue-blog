import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "ajg9j54d", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 2
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: "2024-05-04",
});
