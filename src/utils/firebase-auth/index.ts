import { auth } from '@/config/firebaseConfig'
import { SocialType } from '@/types/user'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

export const socialLogin = async (type: SocialType) => {
  switch (type) {
    case 'GOOGLE':
      const provider = new GoogleAuthProvider()
      const {
        user: { uid },
      } = await signInWithPopup(auth, provider)

      return uid

    default:
      break
  }
}
