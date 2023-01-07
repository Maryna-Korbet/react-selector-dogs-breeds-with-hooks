import { Component } from "react";
import { BreedSelect } from "./BreedSelect";
import { Layout } from "./Layout";


export class App extends Component {
  state = {
    selectedBreed: null,
  }

  selectedBreed = breedId => {
    console.log(breedId);
  }

  render() {
    return (
      <Layout>
        <BreedSelect onSelect={this.selectedBreed} />
      </Layout>
    );
  }
}
