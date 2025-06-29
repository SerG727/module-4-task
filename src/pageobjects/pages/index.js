import LoginPage from './login.page';
import MainPage from './main.page';
import AccountPage from './account.page';
import ProfilePage from './profile.page';
import ProductDetails from './product-detail.page';

function pages(name) {
     const items = {
          login: new LoginPage(),
          main: new MainPage(),
          account: new AccountPage(),
          profile: new ProfilePage(),
          pliers: new ProductDetails('product/01JYXNGHAPG2QCK7HPCDS212TS'),
     }

     return items[name.toLowerCase()];
};

export {
  LoginPage,
  MainPage,
  AccountPage,
  ProfilePage,
  ProductDetails,
  pages,
};
