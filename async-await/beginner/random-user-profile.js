// Fetch Random User

const fetchRandomUser = async () => {
  try {
    const response = await fetch('https://randomuser.me/api/');
    if (!response.ok) {
      throw new Error(`Failed to fetch user: ${response.status}`);
    }

    const data = await response.json();
    const user = data.results[0];
    return `Name: ${user.name.first} ${user.name.last}, Email: ${user.email}, Location: ${user.location.city}, ${user.location.country}`;
  } catch (error) {
    return `Error fetching user: ${error.message}`;
  }
};

const fetchMultipleUsers = async (count) => {
  console.log('Fetching random user profiles...');

  const promises = Array.from({ length: count }, () => fetchRandomUser());
  const results = await Promise.all(promises);

  results.forEach((result, index) =>
    console.log(`User ${index + 1}: ${result}`)
  );
};

fetchMultipleUsers(5);
