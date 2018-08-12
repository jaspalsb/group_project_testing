/*********************************************************
Group 14
account tests for the smart shopping application 
**********************************************************/
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinon_Chai = require('sinon-chai');
//chai.use(require('chai-dom'));

chai.use(sinon_Chai);

var index = require('./indexTest');
var signup = require('./signupTest');
var settings = require('./settingsTest');
var search = require('./searchTest');

describe('index page javascript test', ()=>{
    context('spy test functions in the index script file', ()=>{
       
        it('should spy on start function in index', ()=>{
            let spy = sinon.spy(index, 'start');
            index.start();
            
            expect(spy.called).to.be.true;

        })
        it('should spy on handleSubmit function in index', ()=>{
            let spy = sinon.spy(index, 'handleSubmit');
            index.handleSubmit();
            
            expect(spy.called).to.be.true;
        })
    })
})

describe('signup page javascript test', ()=>{
    context('spy test functions in the signup script file', ()=>{
       it('should spy on the displayData function in signup page', ()=>{
           let spy = sinon.spy(signup, 'displayData');
           signup.displayData();
           
           expect(spy.calledOnce).to.be.true;
           expect(spy).to.have.been.calledOnce;
           spy.restore();
       })
        it('should spy on start function in the signup page', ()=>{
            let spy = sinon.spy(signup, 'start');
            signup.start();
            
            expect(spy.called).to.be.true;

        })
        it('should spy on handleSubmit function in the signup page', ()=>{
            let spy = sinon.spy(signup, 'handleSubmit');
            signup.handleSubmit();
            
            expect(spy.called).to.be.true;
        })
    })
})

describe('settings page javascript test', ()=>{
    context('spy test functions in the SETTINGS script file', ()=>{
       it('should spy on the displayData function', ()=>{
           let spy = sinon.spy(settings, 'displayData');
           settings.displayData();
           
           expect(spy.calledOnce).to.be.true;
           expect(spy).to.have.been.calledOnce;
           spy.restore();
       })
        it('should spy on start function', ()=>{
            let spy = sinon.spy(settings, 'start');
            settings.start();
            
            expect(spy.called).to.be.true;

        })
        it('should spy on handleSubmit function', ()=>{
            let spy = sinon.spy(settings, 'handleSubmit');
            settings.handleSubmit();
            
            expect(spy.called).to.be.true;
        })
    })
})

describe('search page javascript test', ()=>{
    context('spy test functions in the SEARCH script file', ()=>{
       it('should spy on the displayData function in the search page', ()=>{
           let spy = sinon.spy(search, 'displayData');
           search.displayData();
           
           expect(spy.calledOnce).to.be.true;
           expect(spy).to.have.been.calledOnce;
           spy.restore();
       })
        it('should spy on start function in the search page', ()=>{
            let spy = sinon.spy(search, 'start');
            search.start();
            
            expect(spy.called).to.be.true;

        })
        it('should spy on handleSubmit function in the search page', ()=>{
            let spy = sinon.spy(search, 'handleSubmit');
            search.handleSubmit();
            
            expect(spy.called).to.be.true;
        })
    })
})
