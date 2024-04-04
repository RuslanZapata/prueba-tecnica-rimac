export const getPlansServiceApi = async () => {
  const response = await fetch(
    "https://rimac-front-end-challenge.netlify.app/api/plans.json"
  );
  const {list} = await response.json();

  return list;
}
