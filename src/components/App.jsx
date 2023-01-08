import { fetchDogByBreed } from "api";
import { Component } from "react";
import { BreedSelect } from "./BreedSelect";
import { Layout } from "./Layout";


export class App extends Component {
  state = {
    dog: null,
    isLoading: false,
    error: null,
  }

  selectedBreed = async breedId => {
    try {
      this.setState({isLoading: true})
      const dog = await fetchDogByBreed(breedId);
      this.setState({ dog });
    } catch {
      this.setState({
        error: "The dog did not boot, please try again."
      })
    } finally {
      this.setState({isLoading: false})
    }
  }

  render() {
    const { error, dog, isLoading } = this.state;
    return (
      <Layout>
        <BreedSelect onSelect={this.selectedBreed} />
        {dog && <img src={this.state.dog.url} alt="" width={600}/>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {isLoading && <div>LOADING...</div>}
      </Layout>
    );
  }
}
