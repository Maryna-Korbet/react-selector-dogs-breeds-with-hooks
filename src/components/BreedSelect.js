import { fetchBreeds } from "api";
import { Component } from "react";

export class BreedSelect extends Component {
    state = {
        breeds: [],
    };
    
    async componentDidMount() {
        try {
            const response = await fetchBreeds();
            // console.log(response);
            this.setState({ breeds });
        } catch (error){}
    }
    render() {
        return <div>BreedSelect</div>;
    }
}
