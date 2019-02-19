import { db } from './firebase'

export const createDocument = (collection, { id, ...data }) =>
  db.ref(`${collection}`).push().set(data)

export const getDocumentUpdates = (collection, callback) =>
  db.ref(collection).on('value', callback)

export const onceGetDocuments = (collection) =>
  db.ref(collection).once('value').then(snapshot => snapshot.val())

export const updateDocument = (collection, { id, ...data }) =>
  db.ref().child(`${collection}/${id}`).update(data)

export const deleteDocument = (collection, { id, ...data }) =>
  db.ref(`${collection}/${id}`).remove()