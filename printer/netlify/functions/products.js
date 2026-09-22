// backend

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

exports.handler = async function () {
  return {
  stausCode: 200,
  body: "Backend töötab"
 };
}; 