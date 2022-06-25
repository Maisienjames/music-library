const { expect } = require('chai');
const request = require('supertest');
const getDb = require('../src/services/db');
const app = require('../src/app');

describe('create album', () => {
    let db;
    let artists;

    beforeEach(async () => (db = await getDb()))
    afterEach(async () => {
      await db.query('DELETE FROM Album');
      await db.close();
    });
 
    describe('/artist/:artistId/album', () => {
      describe('POST', () => {
        it('creates a new album in the database', async () => {
          const res = await request(app).post('/artist/:artistId/album').send({
            name: 'Exmilitary',
            year: '2011',
          });
 
          expect(res.status).to.equal(201);
          const [[albumEntries]] = await db.query(`SELECT * FROM Album WHERE name = 'Exmilitary'`)
 
          expect(albumEntries.name).to.equal('Exmilitary');
          expect(albumEntries.year).to.equal('2011');
        });
    });
  });
});