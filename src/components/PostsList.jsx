import PostItem from "./PostItem"
import { TransitionGroup, CSSTransition } from "react-transition-group";

function PostsList({posts, title, deletePost}) {

    if(!posts.length) {
        return (
            <h1 className='post__title'>There are no post!</h1>
        )
    }

    return (
        <div>
            <h1 className='post__title'>{title}</h1>
                <TransitionGroup>
                    {
                        posts.map((post, index) => (
                            <CSSTransition
                                key={post.id}
                                timeout={500}
                                classNames="post"
                            >
                                <PostItem number={index + 1}  post={post} deletePost={deletePost}/>
                            </CSSTransition>
                        ) )
                    }
                </TransitionGroup>
        </div>
    )
}

export default PostsList;