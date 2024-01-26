import { useNavigate } from "react-router-dom";
import MyButton from "./UI/button/MyButton";

function PostItem(props) {
    const router = useNavigate();

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => router(`/posts/${props.post.id}`)}>Open</MyButton>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => props.deletePost(props.post.id)}>Delete</MyButton>
            </div>
        </div>
    )
}

export default PostItem;


// @dr1m_o_o
// 5 месяцев назад
// Тем, кто делает сейчас. useHistory убрали, вместо него вы можете использовать useNavigate
// Было const router = useHistory()
// Стало const router = useNavigate()
// Далее, router.push('/path') меняем на router('/path')
// router.replace('/path') меняем на router('/path', {replace: true})
// Если вы хотите использовать state, используйте router('/path', { state: { name:'Xyz' }})