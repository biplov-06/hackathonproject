import { useEffect, useState } from "react";
import { get_notes } from "../Components/api";
import { useAuth } from "../Components/useAuth";

const Menu = () => {
    const [notes, setNotes] = useState([]);
    const { user, logoutUser } = useAuth();

    useEffect(() => {
        const fetchNotes = async () => {
            const notes = await get_notes();
            setNotes(notes);
        };
        fetchNotes();
    }, []);

    const handleLogout = async () => {
        await logoutUser();
    };

    return (
        <div className="menu-container">
            <h1 className="menu-title">
                Welcome {user ? user.username : "Guest"} 👋
            </h1>
            <div className="notes-list">
                {notes.map((note) => (
                    <div key={note.id} className="note-item">
                        {note.name}
                    </div>
                ))}
            </div>
            <button className="logout-btn" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default Menu;