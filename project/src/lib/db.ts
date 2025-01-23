import { DB } from '@vlcn.io/crsqlite-wasm';

let db: DB | null = null;

export async function initDB() {
  if (db) return db;
  
  const sqlite = await import('@vlcn.io/crsqlite-wasm');
  await sqlite.default.init();
  
  db = await sqlite.default.open(':memory:');
  
  // Create tables
  await db.exec(`
    CREATE TABLE IF NOT EXISTS profiles (
      id TEXT PRIMARY KEY,
      full_name TEXT,
      email TEXT UNIQUE,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS donations (
      id TEXT PRIMARY KEY,
      user_id TEXT,
      amount DECIMAL NOT NULL CHECK (amount > 0),
      is_monthly BOOLEAN DEFAULT 0,
      status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed')),
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES profiles(id)
    );

    CREATE TRIGGER IF NOT EXISTS update_profiles_timestamp 
    AFTER UPDATE ON profiles
    BEGIN
      UPDATE profiles SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
    END;

    CREATE TRIGGER IF NOT EXISTS update_donations_timestamp 
    AFTER UPDATE ON donations
    BEGIN
      UPDATE donations SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
    END;
  `);

  return db;
}

export async function createProfile(data: { id: string; full_name: string; email: string }) {
  const db = await initDB();
  await db.exec({
    sql: 'INSERT INTO profiles (id, full_name, email) VALUES (?, ?, ?)',
    bind: [data.id, data.full_name, data.email]
  });
}

export async function createDonation(data: { 
  user_id: string; 
  amount: number; 
  is_monthly: boolean;
  status?: 'pending' | 'completed' | 'failed';
}) {
  const db = await initDB();
  const id = crypto.randomUUID();
  await db.exec({
    sql: 'INSERT INTO donations (id, user_id, amount, is_monthly, status) VALUES (?, ?, ?, ?, ?)',
    bind: [id, data.user_id, data.amount, data.is_monthly ? 1 : 0, data.status || 'pending']
  });
  return id;
}