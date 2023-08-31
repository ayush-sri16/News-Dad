import React, { Component } from 'react'

export class Newsitem extends Component {


    render() {
        let { title, description, imageUrl, newsUrl, author, publishedAt ,source} = this.props;
        return (
            <div className="card my-3" >
                <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex:"1", left:"82%"}}>{source.name}</span>
                        <img src={imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small className="text-muted text-danger">By:{author} <br /> {new Date(publishedAt).toGMTString()}</small></p>
                            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                    </div>
                    )
    }
}

                    export default Newsitem