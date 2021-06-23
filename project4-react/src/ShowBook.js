
import React, { Component } from 'react'

export default class ShowBook extends Component {
    constructor(props){
        super(props);
        this.state = {
            bookName: "" ,
            author : "" ,
            content :""
        };
    }
    componentWillMount() {
        this.setState({ bookName: "The Creative Habit: Learn It and Use It For Life" });
        this.setState({ author: "Author : Twyla Tharp" });
        this.setState({ content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." });
    }
    render() {
        return (
            <div>
        {this.state.bookName}  
        {this.state.author}     
        <p>Simple Sample of book</p>
        <hr />
        {this.state.content}

            </div>
        )
    }
}


