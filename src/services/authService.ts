import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { processingErrorsWithLogin } from "functions/processingError/processingErrorsWithLogin";
import { processingErrorsWithRegistration } from "functions/processingError/processingErrorsWithRegistration";

interface IUser {
  email: string | null;
  id: string;
}

interface IAuthService {
  registrationUser(email: string, password: string): Promise<IUser | undefined>;
  loginUser(email: string, password: string): Promise<IUser | undefined>;
}

class FirebaseAuthService implements IAuthService {
  async registrationUser(email: string, password: string) {
    try {
      const auth = getAuth();
      const userFromServer = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const userData = {
        email: userFromServer.user.email,
        id: userFromServer.user.uid,
      };
      return userData;
    } catch (err) {
      processingErrorsWithRegistration((err as Error).message);
    }
  }
  async loginUser(email: string, password: string) {
    try {
      const auth = getAuth();
      const userFromServer = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const userData = {
        email: userFromServer.user.email,
        id: userFromServer.user.uid,
      };
      return userData;
    } catch (err) {
      processingErrorsWithLogin((err as Error).message);
    }
  }
}

export const authService = new FirebaseAuthService();
