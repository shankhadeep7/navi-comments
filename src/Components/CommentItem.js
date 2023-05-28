import { useState } from "react";
import CommentReply from "./CommentReply";
import './commentSectionStyle.css';

const CommentItem = ({comment, parentTree, setParentTree}) => {

    const [showReplyBox, setShowReplyBox] = useState(false);
    const [localCommentTree, setlocalCommentTree] = useState(comment?.children);
    
    const addReplyToComment = (newComment) => {
        setlocalCommentTree(current => [...current, newComment ]);
        setShowReplyBox(false);
    }
 
    const deleteComment = (id) => {
        let newTree = parentTree.filter( comment => comment.id !== id);
        setParentTree(newTree);
    }

    return (
        <div>
            <div className="greyBox">
                <p>
                {comment.text}
                </p>
                <button 
                className="deleteButton" 
                onClick={() => deleteComment(comment.id)}
                >
                        Delete
                </button>
                <button className="replyButton" 
                onClick={() => setShowReplyBox(true)}
                >
                    reply
                </button>            
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