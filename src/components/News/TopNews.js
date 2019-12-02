import React from 'react';
import TopNewsImg from '../../imgs/verdensballet.jpg';


export default function TopNews() {
    return (
        <div className="topnews">
            <img src={TopNewsImg} alt="Verdensballetten på Moellerup Gods"/>
            <h1>Verdensballetten på Møllerup Gods lørdag d. 13. juli 2019 blev en skøn aften</h1>
            <p>Verdensballetten planlægger at komme igen næste år lørdag d. 11. juli 2020</p>
            <a href="/">Læs mere her</a>
        </div>
    )
}
