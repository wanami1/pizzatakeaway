
// File: supabase.js

import { createClient } from '@supabase/supabase-js';

// Initialize Supabase Client
const SUPABASE_URL = 'https://your-project-id.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Authentication Functions
async function signUpUser(email, password) {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) console.error('Error:', error.message);
    return data;
}

async function loginUser(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) console.error('Login failed:', error.message);
    return data;
}

// Database Functions
async function fetchData(tableName) {
    const { data, error } = await supabase.from(tableName).select('*');
    if (error) console.error('Error fetching data:', error.message);
    return data;
}

async function insertData(tableName, rowData) {
    const { data, error } = await supabase.from(tableName).insert([rowData]);
    if (error) console.error('Error inserting data:', error.message);
    return data;
}

async function updateData(tableName, matchCondition, updateValues) {
    const { data, error } = await supabase.from(tableName).update(updateValues).match(matchCondition);
    if (error) console.error('Error updating data:', error.message);
    return data;
}

export { signUpUser, loginUser, fetchData, insertData, updateData, supabase };
