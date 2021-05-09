import './App.css';
import Menu from './Menu';
import List from './List';
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                { id: 0, rating: 4, title: 'Harry Potter y el cáliz de fuego', image: 'img/libro01.jpg' },
                { id: 1, rating: 3, title: 'The shining', image: 'img/libro02.jpg' },
                { id: 2, rating: 5, title: 'Código Da Vinci', image: 'img/libro03.jpg' },
                { id: 3, rating: 5, title: 'El principito', image: 'img/libro04.jpg' },
                { id: 4, rating: 5, title: 'Sobrenatural', image: 'img/libro05.jpg' }
            ],
            copyBooks: []
        }
    }

    componentDidMount() {
        this.initBooks();
    }

    initBooks = () => {
        this.setState((state, props) => ({
            copyBooks: [...state.books]
        }));
    }

    onAdd = (data) => {
        let books = [...this.state.books];
        books.push({
            id: this.state.books.length + 1,
            title: data.title,
            image: data.image,
            rating: data.rating
        })
        this.setState({
            books
        });
        this.initBooks();
    }

    onSearch = (query) => {
        if (query === '') this.initBooks();
        else {
            const temp = [...this.state.books];
            let res = [];

            temp.forEach(item => {
                if (item.title.toLowerCase().indexOf(query) > -1) {
                    res.push(item);
                }
            });

            this.setState({
                copyBooks: [...res]
            });
        }
    }

    onDelete = (id) => {
        let temp = [...this.state.copyBooks];
        temp.map((e, index) => {
            if (e.id === id) temp.splice(index, 1);
        });
        this.setState({
            copyBooks: [...temp]
        });
    }

    render() {
        return (
            <div className="app">
                <Menu title="Amozon" onadd={this.onAdd} onSearch={this.onSearch} />
                <List items={this.state.copyBooks} onDelete={this.onDelete} />
            </div>
        );
    }
}

export default App;