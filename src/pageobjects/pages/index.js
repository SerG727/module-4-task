import LoginPage from './login.page';
import MainPage from './main.page';
import AccountPage from './account.page';
import ProfilePage from './profile.page';

function pages(name) {
     const items = {
          login: new LoginPage(),
          main: new MainPage(),
          account: new AccountPage(),
          profile: new ProfilePage(),
     }

     return items[name.toLowerCase()];
};

export {
  LoginPage,
  MainPage,
  AccountPage,
  ProfilePage,
  pages,
};
