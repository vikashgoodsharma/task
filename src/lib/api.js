export async function fetchData(url) {
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      // Handle errors here
      console.error('Error fetching data:', error);
      throw new Error('Error fetching data');
    }
  }