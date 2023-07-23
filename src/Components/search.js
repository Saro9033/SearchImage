import React from "react";


class search extends React.Component {
    // InputonChange(event) {
    //     console.log(event.target.value)
    // }

    constructor(props) {
        super(props)
        this.state = { entry: '' }
    }
    
onFormSubmit = (event)=>{
    event.preventDefault();
    this.props.onSearchSubmit(this.state.entry)
    this.state.entry =''
}
    render() {
        return (
            <div >
                <div className="searchContainer" >                   
                        <form  onSubmit={this.onFormSubmit}>
                        
                            <input className="SearchForm"
                                onChange={(event) => this.setState({entry:event.target.value})}
                                value={this.state.entry}
                                style={{ width: '300px', height: '35px'}} 
                                 type="text" placeholder="Search animals..."></input>
                        </form>                   
                </div>
            </div>
        )
    }
}
export default search