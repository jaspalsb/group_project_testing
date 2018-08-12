/*********************************************************
Group 14
account tests for the smart shopping application 
**********************************************************/
const chai = require('chai');
const expect = chai.expect;

var User = require('./account');

describe('Account Creation', () => {
    context('Testing the cereation of the accounts in the database', ()=>{
    it('should have email and password', (done) => {
        let user = new User({
            email: 'test@oregonstate.edu',
            password: 'test1',
        });

        expect(user).to.have.property('email');
        expect(user).to.have.property('password');
        done();
    });
    
    it('should give an error if the email and password are missing entries', (done) => {
        let user = new User();

        user.validate((err) => {
            expect(err.errors.name).to.not.exist;
            expect(err.errors.email).to.exist;
            expect(err.errors.password).to.exist;
            expect(err.errors.stapleTrack).to.not.exist;
            expect(err.errors.zip).to.not.exist;

            done();
        });
    });
});
});

describe('Account validation', () => {
    context('Testing the validation of the user data in the database', ()=>{
    it('should test if the name is the same in the database', (done) => {
        let user = new User({
            name: 'test',
            email: 'test@oregonstate.edu',
            stapleTrack: 1,
            password: 'test1',
            zip: 94103
        });

        expect(user).to.have.property('name').to.equal('test');
        done();
    });
    it('should test if the email is the same in the database', (done) => {
        let user = new User({
            name: 'test',
            email: 'test@oregonstate.edu',
            stapleTrack: 1,
            password: 'test1',
            zip: 94103
        });

        expect(user).to.have.property('email').to.equal('test@oregonstate.edu');
        done();
    });
    it('should test if the stapleTrack matches in the database', (done) => {
        let user = new User({
            name: 'test',
            email: 'test@oregonstate.edu',
            stapleTrack: 1,
            password: 'test1',
            zip: 94103
        });

        expect(user).to.have.property('stapleTrack').to.equal(1);
        done();
    });
    it('should test if the password is correct', (done) => {
        let user = new User({
            name: 'test',
            email: 'test@oregonstate.edu',
            stapleTrack: 1,
            password: 'test1',
            zip: 94103
        });

        expect(user).to.have.property('password').to.equal('test1');
        done();
    });
    it('should test if the zip for the user is correct', (done) => {
        let user = new User({
            name: 'test',
            email: 'test@oregonstate.edu',
            stapleTrack: 1,
            password: 'test1',
            zip: 94103
        });

        expect(user).to.have.property('zip').to.equal(94103);
        done();
    });
});
});
