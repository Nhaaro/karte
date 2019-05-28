import React, { Component } from 'react'

export class Search extends Component {
    state = {
        invitaciones: [
            {
                uri: "bs",
                title: "bs",
                image: require("../img/inv1.png"),
                tags: [
                    "bs"
                ],
                active: 1
            },
            {
                uri: "boda",
                title: "boda",
                image: require("../img/inv2.png"),
                tags: [
                    "boda",
                    "elegante",
                ],
                active: 1
            },
            {
                uri: "xv",
                title: "xv",
                image: require("../img/inv3.png"),
                tags: [
                    "XV"
                ],
                active: 1
            },
        ]
    }
    render() {
        const invs = this.state.invitaciones.filter(
            inv => !inv.tags.indexOf(this.props.match.params.tag)
        )
        return (
            <div>
                {invs.map((inv, key) => (
                    <div key={key}>
                        <p>{inv.title}</p>
                        <img src={inv.image} alt={inv.title} />
                        <div>tags: {inv.tags.map((tag,i) => <p key={i}>{tag}</p>)}</div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Search