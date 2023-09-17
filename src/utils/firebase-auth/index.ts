import { auth } from '@/config/firebaseConfig'
import { SocialType } from '@/types/user'
import {
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from 'firebase/auth'

export const socialLogin = async (type: SocialType) => {
  switch (type) {
    case 'GOOGLE':
      const googleProvider = new GoogleAuthProvider()
      const {
        user: { uid: googleUid },
      } = await signInWithPopup(auth, googleProvider)

      return googleUid

    case 'GITHUB':
      const githubProvider = new GithubAuthProvider()
      const {
        user: { uid: githubUid },
      } = await signInWithPopup(auth, githubProvider)

      return githubUid

    default:
      break
  }
}
