import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import './quote.css';



class Quote extends React.Component {
    static contextType = ThemeContext;
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            isLoading: false
        }
    }

    componentDidMount() {
        this.fetchQuote();
    }

    fetchQuote = () => {
        this.setState({
            isLoading: true
        })
        const url = "https://zenquotes.io/api/today/76bbbbe474dfd55a865e408dc71943c5";
        
        fetch(url)
     
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    quote: data[0].q,
                    author: data[0].a,
                    isLoading: false
                })
                
            })
        }
    render() {
        console.log(this.context);
        const{ isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div style={{background:theme.ui, color: theme.syntax}} className="zenquote">
                <p className="quotecaption">{this.state.isLoading ? "Loading..." : this.state.quote} </p>
                <p className="quoteauthor">{this.state.author}</p>
                <button onClick={this.fetchQuote}>Today's Quote</button>
            </div>
        )
    }
}
export default Quote;
