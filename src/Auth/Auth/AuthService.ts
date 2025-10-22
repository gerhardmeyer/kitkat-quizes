import type { IAuthProvider } from "./AuthProvider";

class AuthService {
  private provider: IAuthProvider;

  constructor(provider: IAuthProvider) {
    this.provider = provider;
  }

  setProvider(provider: IAuthProvider) {
    this.provider = provider;
  }

  authenticate(username: string, password?: string) {
    this.provider.connect();
    const success = this.provider.login(username, password);
    if (success) {
      console.log(`${this.provider.name}: authentication successful.`);
    } else {
      console.log(`${this.provider.name}: authentication failed.`);
    }
    this.provider.logout();
    console.log("--------");
  }
}