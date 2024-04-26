import TextEditor from "./TextEditor"
import {
  BrowserRouter as Router,
  Routes, // Change import from 'Switch' to 'Routes'
  Route,
  Navigate,
} from "react-router-dom"
import { v4 as uuidV4 } from "uuid"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={`/documents/${uuidV4()}`} />} />
        <Route path="/documents/:id" element={<TextEditor />} />
      </Routes>
    </Router>
  )
}

export default App


/*
When the application loads, the <Navigate> component inside the first <Route> generates a unique document ID using uuidV4() and redirects the user to the corresponding document URL.
If a user navigates to a specific document URL (e.g., /documents/some-id), the <TextEditor> component will be rendered, allowing the user to edit the document.
Purpose:

This setup allows for dynamic routing where new documents are created with unique IDs on the fly.
It leverages React Router's declarative approach to define routes and navigation logic.
The use of uuidV4() ensures that each document has a unique identifier, which can be useful for managing and retrieving documents later. 
*/