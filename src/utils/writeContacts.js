import { PATH_DB } from '../constants/contacts.js';
// import * as fs from 'node:fs/promises';
import { writeFile } from 'node:fs/promises';

export const writeContacts = (contacts) =>
  writeFile(PATH_DB, JSON.stringify(contacts, null, 2));

// export const writeContacts = async (updatedContacts) => {
//   try {
//     const data = JSON.stringify(updatedContacts, null, 2);
//     await fs.writeFile(PATH_DB, data, 'utf-8');
//   } catch (error) {
//     console.error(error);
//   }
// };
