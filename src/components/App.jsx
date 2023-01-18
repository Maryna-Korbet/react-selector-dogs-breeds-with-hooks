import { fetchDogByBreed } from "api";
import { useState } from "react";
import { BreedSelect } from "./BreedSelect";
import { Layout } from "./Layout";
import { Dog } from "./Dog";
import { DogSkeleton } from "./DogSkeleton";

const ERROR_MESSAGE = "The dog did not boot, please try again.";

export function App () {
    const [dog, setDog] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

  const selectedBreed = async breedId => {
    try {
      setIsLoading(true);
      setError(null);
      const dog = await fetchDogByBreed(breedId);
      setDog( dog );
    } catch {
      setError(ERROR_MESSAGE);
    } finally {
      setIsLoading(false);
    }
  }

    return (
      <Layout>
        <BreedSelect onSelect={selectedBreed} />
        {dog && !isLoading && <Dog dog={dog} />}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {isLoading && <DogSkeleton />}
      </Layout>
    );
}
