import React from 'react';

import Intro from '../Home/Intro/Intro';
import News from '../Home/News/News';
import Activities from '../Home/Activities/Activities';
import Outro from '../Home/Outro/Outro'


export default function Home() {
    return (
        <div>
            <Intro />
            <News />
            <Activities />
            <Outro />
        </div>
    )
}
