import React from 'react';
import TopNewsImg from '../../imgs/verdensballet.jpg';
import ballet from '../../imgs/ballet.png';
import gods from '../../imgs/godsetmin.png';
import hamp from '../../imgs/hampproducts.png';

export default function News() {
    return (
        <div className="News">
            <div className="topnews">
                <img src={TopNewsImg} alt="Verdensballetten på Moellerup Gods"/>
                <h1>Verdensballetten på Møllerup Gods lørdag d. 13. juli 2019 blev en skøn aften</h1>
                <p>Verdensballetten planlægger at komme igen næste år lørdag d. 11. juli 2020</p>
                <a href="/">Læs mere her</a>
            </div>
            <div className="othernews">
                <div className="newstemp">
                    <img src={hamp} alt=""/>
                    <h2>Køb vores hampeprodukter</h2>
                    <p>På Møllerup Gods arbejder vi med hamp og hampens unikke ernæringsmæssige egenskaber. Alt vores hamp er dyrket i Danmark, og resultatet er en række gode produkter, som du kan købe her på webshoppen..</p>
                    <a href="/">Køb online her</a>
                </div>
                <div className="newstemp">
                    <img src={ballet} alt=""/>
                    <h2>Verdensballetten 2019</h2>
                    <p>Siden 2012 har de klassiske gule mure på Møllerup Gods dannet rammen for Verdensballetten, og med mange tusinde gæster gennem årene er begivenheden efterhånden blevet en fasttømret og populær sommertradition på Djursland. Også til sommer 2019 vil vi få fornøjelsen af forestillingen på Møllerup Gods</p>
                    <a href="/">Se mere her</a>
                </div>
                <div className="newstemp">
                    <img src={gods} alt=""/>
                    <h2>Historien om Møllerup Gods</h2>
                    <p>Marsk Stig Andersen Hvide af den magtfulde Hvide-slægt er den tidligst kendte ejer af Møllerup. Møllerup var hans vigtigste besiddelse. Gården lå, som i dag, med en borg på øen og avlsbygninger på den anden side af voldgraven.</p>
                    <a href="/">Læs historien her</a>
                </div>
            </div>
        </div>
    )
}
