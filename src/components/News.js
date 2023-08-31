import React, { Component } from 'react'
import Newsitem from './Newsitem';
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {
    
    static defaultProps = {
        country: "in",
        pageSize: "3",
        categories: "general"
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        categories: PropTypes.string
    }
    capitalise=(string)=>{
        return string.charAt(0).toUpperCase()+ string.slice(1);

    }
    constructor(props) {
        
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        
        document.title=`News Dad-${this.capitalise(this.props.categories)}`;
    }
    

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.categories}&apiKey=cb1f8a15b2e6428d87642b0b7bfbfb44&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    async componentDidMount() {
        this.updateNews();


    }

    handlePrev = async () => {
        this.setState({
            page: this.state.page - 1
        })
        this.updateNews();

    }

    handleNext = async () => {
        this.setState({
            page: this.state.page + 1
        })
        this.updateNews();
    }

    render() {
        const flex = {
            display: "flex",
            justifyContent: "space-around",
            paddingTop: "30px",
            paddingBottom: "30px"
        };
        const heading = {
            color: "white",
            fontSize: "2.5rem",
            fontFamily: "fangsong",
            textAlign: "center",
            margin: " 40px auto",
            paddingBottom: "12px"
        };
        return (
            <div className='container my-3' >
                <h2 style={heading}>News Dad Top Headlines-({this.capitalise(this.props.categories)})</h2>
                {this.state.loading ? <Spinner /> : ""}
                <div className="row">
                    {this.state.loading ? "" : this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <Newsitem className="bg-dark" title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://images.moneycontrol.com/static-mcnews/2022/12/stocks_sensex_nifty_stockmarkets-1-770x433.jpg"} newsUrl={element.url} author={element.author ? element.author : "Unknown"} publishedAt={element.publishedAt} source={element.source} />
                        </div>
                    })}
                </div>
                <div className="container" style={flex}>
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-light" onClick={this.handlePrev} >&larr;Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-light" onClick={this.handleNext}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News