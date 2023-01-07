import { Component } from "react";
import Select from 'react-select'
import { fetchBreeds } from "api";

export class BreedSelect extends Component {
    state = {
        breeds: [],
        error: null,
    };
    
    async componentDidMount() {
        try {
            const breeds = await fetchBreeds();
            this.setState({ breeds });
        } catch (error) {
            this.setState({
                error: 'Error. Try reloading the page.'
            });
        }
    }

    makeOptions = () => {
        return this.state.breeds.map(breed => ({
            value: breed.id,
            label: breed.name
        }));
    }

    render() {
        const options = this.makeOptions();
        return (
            <div>
                <Select
                    options={options}
                    onChange={option => {
                        console.log(option);
                    }}
                />
            </div>
        );
    }
}
