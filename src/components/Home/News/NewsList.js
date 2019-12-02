import React, { useState } from 'react';

const NewsList = () => {
    const [ nyheder ] = useState([
        {img: 'imgs/ballet.png', header: 'Køb vores hampeprodukter', text: 'På Møllerup Gods arbejder vi med hamp og hampens unikke ernæringsmæssige egenskaber. Alt vores hamp er dyrket i Danmark, og resultatet er en række gode produkter, som du kan købe her på webshoppen..', urlText: 'Køb online her', url: 'https://moellerupshop.com/', id: 1},
        {img: 'imgs/godsetmin.png', header: 'Verdensballetten 2019', text: 'Siden 2012 har de klassiske gule mure på Møllerup Gods dannet rammen for Verdensballetten, og med mange tusinde gæster gennem årene er begivenheden efterhånden blevet en fasttømret og populær sommertradition på Djursland. Også til sommer 2019 vil vi få fornøjelsen af forestillingen på Møllerup Gods', urlText: 'Se mere her', url: 'https://verdensballetten.dk/moellerup-gods/', id: 2},
        {img: 'imgs/hampproducts.png', header: 'Historien om Møllerup Gods', text: 'Marsk Stig Andersen Hvide af den magtfulde Hvide-slægt er den tidligst kendte ejer af Møllerup. Møllerup var hans vigtigste besiddelse. Gården lå, som i dag, med en borg på øen og avlsbygninger på den anden side af voldgraven.', urlText: 'Læs historien her', url: 'https://www.moellerupgods.dk/historien111', id: 3}
      ]);

      return (
        <div className="news-list">
            <div className="news-container">
              {nyheder.map(nyhed => {
                  return ( 
                    <div key={nyhed.id}>
                      <img src={nyhed.img} alt="nyhed"/>
                      <h2>{nyhed.header}</h2>
                      <p>{nyhed.text}</p>
                      <a href={nyhed.url}>{nyhed.urltext}</a>
                    </div>)
              })}
            </div>
        </div>
      );
}

export default NewsList;