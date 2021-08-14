import React, { Component } from "react";
import './drop_area.css';
const images = import.meta.globEager('../assets/drops/*.png');

class DropArea extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        const IMAGES = {
            blank: '../assets/drops/drop_area.png',
            hearts: '../assets/drops/drop_area_hearts.png',
            clubs: '../assets/drops/drop_area_clubs.png',
            spades: '../assets/drops/drop_area_spades.png',
            diamonds: '../assets/drops/drop_area_diamonds.png',     
        }

        const name = IMAGES[this.props.type] || IMAGES['blank'];

        const imgSrc = images[name].default;

        return (
            <div className="dropArea"
                style={{
                    background: `url(${imgSrc}) no-repeat center center`,
                }}
                onClick={this.props.onClick}>
            </div>
        )
    }
}

export default DropArea