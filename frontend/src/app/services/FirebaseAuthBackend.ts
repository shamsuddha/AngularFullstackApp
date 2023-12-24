import 'firebase/compat/auth';
import 'firebase/compat/firestore';

class FirebaseAuthBackend {

  constructor() {
  }

  setLoggedInUser = (user: any) => {
    sessionStorage.setItem('authUser', JSON.stringify(user));
  }

  getAuthenticatedUser = () => {
    if (!sessionStorage.getItem('authUser')) {
      return null;
    }
    return JSON.parse(sessionStorage.getItem('authUser')!);
  }
}
