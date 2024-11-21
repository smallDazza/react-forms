export default function ReadOnlyPost(props) {
    return(
        <div className="ReadOnlyPost">
            <h1>{props.author}</h1>
            {/* <h1>{props.patentState.author}</h1> */}

            <h6>Created On: {props.dataCreated}</h6>
            {
                props.lastUpdate !== props.dateCreated ?
                <h6>Last edited on: {props.lastUpdated}</h6> :
                null
            }
            <h3>{props.location}</h3>
            <p>{props.content}</p>
        </div>
        
    )
}