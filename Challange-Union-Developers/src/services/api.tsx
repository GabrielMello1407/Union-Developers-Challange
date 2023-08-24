export async function fetchUsers() {
  const apiUrl = `https://randomuser.me/api/`;
  const resultsPerPage = 100; // Altere o número conforme necessário
  const seed = 'abc'; // Altere a semente conforme necessário

  try {
    const response = await fetch(`${apiUrl}?results=${resultsPerPage}&seed=${seed}`);
    const jsonData = await response.json();
    return jsonData.results;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}
