
import MyButton from './UI/button/MyButton.jsx';
import MyInput from './UI/input/MyInput.jsx'
import { useState } from 'react';



function PostForm({create}) {

    const [post, setPost] = useState({ title: '', body: '' });


    const addNewPost = (e) => {
        e.preventDefault();

        if (post.title && post.body) {
            const newPost = {
                ...post, id: Date.now()

            }
            create(newPost)
            setPost({ title: '', body: '' })
        }
     }

    return (
        <form>
            <MyInput
                type='text'
                placeholder='add title'
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
            />
            <MyInput
                type='text'
                placeholder='add description'
                value={post.body}
                onChange={(e) => setPost({ ...post, body: e.target.value })}
            />
            <MyButton onClick={addNewPost}>Create post</MyButton>
        </form>
    )
}

export default PostForm;