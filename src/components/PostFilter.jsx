import MySelect from './UI/select/MySelect';
import MyInput from './UI/input/MyInput';

function PostFilter({filter, setFilter}) {
    return (
        <div>
        <MyInput
            value={filter.query}
            onChange={(e) => setFilter({...filter, query: e.target.value})}
            placeholder='search...'
        />
        <MySelect
            value={filter.sort}
            onChange={selectedSort =>  setFilter({...filter, sort: selectedSort})}
            defaultValue={"Sort by "}
            options={[
                {value: 'title', name: 'By title'},
                {value: 'body', name: 'By description'}
            ]}
        />
    </div>
    );
}

export default PostFilter;