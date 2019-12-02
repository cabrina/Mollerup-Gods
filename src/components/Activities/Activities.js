import React from 'react';
import molleruphamp from '../../imgs/molleruphamp.jpg';
import moderogevents from '../../imgs/moderogevents.png';
import festpakroen from '../../imgs/festpakroen.png';
import rundvisninger from '../../imgs/rundvisninger.jpg';
import hamphudpleje from '../../imgs/hamphudpleje.jpg';
import hampfodevarer from '../../imgs/hampfodevarer.jpg';
import mollerupbogen from '../../imgs/mollerupbogen.png';
import mollerupjagt from '../../imgs/mollerupjagt.jpg';
import feriefor40 from '../../imgs/feriefor40.png';
import boligpalandet from '../../imgs/boligpalandet.jpg';
import hestepension from '../../imgs/hestepension.png';
import vballetten from '../../imgs/vballetten.png';


export default function Activities() {
    return (
        <div className="activities">
            <h1>Møllerup Gods tilbyder en perlerække af muligheder</h1>
            <p>Møllerup Gods og Hubertus Kroen er ikke alene kulturhistoriske perler, vi er også en virksomhed med højt til loftet, masser af muligheder og god plads til aktiviteter på 425 hektar - for private og erhverv</p>

            <div className="allact">
                <div className="acttemp">
                    <img src={molleruphamp} alt=""/>
                    <h2>Møllerup Hamp</h2>
                    <p>På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje.</p>
                    <a href="/">Køb produkter her</a>
                </div>
                <div className="acttemp">
                    <img src={moderogevents} alt=""/>
                    <h2>Møder & events</h2>
                    <p>Hold møde eller firmaevent i smukke, autentiske rammer med plads til kreativitet.</p>
                    <a href="/">Læs mere her</a>
                </div>
                <div className="acttemp">
                    <img src={festpakroen} alt=""/>
                    <h2>Fest på kroen</h2>
                    <p>Lej Hubertus Kroen og hold fest for op til 80 pers. i romantiske og historiske rammer.</p>
                    <a href="/">Læs mere</a>
                </div>
                <div className="acttemp">
                    <img src={rundvisninger} alt=""/>
                    <h2>Rundvisninger</h2>
                    <p>Bestil en rundvisning på Møllerup, lær noget om historien, jagten, og livet på Møllerup. </p>
                    <a href="/">Læs mere</a>
                </div>
                <div className="acttemp">
                    <img src={hamphudpleje} alt=""/>
                    <h2>Hamp hudpleje</h2>
                    <p>Prøv Møllerups nye hudplejeserie baseret på de næringsrige olie fra hampens frø.</p>
                    <a href="/">Læs mere</a>
                </div>
                <div className="acttemp">
                    <img src={hampfodevarer} alt=""/>
                    <h2>Hamp fødevarer</h2>
                    <p>Prøv fødevarer udviklet på baggrund af frøene fra den sunde hamp fra Møllerup. </p>
                    <a href="/">Læs mere</a>
                </div>
                <div className="acttemp">
                    <img src={mollerupbogen} alt=""/>
                    <h2>Møllerup boen</h2>
                    <p>Der er kød og blod på historien,  Læs mere om Marsk Stig & livet på Møllerup. </p>
                    <a href="/">Køb bogen her</a>
                </div>
                <div className="acttemp">
                    <img src={mollerupjagt} alt=""/>
                    <h2>Møllerup jagt</h2>
                    <p>Professionel jagt i kuperet og varieret landskab med mange fasaner og råvildt.</p>
                    <a href="/">Læs mere her</a>
                </div>
                <div className="acttemp">
                    <img src={feriefor40} alt=""/>
                    <h2>Ferie for 40</h2>
                    <p>Nyd en ferie eller weekend på Hubertus Kroen. Op til 40 personer inkl pool</p>
                    <a href="/">Læs mere her</a>
                </div>
                <div className="acttemp">
                    <img src={boligpalandet} alt=""/>
                    <h2>Bolig på landet</h2>
                    <p>Mærk roen og nyd det smukke landskab i et omsorgsfuldt lokalsamfund.</p>
                    <a href="/">Læs mere her</a>
                </div>
                <div className="acttemp">
                    <img src={hestepension} alt=""/>
                    <h2>Hestepension</h2>
                    <p>Giv din hest et sundt ophold, god plads ude og inde i den gamle herskabsstald.</p>
                    <a href="/">Læs mere her</a>
                </div>
                <div className="acttemp">
                    <img src={vballetten} alt=""/>
                    <h2>Verdensballetten</h2>
                    <p>Verdensballet - charmerende udendørsforestilling, 13. juli 2018 på Møllerup. </p>
                    <a href="/">Læs mere her</a>
                </div>
            </div>
        </div>
    )
}
