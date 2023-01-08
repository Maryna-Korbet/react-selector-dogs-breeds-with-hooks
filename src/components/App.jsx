import { fetchDogByBreed } from "api";
import { Component } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { BreedSelect } from "./BreedSelect";
import { Layout } from "./Layout";
import { Dog } from "./Dog";
import { DogSkeleton } from "./DogSkeleton";

export class App extends Component {
  state = {
    dog: null,
    isLoading: false,
    error: null,
  }

  selectedBreed = async breedId => {
    try {
      this.setState({ isLoading: true, error: null });
      const dog = await fetchDogByBreed(breedId);
      this.setState({ dog });
    } catch {
      toast.error("The dog did not boot, please try again.")
    } finally {
      this.setState({isLoading: false})
    }
  }

  render() {
    const { error, dog, isLoading } = this.state;
    return (
      <Layout>
        <BreedSelect onSelect={this.selectedBreed} />
        {dog && !isLoading && <Dog dog={dog} breeds={this.breeds} />}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {isLoading && <DogSkeleton />}
        <Toaster position="bottom-right"/>
      </Layout>
    );
  }
}
