// client.js

import { GraphQLClient } from 'graphql-request';

// Eğer başlıklar eklemeniz gerekiyorsa, onları buraya ekleyin.
// Örneğin, bir API anahtarı gerektiriyorsa:
const headers = {
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN}`, // veya uygun bir başlık
};

export const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL, {
  headers,
});
