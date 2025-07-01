import LoginPage from './login.page';
import MainPage from './main.page';
import AccountPage from './account.page';
import ProfilePage from './profile.page';
import ProductPage from './product-detail.page';

const loginPage = new LoginPage(),
      mainPage = new MainPage(),
      accountPage = new AccountPage(),
      profilePage = new ProfilePage(),
      productPage = new ProductPage();

export {
  loginPage,
  mainPage,
  accountPage,
  profilePage,
  productPage
};