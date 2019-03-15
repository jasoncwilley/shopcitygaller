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
          artist: 'rizzlow',
          img: 'cityrats.jpg'
        },
        {
          name: 'Roaring Panda',
          price: 39.99,
          category: 'photo',
          sale: false,
          artist: 'rizzlow',
          img: 'beaniepanda.jpg'
        },
        {
          name: 'Drunk Panda',
          price: 49.99,
          category: 'photo',
          sale: true,
          artist: 'rizzlow',
          img: 'drunkpanda.jpg'
        },
        {
          name: 'Tree Top Flyer',
          price: 32.99,
          category: 'photo',
          sale: true,
          artist: 'rizzlow',
          img: 'treetopflyer.jpg'
        },
        {
          name: 'Optimus Panda',
          price: 29.99,
          category: 'painting',
          sale: false,
          artist: 'optimus panda',
          img: 'transformpanda.jpg'
        },
        {
          name: 'Up the Redwood',
          price: 18.99,
          category: 'photo',
          sale: false,
          artist: 'rizzlow',
          img: 'uptheredwood.jpg'
        },
        {
          name: 'Panda Globe',
          price: 28.99,
          category: 'painting',
          sale: false,
          artist: 'toy glober',
          img: 'logo.png'
        },
        {
          name: 'Chase the Rainbow',
          price: 49.99,
          category: 'painting',
          sale: false,
          artist: 'adaglance',
          img: 'shirt2.png'
        },
        {
          name: 'Living Walls',
          price: 59.99,
          category: 'painting',
          sale: true,
          artist: 'jaycdubbau',
          img: 'jacket3.png'
        },
        {
          name: 'Golden Sky',
          price: 129.99,
          category: 'photo',
          sale: false,
          artist: 'jaycdubbau',
          img: 'jacket4.png'
        },
        {
          name: 'Vandal Panda',
          price: 80.99,
          category: 'painting',
          sale: false,
          artist: 'jaycdubbau',
          img: 'sweater4.png'
        },
        {
          name: 'Panda Gang',
          price: 59.99,
          category: 'painting',
          sale: true,
          artist: 'jaycdubbau',
          img: 'sweater5.png'
        }
      ]
    },
    getters: {
      photo: state => filter(state.products, 'category', 'photo'),
      painting: state => filter(state.products, 'category', 'painting'),
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
