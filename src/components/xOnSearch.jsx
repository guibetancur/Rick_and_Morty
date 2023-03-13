// import { useState, useRef } from 'react';
// var msg

// export default function onSearch(id) {
//    fetch(`https://rickandmortyapi.com/api/character/${id}`)
//    .then((response) => response.json())
//      .then((data) => {
//        if (data.name) {
//          let exists = characters.find((e) => e.id === data.id)
//          if (exists) alerta('Character with id#' + id + ' (' + data.name + ') already exists')
//          else {
//            console.log("en el else")
//            setCharacters((oldChars) => [...oldChars, data])
//            alerta('Character ' + data.name + ' added')
//          }
//        } else {
//          alerta(`There are only 826 characters`)
//        }
//        let add = document.getElementById('add')
//        add.select()
//        // add.value = ''
//        // add.focus()
//      })
//  }

//  export function OnClose(id) {
//     const [characters, setCharacters] = useState([])
//    setCharacters((data) => {
//      let add = document.getElementById('add')
//      add.focus()
//      return data.filter((e) => e.id !== id)
//    })
//  }
 
//  function alerta(message) {
//    msg = document.getElementById('msg')
//    msg.innerText = message
//    setTimeout(() => msg.innerText = '', 5000);
//  }
 