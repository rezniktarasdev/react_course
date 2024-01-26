import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";

function PostIdPage() {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    });
    const [fetchComments, comLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    });

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    }, [])
    return (
        <div className="post-container">
            <h1>You opened post with ID {params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div className="post">{post.id}. {post.title}</div>
            }
            <h1>Comments</h1>
            {comLoading
                ? <Loader/>
                : <div>
                    {comments.map((comment) => {
                        return (
                            <div key={comment.id} className="comment-card">
                                <h5>{comment.email}</h5>
                                <div>{comment.body}</div>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    );
}

export default PostIdPage;