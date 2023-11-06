import { makeAutoObservable } from "mobx";
import { authService } from "services/authService";

interface IUser {
  email: string | null;
  id: string | null;
}

class AuthState {
  user: IUser = {
    email: null,
    id: null,
  };

  constructor() {
    makeAutoObservable(this);
  }

  async login(email: string, password: string) {
    const result = await authService.loginUser(email, password);
    if (!result) {
      return;
    }
    this.user = result;
  }

  async registration(email: string, password: string) {
    const result = await authService.registrationUser(email, password);
    if (!result) {
      return;
    }
    this.user = result;
  }

  removeUser() {
    this.user = {
      email: null,
      id: null,
    };
  }
}

export default new AuthState();
