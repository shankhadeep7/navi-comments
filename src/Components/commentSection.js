import CommentItem from './CommentItem';
import './commentSectionStyle.css';

const CommentSection = ({data, setData}) => {

    const renderComments = (tree) => {
        if(tree.length > 0) {
        return tree?.map( comment => {
            return (
                <div key={comment.id}>
                    <CommentItem
                    comment={comment}
                    parentTree={data}
                    setParentTree={setData}
                />
                </div>
            )
        })
        }
    }

    return (
      <div className="commentSpan">
        {renderComments(data)}
      </div>
    );
}

export default CommentSection;