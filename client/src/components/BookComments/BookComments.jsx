import { useNewUsersContext } from "../../Context/NewUsersContext";

const BookComments = ({
  handleComments,
  commentValue,
  setCommentValue,
  comments,
  removeComment,
}) => {
  const { currentUser } = useNewUsersContext();

  return (
    <div className="read-comments-container">
      <div className="comments-section">
        <h4>Comments Section</h4>
        {currentUser && (
          <>
            <div className="add-comment">
              <form onSubmit={handleComments} className="submit-comment">
                <div className="comment-container">
                  <input
                    required
                    type="text"
                    value={commentValue}
                    maxLength={100}
                    onChange={(e) => setCommentValue(e.target.value)}
                  />
                  <button type="submit">Comment</button>
                </div>
              </form>
            </div>
          </>
        )}

        <div className="read-comment-box">
          {comments?.map((data) => {
            return (
              <div className="read-comment" key={data?._id}>
                <p
                  onClick={() => removeComment(data?._id)}
                  className={
                    data?.user?.name === currentUser?.name
                      ? "remove-comment"
                      : "hide"
                  }
                >
                  Delete
                </p>
                <h5>
                  <span className="username">
                    {data?.user?.name ? data?.user?.name : "Deleted User"}{" "}
                  </span>{" "}
                  commented:
                </h5>
                <p className="comment">{data?.comment}</p>
              </div>
            );
          })}
          {comments?.length === 0 && <h5 id="no-comments">No Comments </h5>}
        </div>
      </div>
    </div>
  );
};

export default BookComments;
