import React from 'react';
import ActivitiesList from '../Activities/ActivitiesList'

export default function Activities() {
    return (
        <div className="activities">
            <h1>Møllerup Gods tilbyder en perlerække af muligheder</h1>
            <p>Møllerup Gods og Hubertus Kroen er ikke alene kulturhistoriske perler, vi er også en virksomhed med højt til loftet, masser af muligheder og god plads til aktiviteter på 425 hektar - for private og erhverv</p>
            <ActivitiesList />
        </div>
    )
}
