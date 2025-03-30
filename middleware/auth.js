// middleware/checkCart.js
export default function ({ store, redirect }) {
  // Vérifiez si le panier est vide
  const cart = store.state.cart || [];
  if (cart.length === 0) {
      return redirect('/'); // Redirige vers la page d'accueil
  }
}
