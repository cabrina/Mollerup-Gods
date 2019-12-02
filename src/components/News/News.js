import React from 'react'
import TopNews from './TopNews'
import NewsList from './NewsList'

export default function News() {
    return (
        <div className="news">
            <TopNews />
            <NewsList />
        </div>
    )
}
