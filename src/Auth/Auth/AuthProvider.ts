export interface IAuthProvider {
  readonly name: string;

  connect(): void;
  login(username: string, password?: string): boolean;
  logout(): void;
}


// Create a abstract class that implements IAuthProvider