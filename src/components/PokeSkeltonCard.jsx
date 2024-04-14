import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function PokeSkeltonCard({ cards }) {
  return (
    Array(cards)
      .fill(0)
      // eslint-disable-next-line no-unused-vars
      .map((item, index) => (
        <div key={index}>
          <div className={`mt-4 card`}>
            <Skeleton circle={true} className="card-img" height={100} width={100} />
            <div className="pokemon-id">
              <Skeleton />
            </div>
            <div className="card-body">
              <Skeleton className="card-title" />
              <Skeleton className="card-text" />
              <div className="stats">
                <Skeleton className="statItem" />
                <Skeleton className="statItem" />
                <Skeleton className="statItem" />
              </div>
              <div className="types">
                <Skeleton className="tipo" />
          
                <Skeleton className="tipo" />
              </div>
            </div>
          </div>
        </div>
      ))
  );
}
