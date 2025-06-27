import LoginPage from './login.page';
import MainPage from './main.page';
import AccountPage from './account.page';

function pages(name) {
     const items = {
          login: new LoginPage(),
          main: new MainPage(),
          account: new AccountPage(),
     }

     return items[name.toLowerCase()];
};

export {
  LoginPage,
  MainPage,
  AccountPage,
  pages,
};
