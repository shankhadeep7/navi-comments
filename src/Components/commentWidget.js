import { useState } from 'react';
import CommentSection from './commentSection';
import './commentWidgetStyle.css';

const CommentWidget = () => {

    const [commentTree, setCommentTree] = useState([]);
    const [parentInput, setParentInput] = useState('');
    const date = new Date();
    const addParentComment = () => {
        if( parentInput.length > 0 ) {
            let node = {
                id : Math.random() * 1000,
                text: parentInput,
                timestamp: date.toUTCString(),
                children: []
            }
            setCommentTree( current => [...current, node]);
            setParentInput('');
        }
    }

    return (
    <div className="container">
        <div className="heading">
            <h1>Comment Widget</h1>
        </div>
        <div className="parentInput">
            <input
            type="text"
            value={parentInput}
            className="inputBox"
            autoFocus={false}
            onChange={ (e) => setParentInput(e.target.value)}
            />
            <button
            className="addButton"
            onClick={() => addParentComment()}
            >
                ADD COMMENT
            </button>
        </div>
        { commentTree.length > 0 && 
        <div className="commentSection">
           <CommentSection
            data={commentTree}
            setData={setCommentTree}
           />
        </div>}
    </div>
    );
}

export default CommentWidget;