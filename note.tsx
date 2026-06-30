import React from 'react'

type Props ={
    name: string;
    id: number;
    type: string;
}
const note = () => {
    const notes: Props[] =[{
        name: "Note1",
        id: 1,
        type: "text"
    }]
    
  return (
    <div>
        <ul>
            {notes.map((note) => (
                <li key={note.id}>
                    <p>Name: {note.name}</p>
                    <p>Type: {note.type}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default note