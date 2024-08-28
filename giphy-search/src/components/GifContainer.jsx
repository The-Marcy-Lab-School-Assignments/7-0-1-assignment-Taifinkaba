function GifContainer({ gifList }) {
    return (
        <ul>
          {gifList?.map((curGif)=>{
            return (<li key={curGif.id}>
                        <img src={curGif.images.original.url}></img>
                    </li>)
          })}  
        </ul>
    )
}

export default GifContainer
