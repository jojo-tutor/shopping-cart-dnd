import { db } from './firebase';

export const createDocument = (collection, { id, ...data }) =>
  db.ref(`${collection}/${id}`).set(data);

export const onceGetDocuments = (collection) =>
  db.ref(collection).once('value');