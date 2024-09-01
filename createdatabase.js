//  mydatabase degan databaza yaratadi.

const { Client } = require('pg');

const config = {
  user: 'postgres',
  host: 'localhost',
  password: 'ibr0him$!',
  port: 5437,
};

const client = new Client(config);

async function createDatabase() {
  try {
    await client.connect();
    console.log('PostgreSQL ga ulanish muvaffaqiyatli amalga oshdi.');

    // Ma'lumotlar bazasi mavjudligini tekshirish
    const res = await client.query(
      "SELECT 1 FROM pg_database WHERE datname = 'mydatabase'"
    );
    if (res.rows.length === 0) {
      // Ma'lumotlar bazasi mavjud emas, yaratamiz
      await client.query('CREATE DATABASE mydatabase;');
      console.log('mydatabase yaratildi.');
    } else {
      console.log('mydatabase allaqachon mavjud.');
    }
  } catch (err) {
    console.error('Ma\'lumotlar bazasini yaratishda xatolik:', err);
  } finally {
    // await client.end();
    console.log('Clientni uzdim.');
  }
}

module.exports = {
    createDatabase,
}
