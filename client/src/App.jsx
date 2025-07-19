import { useState } from 'react'
import Heder from './Compornent/Heder'
import CreateNote from './Compornent/CreateNote'

import NotesSection from './Compornent/NoteSection'




function App() {


  return (
    <>
      <Heder />
      <CreateNote/>
      <NotesSection />
    </>
  )
}

export default App
