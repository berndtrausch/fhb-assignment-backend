import { expect } from 'chai';
import request from 'supertest';
import app from '../index.js';

describe('Notes API', () => {
    // Test für das Abrufen aller Notizen
    it('should get all notes', async () => {
        const res = await request(app)
            .get('/api/notes')
            .expect(200)
            .expect('Content-Type', /application\/json/)

        expect(res.body).to.be.an('array')
        expect(res.body).to.have.lengthOf(3)
    })

    // Test für das Hinzufügen einer neuen Notiz
    it('should add a new note', async () => {
        const newNote = {
            content: 'Test note',
            important: true
        }

        const res = await request(app)
            .post('/api/notes')
            .send(newNote)
            .expect(200)
            .expect('Content-Type', /application\/json/)

        expect(res.body).to.include({
            content: 'Test note',
            important: true
        })
        expect(res.body.id).to.be.a('number')
        expect(res.body.date).to.be.a('string')
    })

    // Test für das Abrufen einer Notiz nach ID
    it('should get a note by id', async () => {
        const res = await request(app)
            .get('/api/notes/1')
            .expect(200)
            .expect('Content-Type', /application\/json/)

        expect(res.body).to.include({
            id: 1,
            content: 'HTML is easy',
            important: true
        })
    })

    // Test für den Fall, dass eine Notiz nicht gefunden wird
    it('should return 404 for non-existing note', async () => {
        await request(app)
            .get('/api/notes/999')
            .expect(404)
    })
})