import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';







function CreateNote() {
    
    const [title, setTitle] = useState('');
    const [noteBody, setNoteBody] = useState('');
    const[note,setNote]=useState('')
    async function handleSubmit(e) {
        e.preventDefault();

        const note = { title, noteBody };


        try {
            const res = await axios.post('http://localhost:3000/make', note)
            console.log("recive from back end", res.data);


            // ✅ Clear form
            setTitle('');
            setNoteBody('');
          
            
        } catch (err) {
            console.error('Error sending data:', err);
        }

    }






    return (
        <div className='flex  justify-center '>
            <div className='flex flex-col w-2xl h-auto bg-sky-100 rounded-2xl justify-center m-5 items-center p-5 shadow-lg hover:scale-102 transition duration-300 '>
                <form
                    onSubmit={handleSubmit}
                    className='w-full'>
                    <div >
                        <label for="username" class="block text-sm text-gray-500">Title</label>

                        <input
                            type="text"
                            onChange={e => {
                                setTitle(e.target.value);
                            }}
                            placeholder="Tipe your title here"
                            value={title}
                            class="block bg-gray-50 cursor-not-allowed mt-2 w-full placeholder-gray-400 rounded-lg border border-gray-200 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                        />
                        <label for="username" class="block text-sm text-gray-500">Note</label>
                        <textarea

                            type="text"
                            onChange={e => {
                                setNoteBody(e.target.value);
                            }}
                            value={noteBody}
                            placeholder="tipe your note here"
                            class="block bg-gray-50 cursor-not-allowed mt-2 w-full placeholder-gray-400 rounded-lg border border-gray-200 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                        />


                    </div>
                    <button
                        type='submit'
                        className=' justify-end mt-5 h-8 w-8 rounded-full bg-blue-700 text-white'>+</button>

                </form>


            </div>
        </div>
    )
}

export default CreateNote