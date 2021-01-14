const notesOperator = {
    notesHolder: document.querySelector("#notesHolder"),

    createNewNote: function (noteText) {
        const noteTemplate = `<div class="note-body"><span class="note-close" onclick="notesOperator.removeNote(this)"><i class="fas fa-times"></i></span>${noteText}</div>`
        let = note = document.createElement("div")
        
        note.classList.add("note")
        note.innerHTML = noteTemplate
        
        return note
    },

    attachNote: function (noteText) {
        let note = noteText?this.createNewNote(noteText):this.createNewNote('')

        this.notesHolder.appendChild(note)
    },

    addNote: function () {
        let textAreaElement = document.querySelector("#newNoteText")
        let textAreaValue = textAreaElement.value
        
        this.attachNote(textAreaValue)
        document.querySelector("#newNoteDiv").style.display = "none"
        document.querySelector("#newNoteDiv > form").reset();
    },

    closeNote: function () {
        document.querySelector("#newNoteDiv").style.display = "none"
        document.querySelector("#newNoteDiv > form").reset();
    },

    removeNote: function (eventTarget) {
        let element = eventTarget.parentNode.parentNode
        let elementParent = element.parentNode

        elementParent.removeChild(element)
    },
    
    showNoteForm: function () {
        document.querySelector("#newNoteDiv").style.display = "block"     
    }

}

notesOperator.attachNote(`All notes will be lost when refreshed`)
