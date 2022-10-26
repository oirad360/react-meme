import React from 'react';

function Meme(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });

    const [allMeme, setAllMeme] = React.useState({})

    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then((res) => res.json())
        .then((memes) => setAllMeme(memes))
    },[])

    function getRandomMeme(){
        const memes=allMeme.data.memes
        const randomMeme = memes[Math.floor(Math.random()*memes.length)];
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: randomMeme.url
        }))
    }

    function handleChange(event){
        setMeme(prevMeme => ({
            ...prevMeme,
            [event.target.name]: event.target.value
        }))
    }

    return(
        <React.Fragment>
            <div className="meme-form">
                <input className='up-input' type="text" placeholder='Top text' name='topText' value={meme.topText} onChange={handleChange}/>
                <input className='bottom-input' type="text" placeholder='Bottom text' name='bottomText' value={meme.bottomText} onChange={handleChange}/>
                <button 
                    className='submit-btn'
                    onClick={getRandomMeme}
                >
                    Get a new meme image
                </button>
            </div>
            <div className="meme">
                <h2 className="meme-text top">{meme.topText}</h2>
                <img src={meme.randomImage} alt="meme" className="meme-img" />
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </React.Fragment>
        
    )
}

export default Meme