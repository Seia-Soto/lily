import React, { useEffect, useState } from 'react'
import './Container.css'

import Info from './Info'

function Container() {
    const [data, setData] = useState([])
    useEffect(() => {
        async function getData() {
            const res = await fetch('https://doujinshiman.ga/v2/api/hitomi/list/2', { headers: { Authorization: 'iwantbecouple' } })
            const resData = await res.json()
            setData(resData.list)
        }
        getData()
    }, [])
    return (
        <div className='App-container'>
            {data.map((el) =>
                (<Info
                    title={el.title}
                    galleryId={el.galleryid}
                    artist={el.artist}
                    characters={el.characters}
                    group={el.group}
                    series={el.series}
                    tags={el.tags}
                    thumbnail={el.thumbnail}
                />))}
        </div>
    )
}

export default Container
