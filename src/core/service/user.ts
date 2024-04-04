export const getUsersServiceApi = async () => {
  const response = await fetch(
    "https://rimac-front-end-challenge.netlify.app/api/user.json"
  );
  const data = await response.json();
  return data;
}