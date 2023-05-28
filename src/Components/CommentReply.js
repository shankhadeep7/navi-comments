import { useState } from "react";
import './commentSectionStyle.css';

const CommentReply = ({ onReply, showInput, data}) => {
    const [replyText, setReplyText] = useState('');
    const addReply = () => {
        onReply({
            id: Math.random() * 1000,
            text: replyText,
            children: []
        })
        setReplyText('');
    }
    return (
        <div className="replyInputContainer">
                <input
                    type="text"
                    value={replyText}
                    onChange={ (e) => setReplyText(e.target.value)}
                />
                <button onClick={() => addReply()}>Reply</button>
                <button onClick={()=> {showInput(false); setReplyText('')}}>Cancel</button>
            </div>
    )
}

export default CommentReply;