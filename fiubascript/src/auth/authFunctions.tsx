export const isUserLoggedIn = (): boolean => {
    const token: string | null = localStorage.getItem('token');
    if (token) {
      return true;
    }
    return false;
  };

  export const getUserId = (): string | null => {
    const userId: string | null = localStorage.getItem('userId');
    if (userId) {
      return userId;
    }
    return null;
  };
  
  export const getUserData = (): { name: string | null, lastName: string | null, email: string | null } => {
    const data = {
      name: localStorage.getItem('userName'),
      lastName: localStorage.getItem('userLastName'),
      email: localStorage.getItem('userEmail'),
    };
    return data;
  };