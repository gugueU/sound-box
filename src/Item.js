//@Flow

import React, {useEffect, useState} from 'react';
import AudioButton from "./AudioButton";
import { useParams } from "react-router";


function Item(props) {

    const [item, setItem] = useState();

    const  { id } = useParams();

    const getItemById = (id : number) => {
        setItem(null);
        props.data.playlist.map(item => {
            if(item.id && id && id === item.id) {
                setItem(item);
            }
        });
    };

    useEffect(() => {
        getItemById(id);
    }, [id]);


    return (
        <>
            {item ? <AudioButton
                        id={item.label}
                        label={item.label}
                        soundFile={item.soundFile}
                        image={item.image}
                        visible="true"
                        setSoundPlaying={props.setSoundPlaying}
                    /> : null}
        </>

    );
}

export default Item;
