import React from 'react';
import './Item.css';

class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stars: [],
            rating: 0
        }
    }

    componentDidMount() {
        this.setState({
            stars: Array(parseInt(this.props.movie.rating)).fill(0)
        });
    }

    onChangeRating = (e) => {
        const rating = parseInt(e.target.value);
        this.setState({
            rating,
            stars: Array(parseInt(rating)).fill(1)
        });
    }

    render() {
        return (
            <div className="item">
                <div className="image">
                    <img src={this.props.movie.image} alt="movie" width="100%" />
                </div>
                <div className="title">{this.props.movie.title}</div>
                <div className="rating">
                    <p>
                        {
                            this.state.stars.map((data, index) =>
                                <img key={index} alt="starts" src="./img/star.png" width="32" />
                            )
                        }
                    </p>
                    Clasification:
                    <select defaultValue={this.props.movie.rating} onChange={this.onChangeRating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="actions">
                    <button onClick={(e) => { this.props.onDelete(this.props.movie.id) }}>Eliminar</button>
                </div>
            </div>
        )
    }
}

export default Item;