const linksExpectedText = {
  english: ['Home', 'Categories', 'Contact', 'Sign in'],
  french: ['Accueil', 'Catégories', 'Contact', 'Se connecter'],
  spanish: ['Inicio', 'Categorías', 'Contacto', 'Iniciar sesión'],
  german: ['Home', 'Kategorien', 'Kontakt', 'Einloggen'],
  dutch: ['Home', 'Categorieën', 'Contact', 'Inloggen'],
  turkish: ['Anasayfa', 'Kategoriler', 'İletişim', 'Giriş Yap'],
}; 

export function getLinksExpectedText(language) {
  return linksExpectedText[language.toLowerCase()];
};

export async function extractPrices(elements) {
  return elements.map(async el => {
    const text = await el.getText();
    
    return parseFloat(text.replace(/[^0-9.]/g, ''))
  });
};