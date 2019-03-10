import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      cartTotal: 0,
      cart: {},
      sale: false,
      products: [
        {
          name: 'City Rats',
          price: 149.99,
          category: 'photo',
          sale: true,
          article: 'photo',
          img: 'cityrats.jpg'
        },
        {
          name: 'Roaring Panda',
          price: 39.99,
          category: 'photo',
          sale: false,
          article: 'photo',
          img: 'beaniepanda.jpg'
        },
        {
          name: 'Drunk Panda',
          price: 49.99,
          category: 'photo',
          sale: true,
          article: 'photo',
          img: 'drunkpanda.jpg'
        },
        {
          name: 'Tree Top Flyer',
          price: 32.99,
          category: 'photo',
          sale: true,
          article: 'photo',
          img: 'treetopflyer.jpg'
        },
        {
          name: 'Optimus Panda',
          price: 29.99,
          category: 'toy',
          sale: false,
          article: 'optimus panda',
          img: 'transformpanda.jpg'
        },
        {
          name: 'Up the Redwood',
          price: 18.99,
          category: 'photo',
          sale: false,
          article: 'photo',
          img: 'uptheredwood.jpg'
        },
        {
          name: 'Panda Globe',
          price: 28.99,
          category: 'toy',
          sale: false,
          article: 'toy glober',
          img: 'logo.png'
        },
        {
          name: 'Chase the Rainbow',
          price: 49.99,
          category: 'men',
          sale: false,
          article: 'shirt',
          img: 'shirt2.png'
        },
        {
          name: 'Living Walls',
          price: 59.99,
          category: 'women',
          sale: true,
          article: 'jacket',
          img: 'jacket3.png'
        },
        {
          name: 'Golden Sky',
          price: 129.99,
          category: 'women',
          sale: false,
          article: 'jacket',
          img: 'jacket4.png'
        },
        {
          name: 'Vandal Panda',
          price: 80.99,
          category: 'women',
          sale: false,
          article: 'jacket',
          img: 'sweater4.png'
        },
        {
          name: 'Plymouth Rock',
          price: 59.99,
          category: 'men',
          sale: true,
          article: 'jacket',
          img: 'sweater5.png'
        }
      ]
    },
    getters: {
      women: state => filter(state.products, 'category', 'women'),
      men: state => filter(state.products, 'category', 'men'),
      sale: state => filter(state.products, 'sale', true)
    },
    mutations: {
      switchSale: state => {
        state.sale = !state.sale;
      },
      clearCartCount: state => {
        state.cartTotal = 0;
      },
      clearCartContents: state => {
        state.cart = {};
      },
      addItem: (state, item) => {
        state.cartTotal++;
        if (item.name in state.cart) {
          state.cart[item.name].count++;
        } else {
          let stateItem = Object.assign({}, item);
          stateItem.count = 1;
          state.cart[item.name] = stateItem;
        }
      }
    }
  });
};

export default createStore;

//helper
const filter = (array, key, value) => array.filter(item => item[key] === value);
