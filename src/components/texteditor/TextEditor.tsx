'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'


const TextEditor = () => {

    const editor = useEditor({
        extensions: [
          StarterKit.configure({
            
            history: false,
          })
        ],
        content: '<p>Hello World! 🌎️</p>',
      })

    return ( 
        <div>
            <EditorContent editor={editor} />
        </div>
     );
}
 
export default TextEditor;