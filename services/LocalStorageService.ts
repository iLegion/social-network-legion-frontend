export default class LocalStorageService {
  public static getToken(): string | null {
    return localStorage.getItem("token");
  }

  public static setToken(value: string): void {
    localStorage.setItem("token", value);
  }

  public static removeToken(): void {
    localStorage.removeItem("token");
  }
}
