import React from 'react'
import Note from './Note'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function NotesSection() {
    const [Notes, setNote] = useState([])


    function createNote(note) {
        return (
            <Note {...note} />
        )
    }

    useEffect(() => {
        async function getingData() {
            try {
                const res = await axios.get('http://localhost:3000/notes');
                setNote(res.data);
                console.log("get data from sever succes fully");


            } catch (err) {
                console.log("not resive data", err)
            }

        }
        getingData();

    }, [Notes.length])
    console.log(Notes);


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 p-5 md:p-10">

            {Notes.map(createNote)}

        </div>
    )
}

export default NotesSection