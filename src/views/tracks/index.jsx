import React from 'react'
import { useSelector } from 'react-redux'
import SearchTracks from 'components/search-tracks'
import './styles.scss'

const Tracks = () => {
	const { searchTracks, loadingTracks } = useSelector(state => state.search)

	return (
		<>
			<div className='tracks-container'>
				<SearchTracks search={searchTracks.items} loading={loadingTracks} />
			</div>
		</>
	)
}

export default Tracks
