/*********************************************************
Group 14
Integration tests for the smart shopping application 
**********************************************************/
const chai = require('chai');
const expect = chai.expect;

const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

const rewire = require('rewire');
const request = require('supertest');

var index = rewire('./index');

var sandbox = sinon.sandbox.create();


describe('Integration testing for each web app page', () => {
    afterEach(() => {
        index = rewire('./index');
        sandbox.restore();
    });

    describe('GET root page', () => {
        it('should test to see if the homepage is working', (done) => {
            request(index).get('/')
                .expect(200)
                .end((err, response) => {
                    done(err);
                });
        });
    });
        describe('GET accountCreation page', () => {
        it('should test to see if the account creation page is working', (done) => {
            request(index).get('/accountCreation')
                .expect(200)
                .end((err, response) => {
                    done(err);
                });
        });
    });
        describe('GET settings page', () => {
        it('should test to see if the settings page is working', (done) => {
            request(index).get('/settings')
                .expect(200)
                .end((err, response) => {
                    done(err);
                });
        });
    });
        describe('GET search page', () => {
        it('should test to see if the search page is working', (done) => {
            request(index).get('/search')
                .expect(200)
                .end((err, response) => {
                    done(err);
                });
        });
    });
});
