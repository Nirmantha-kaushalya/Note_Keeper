import axios from 'axios'
import { format } from 'date-fns';
import React, { useState } from 'react'




function Note({ title, noteBody, _id,createdAt }) {



    const [visible, setVisible] = useState(true);
    async function handleDelete(NoId) {
        try {
            await axios.delete(`http://localhost:3000/note/delate/${NoId}`);
            console.log("dete successful")
            setVisible(false);
        } catch (err) {
            console.log("delete fail", err);
        }

    }

    if (!visible) return null;
    return (
        <div class="max-w-3xl px-6 py-4 bg-blue-50 rounded-lg shadow-md">
            <div class="flex items-center justify-between">
                <span class="text-sm font-light text-gray-600">{format(new Date(createdAt), 'yyyy-mm-dd HH:mm')}</span>
                <svg
                    onClick={()=>handleDelete(_id)}
                    className='w-5 h-5 hover:scale-110 transition duration-300 ' xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 30 30">
                    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
                </svg>
            </div>

            <div class="mt-3">
                <h2 class="text-xl font-semibold text-gray-800 hover:text-gray-600 hover:underline cursor-pointer">
                    {title}
                </h2>
                <p class="mt-2 text-gray-600 text-sm">
                    {noteBody}
                </p>
            </div>

            <div class="mt-4">
                <a href="#" class="text-blue-600 hover:underline text-sm">Read more</a>
            </div>
        </div>

    )
}

export default Note