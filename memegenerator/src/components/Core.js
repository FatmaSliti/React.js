import React from "react"
import memeData from "../memeData";

export default function Core() {

    const [memeImage, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "fatoma.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memeData);

    function getMemeImage() {
        const memesArray = memeData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMemeImage(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    }

    function handleChange(event) {
        setMemeImage((prevState) => {
            const { name, value } = event.target
            return {
                ...prevState,
                [name]: value,
            }
        })
    }

    return (
        <main>
            <div className="form">
                <input
                    className="form--input"
                    placeholder="Top text"
                    name="topText"
                    value={memeImage.topText}
                    onChange={handleChange}
                />
                <input
                    className="form--input"
                    placeholder="Bottom text"
                    name="bottomText"
                    value={memeImage.bottomText}
                    onChange={handleChange}
                />
                <button className="form--button" onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={memeImage.randomImage} alt="pic" className="memeImage" />
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
            </div>
        </main>
    )
}
