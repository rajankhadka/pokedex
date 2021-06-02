import React,{useState,useEffect} from 'react'
import axios from 'axios';

function Image(props) {

    const [image, setImage] = useState('');

    useEffect(() => {
        if (!props.image) {
            axios.get(props.forms)
                .then(data => {
                    setImage(data.data.sprites['front_default'])
                })
                .catch(err => console.log(err));
        } else {
            setImage(props.image)
        }
    },[props.image])

    return (
        image.length > 0 &&  <img style={{objectFit:'contain',width: '100%' ,height:'35vh'}} src={image} alt='image' />
    )
}

export default Image
