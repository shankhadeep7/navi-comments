import { useState } from "react";
import CommentReply from "./CommentReply";
import './commentSectionStyle.css';

const CommentItem = ({comment, parentTree, setParentTree}) => {

    const [showReplyBox, setShowReplyBox] = useState(false);
    const [localCommentTree, setlocalCommentTree] = useState(comment?.children);
    const [enableEditComment, setEnableEditComment] = useState(false);
    const [editText, setEditText] = useState(comment.text);
    
    const addReplyToComment = (newComment) => {
        setlocalCommentTree(current => [...current, newComment ]);
        setShowReplyBox(false);
    }

    const editComment = () => {
        comment.text = editText;
        setEnableEditComment(false);
    }
 
    const deleteComment = (id) => {
        let newTree = parentTree.filter( comment => comment.id !== id);
        setParentTree(newTree);
    }

    return (
        <div>
            <div className="greyBox">
                <div className="commentInfo">
                    { enableEditComment ?
                    <input type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}/>
                    :
                    <p>
                    {comment.text}
                    </p>}
                    {
                    enableEditComment ?
                    <button onClick={() => editComment()}>
                        Save
                    </button> 
                    :
                    <div>
                        <button 
                        className="deleteButton" 
                        onClick={() => deleteComment(comment.id)}
                        >
                                Delete
                        </button>
                        <button className="replyButton" 
                        onClick={() => setShowReplyBox(true)}
                        >
                            Reply
                        </button>
                        <button className="editButton"
                        onClick={() => setEnableEditComment(true)}>
                            Edit
                        </button>
                    </div>
                    }
                </div>
                <div className="timestamp">
                    <p>{comment.timestamp}</p>
                </div>            
            </div>
            { showReplyBox && <CommentReply onReply={addReplyToComment} showInput={setShowReplyBox}/>}
            { localCommentTree.length > 0 && 
             localCommentTree.map(comment => {
                return (
                <div className="nested" key={comment.id}>
                    <CommentItem comment={comment} parentTree={localCommentTree} setParentTree={setlocalCommentTree}/>
                </div>
                )
            })
            }
        </div>
    )
}

export default CommentItem;