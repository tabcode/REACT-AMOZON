import React from "react";

class PanelAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            image: '',
            rating: 0
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        const { title, image, rating } = this.state;
        this.props.onadd({ title, image, rating });
        this.props.oncancel(e);
    }
    render() {
        return (
            <div className="new-item-panel-container">
                <div className="new-item-panel">
                    <form onSubmit={this.onSubmit}>
                        <p>
                            <label>Titulo del libro</label><br />
                            <input onChange={(e) => this.setState({ title: e.target.value })} type="text" name="title" className="input" />
                        </p>

                        <p>
                            <label>Nombre de la imagen</label><br />
                            <input onChange={(e) => this.setState({ image: e.target.value })} type="text" name="image" className="input" />
                        </p>

                        <p>
                            <label>Clasification</label><br />
                            <select onChange={(e) => this.setState({ rating: parseInt(e.target.value) })}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </p>

                        <input type="submit" className="button btn-blue" value="Registrar libro" />
                        <button className="button btn-normal" onClick={this.props.oncancel}>Cancelar</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default PanelAdd;