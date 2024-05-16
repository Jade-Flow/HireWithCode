const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(
  "https://wjjsqstugoqcdmatgxqr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqanNxc3R1Z29xY2RtYXRneHFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUzNTY2MDMsImV4cCI6MjAzMDkzMjYwM30.HH3Mx8gJiDonlwwGhuTHZFvxvVIrObRPE5DAbbEEeW4"
);

module.exports = supabase;
