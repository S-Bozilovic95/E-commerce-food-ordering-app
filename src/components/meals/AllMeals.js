import useGetRequestToArray from "../../hooks/use-getRequestToArray";

const AllMeals = () => {
  const data = useGetRequestToArray("meals");
  const mealsList = data.itemsArray;
  const isLoading = data.isLoading;

  return (
    <>
      {mealsList && !isLoading && (
        <ul>
          {mealsList.map((item) => {
            return (
              <li key={item.id}>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.description}</p>
                <img
                  src={item.image}
                  style={{ width: "100px" }}
                  alt={item.name}
                />
              </li>
            );
          })}
        </ul>
      )}
      {isLoading && <p>Loading...</p>}
    </>
  );
};

export default AllMeals;
