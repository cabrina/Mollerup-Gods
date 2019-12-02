import React, { useState } from 'react';

const NewsList = () => {
    const [ aktiviteter ] = useState([
        {img: 'imgs/molleruphamp.jpg', header: 'Møllerup Hamp', text: 'På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje.', urltext: 'Køb produkter her', url: 'https://moellerupshop.com/', id: 1},
        {img: 'imgs/moderogevents.png', header: 'Møder & events', text: 'Hold møde eller firmaevent i smukke, autentiske rammer med plads til kreativitet.', urltext: 'Læs mere her', url: 'https://www.moellerupgods.dk/moeder_og_events', id: 2},
        {img: 'imgs/festpakroen.png', header: 'Fest på kroen', text: 'Lej Hubertus Kroen og hold fest for op til 80 pers. i romantiske og historiske rammer.', urltext: 'Læs mere', url: 'https://www.moellerupgods.dk/hold-fest-p-kroen1', id: 3},
        {img: 'imgs/rundvisninger.jpg', header: 'Rundvisninger', text: 'Bestil en rundvisning på Møllerup, lær noget om historien, jagten, og livet på Møllerup. ', urltext: 'Læs mere', url: 'https://www.moellerupgods.dk/rundvisninger1', id: 4},
        {img: 'imgs/hamphudpleje.jpg', header: 'Hamp hudpleje', text: 'Prøv Møllerups nye hudplejeserie baseret på de næringsrige olie fra hampens frø.', urltext: 'Læs mere', url: 'https://moellerupshop.com/collections/hemp-skincare', id: 5},
        {img: 'imgs/hampfodevarer.jpg', header: 'Hamp fødevarer', text: 'Prøv fødevarer udviklet på baggrund af frøene fra den sunde hamp fra Møllerup. ', urltext: 'Læs mere', url: 'https://moellerupshop.com/', id: 6},
        {img: 'imgs/mollerupbogen.png', header: 'Møllerup bogen', text: 'Der er kød og blod på historien,  Læs mere om Marsk Stig & livet på Møllerup. ', urltext: 'Køb bogen her', url: 'http://boggalleriet.dk/shop/moellerup-fra-marsk-19550p.html', id: 7},
        {img: 'imgs/mollerupjagt.jpg', header: 'Møllerup jagt', text: 'Professionel jagt i kuperet og varieret landskab med mange fasaner og råvildt.', urltext: 'Læs mere her', url: 'https://www.moellerupgods.dk/jagt1', id: 8},
        {img: 'imgs/feriefor40.png', header: 'Ferie for 40', text: 'Nyd en ferie eller weekend på Hubertus Kroen. Op til 40 personer inkl pool', urltext: 'Læs mere her', url: 'https://www.moellerupgods.dk/lej-hubertus-kroen-til-ferie1', id: 9},
        {img: 'imgs/boligpalandet.jpg', header: 'Bolig på landet', text: 'Mærk roen og nyd det smukke landskab i et omsorgsfuldt lokalsamfund.', urltext: 'Læs mere her', url: 'https://www.moellerupgods.dk/lej-en-bolig1', id: 10},
        {img: 'imgs/hestepension.png', header: 'Hestepension', text: 'Giv din hest et sundt ophold, god plads ude og inde i den gamle herskabsstald.', urltext: 'Læs mere her', url: 'https://www.moellerupgods.dk/hestepension-p-mllerup-gods-djursland1', id: 11},
        {img: 'imgs/vballetten.png', header: 'Verdensballetten', text: 'Verdensballet - charmerende udendørsforestilling, 13. juli 2018 på Møllerup. ', urltext: 'Læs mere her', url: 'https://www.moellerupgods.dk/verdensballetten11', id: 12},
      ]);

      return (
        <div className="act-list">
            <div className="act-container">
              {aktiviteter.map(aktivitet => {
                  return ( 
                    <div key={aktivitet.id}>
                      <img src={aktivitet.img} alt="aktivitet"/>
                      <h2>{aktivitet.header}</h2>
                      <p>{aktivitet.text}</p>
                      <a href={aktivitet.url}>{aktivitet.urltext}</a>
                    </div>)
              })}
            </div>
        </div>
      );
}

export default NewsList;