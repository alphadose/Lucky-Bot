const {
  Carousel,
  Image,
} = require('actions-on-google');

exports.colorMap = {
    'indigo taco': {
      title: 'Indigo Taco',
      text: 'Indigo Taco is a subtle bluish tone.',
      image: {
        url: 'https://storage.googleapis.com/material-design/publish/material_v_12/assets/0BxFyKV4eeNjDN1JRbF9ZMHZsa1k/style-color-uiapplication-palette1.png',
        accessibilityText: 'Indigo Taco Color',
      },
      display: 'WHITE',
    },
    'pink unicorn': {
      title: 'Pink Unicorn',
      text: 'Pink Unicorn is an imaginative reddish hue.',
      image: {
        url: 'https://storage.googleapis.com/material-design/publish/material_v_12/assets/0BxFyKV4eeNjDbFVfTXpoaEE5Vzg/style-color-uiapplication-palette2.png',
        accessibilityText: 'Pink Unicorn Color',
      },
      display: 'WHITE',
    },
    'blue grey coffee': {
      title: 'Blue Grey Coffee',
      text: 'Calling out to rainy days, Blue Grey Coffee brings to mind your favorite coffee shop.',
      image: {
        url: 'https://storage.googleapis.com/material-design/publish/material_v_12/assets/0BxFyKV4eeNjDZUdpeURtaTUwLUk/style-color-colorsystem-gray-secondary-161116.png',
        accessibilityText: 'Blue Grey Coffee Color',
      },
      display: 'WHITE',
    },
};
  
exports.fakeColorCarousel = () => {
    const carousel = new Carousel({
        items: {
        'indigo taco': {
            title: 'Indigo Taco',
            synonyms: ['indigo', 'taco'],
            image: new Image({
            url: 'https://storage.googleapis.com/material-design/publish/material_v_12/assets/0BxFyKV4eeNjDN1JRbF9ZMHZsa1k/style-color-uiapplication-palette1.png',
            alt: 'Indigo Taco Color',
            }),
        },
        'pink unicorn': {
            title: 'Pink Unicorn',
            synonyms: ['pink', 'unicorn'],
            image: new Image({
            url: 'https://storage.googleapis.com/material-design/publish/material_v_12/assets/0BxFyKV4eeNjDbFVfTXpoaEE5Vzg/style-color-uiapplication-palette2.png',
            alt: 'Pink Unicorn Color',
            }),
        },
        'blue grey coffee': {
            title: 'Blue Grey Coffee',
            synonyms: ['blue', 'grey', 'coffee'],
            image: new Image({
            url: 'https://storage.googleapis.com/material-design/publish/material_v_12/assets/0BxFyKV4eeNjDZUdpeURtaTUwLUk/style-color-colorsystem-gray-secondary-161116.png',
            alt: 'Blue Grey Coffee Color',
            }),
        },
    }});
    return carousel;
};
