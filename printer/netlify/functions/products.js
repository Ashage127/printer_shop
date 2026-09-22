// backend

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

exports.handler = async function () {
  try {
    const response = await fetch(
  `${SUPABASE_URL}products?active=eq.true&select=*`,
  {
    headers: {
      apikey: SUPABASE_KEY
    }
  }
);

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message
      })
    };
  }
};
