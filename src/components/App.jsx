import { fetchDogByBreed } from "api";
import { Component } from "react";
import { BreedSelect } from "./BreedSelect";
import { Layout } from "./Layout";


export class App extends Component {
  state = {
    dog: null,
  }

  selectedBreed = async breedId => {
    try {
      const dog = await fetchDogByBreed(breedId);
      this.setState({ dog });
    } catch (error) {}
  }

  render() {
    return (
      <Layout>
        <BreedSelect onSelect={this.selectedBreed} />
      </Layout>
    );
  }
}
