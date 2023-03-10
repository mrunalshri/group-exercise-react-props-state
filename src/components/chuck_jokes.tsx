import Joke from "../joke";

interface ChuckJokeProps {
  jokes: Joke[];
}

const ChuckJokes: React.FC<ChuckJokeProps> = (jokes: ChuckJokeProps) => {
  const jokeInfo = jokes.jokes.map((joke) => {
    return (
      <p key={joke.id}>
        {joke.id}. {joke.joke}
      </p>
    );
  });
  return <>{jokeInfo}</>;
};
export default ChuckJokes;
