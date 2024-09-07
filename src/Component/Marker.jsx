function Marker({currentStage}) {
    return (
        <div className="markerContainer">
            <div className="marker" style={{backgroundColor: currentStage>=0? 'rgb(31, 84, 19)':'rgb(177, 209, 177)'}}></div>
            <div className="marker" style={{backgroundColor: currentStage>=1? 'rgb(31, 84, 19)':'rgb(177, 209, 177)'}}></div>
            <div className="marker" style={{backgroundColor: currentStage>=2? 'rgb(31, 84, 19)':'rgb(177, 209, 177)'}}></div>
        </div>
    )
}

export default Marker
