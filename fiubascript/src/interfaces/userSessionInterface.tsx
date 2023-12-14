export interface LoginResponse {
  authentication: {
    sessionToken: string;
  }
  _id: string;
  name:string;
  lastName: string;
  email: string;
  coins: number;
  characters: number[] | [];
  currentCharacter: number | null;
  __v?: number;
}

export interface RegistrationResponse {
  authentication: {
    sessionToken: string;
  }
  _id: string;
  name:string;
  lastName: string;
  email: string;
  coins: number;
  characters: number[] | [];
  currentCharacter: number | null;
  __v?: number;
}