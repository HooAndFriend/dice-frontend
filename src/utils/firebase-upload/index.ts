// ** Firebase Imports
import { storage } from '@/config/firebaseConfig'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export const uploadImage = async (image: File) => {
  const imageRef = ref(storage, `images/${image.name}`)
  const snapshot = await uploadBytes(imageRef, image)
  return await getDownloadURL(snapshot.ref)
}
