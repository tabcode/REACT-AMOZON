import Item from './Item';

function List(props) {
    return (
        <div className="list">
            {
                props.items.map(item =>
                    <Item key={item.id} movie={item} onDelete={props.onDelete} />
                )
            }
        </div>
    )
}

export default List;