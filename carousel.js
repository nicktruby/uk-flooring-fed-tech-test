// --------------------------------------
// Define Product Details
// --------------------------------------

const saleProducts = [
  { sku: 'SOL-GA-20-209',
    heading : 'WOW-FACTOR WHITE TONES',
    standfirst : 'A truly striking addition to any home, this European solid oak floor boasts beautiful pale cream and white tones, guaranteed to lighten and brighten any space.',
    imageSrc : './images/SOL-GA-20-209.jpeg'
  },
  { sku: 'SOL-GA-20-213',
    heading : 'TRADITION WITH A TWIST',
    standfirst : 'Warm oak tones enhanced with on-trend shades of pale grey give the traditional wood floor a stylish update.',
    imageSrc : './images/SOL-GA-20-213.jpeg'
  },
  { sku: 'SOL-GA-18-569',
    heading : 'COMPLEMENTARY NEUTRAL PALETTE',
    standfirst : 'Light natural tones work with a range of interior styles and trends, soft hues give this floor a refreshing appeal all year round.',
    imageSrc : './images/SOL-GA-18-569.jpeg'
  },
  { sku: 'SOL-GA-18-567',
    heading : 'WARM AND INVITING',
    standfirst : 'With warm and inviting natural tones, this is a wood floor that delivers on classic looks well-suited to modern and traditional homes alike.',
    imageSrc : './images/SOL-GA-18-567.jpeg'
  },
];

// --------------------------------------
// Render a slide for each product
// --------------------------------------

const numberOfSaleProducts = saleProducts.length + 1
const carousel = document.querySelector('.carousel');

saleProducts.forEach(product => {
  const article = document.createElement('article');
        article.classList.add('carousel__slide__container');
  const slide = document.createElement('div');
    slide.classList.add('carousel__slide');
  const img = document.createElement('img');
    img.classList.add('carousel__slide__image');
    img.setAttribute('src',product.imageSrc);
    img.setAttribute('alt',product.heading);
  const details = document.createElement ('div');
    details.classList.add('carousel__slide__details');
    const h3 = document.createElement ('h3');     
    h3.innerText = product.heading;
    const p = document.createElement('p');
    p.innerText = product.standfirst;
    const button = document.createElement('button');
    button.classList.add('carousel__slide__details__button');
    button.innerText = 'View Item';
    
      details.append(h3,p, button);
      slide.append(img, details);
      article.append(slide);
      carousel.append(article);
});

// --------------------------------------
// Initialize the 'slick' carousel slider
// --------------------------------------

jQuery(function(){
  $('.carousel').slick({
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});