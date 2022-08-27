<<<<<<< HEAD
// use this to decode a token and get the user's information out of it
import decode from 'jwt-decode';

// create a new class to instantiate for a user
class AuthService {
  // get user data
=======
import decode from 'jwt-decode';

class AuthService {
>>>>>>> cd07e0dd375e8d542b5c7cb2d76b1b2f8ee9d39a
  getProfile() {
    return decode(this.getToken());
  }

<<<<<<< HEAD
  // check if user's logged in
=======
>>>>>>> cd07e0dd375e8d542b5c7cb2d76b1b2f8ee9d39a
  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); // handwaiving here
  }

<<<<<<< HEAD
  // check if token is expired
=======
>>>>>>> cd07e0dd375e8d542b5c7cb2d76b1b2f8ee9d39a
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);
<<<<<<< HEAD
=======

>>>>>>> cd07e0dd375e8d542b5c7cb2d76b1b2f8ee9d39a
    window.location.assign('/');
  }

  logout() {
    // Clear user token and profile data from localStorage
<<<<<<< HEAD
=======
    // axios.defaults.headers.common["Authorization"] = null;
>>>>>>> cd07e0dd375e8d542b5c7cb2d76b1b2f8ee9d39a
    localStorage.removeItem('id_token');
    // this will reload the page and reset the state of the application
    window.location.assign('/');
  }
}

export default new AuthService();