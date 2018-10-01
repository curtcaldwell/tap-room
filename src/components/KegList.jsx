import React from 'react';
import Keg from './Keg';
import mannys from '../assets/mannys.png';
import rogers from '../assets/rogers.png';
import lucille from '../assets/lucille.jpg';
import john from '../assets/john.jpg';
import nine from '../assets/nine.png';




const masterKegList = [
  {
    name: 'Mannys',
    brewer: 'Georgetown',
    description: 'A careful selection of Northwest hops, premium barley, and our unique yeast give this ale a rich and complex malty middle with a snappy hop finish. Crisp, clean and smooth with hints of citrus and fruit.',
    abv: '5.8%',
    price: '7',
    remaining: '20',
    img: mannys
  },
  {
    name: 'Johnny Utah',
    brewer: 'Georgetown',
    description: 'With heavy grapefruit, citrus and resin in the nose, this light colored ale has minimal malt interference, giving the beer a clean finish without a cloying bitterness. Pronounced grapefruit and pine flavors with a faint verdant note.',
    abv:  '6.3%',
    price: '8',
    remaining: '18',
    img: john
  },
  {
    name: 'Rogers',
    brewer: 'Georgetown',
    description: 'Crosby® grown Sterling hops give this refreshing pilsner a spicy and earthy hop aroma. Malt character is accentuated by a Bavarian Lager Yeast that ferments dry but round and complex.',
    abv: '6.9%',
    price: '6',
    remaining: '60',
    img: rogers
  },
  {
    name: 'Lucille',
    brewer: 'Georgetown',
    description: 'Floral, citrusy and awesome. Anything so innocent and built like that just gotta be named Lucille.',
    abv: '5.1%',
    price: '6',
    remaining: '65',
    img: lucille
  },
  {
    name: '9lb PORTER',
    brewer: 'Georgetown',
    description: 'Brewed for our friends at the 9 Pound Hammer here in Georgetown, this is an exceptionally flavorful medium bodied porter. We use tons of Chocolate, Munich, and Roasted Malt, then blend it with Centennial, Summit and Chinook hops to create what we like to call Roasted Chocolaty Goodness. Mmm.. porter. Buy it by the pint at the Nine Pound Hammer or come on in to our retail shop for growlers to go!',
    abv:  '4.8%',
    price: '6',
    remaining: '75',
    img: nine
  }
];


function KegList() {
  return (
    <div>
      <style jsx>{`
        .head {
          text-align: center
          background-image: url(${kegs});
        }
        img {
          object-fit: cover;
        }
        `}
      </style>
      <div className="head">

      </div>
      <div>
        {masterKegList.map((keg, index) =>
          <Keg name={keg.name}
            description={keg.description}
            brewer={keg.brewer}
            price={keg.price}
            remaining={keg.remaining}
            img={keg.img}
            key={index}/>
        )}
      </div>
    </div>
  );
}

export default KegList;
