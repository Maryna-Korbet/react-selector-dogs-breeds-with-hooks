import { Component } from "react";
import { BreedSelect } from "./BreedSelect";
import { Layout } from "./Layout";


export class App extends Component {
  render() {
    return (
      <Layout>
        <BreedSelect />
      </Layout>
    );
  }
}
