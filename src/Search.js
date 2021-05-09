import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);
    }
    onSearch = (e) => {
        const query = e.target.value.toString().toLowerCase();
        this.props.onsearch(query);
    }
    render() {
        return (
            <input type="text" onChange={this.onSearch} />
        )
    }
}

export default Search;