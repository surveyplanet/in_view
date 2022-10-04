import inView from '../in_view.js';
import
{
    JSDOM
}
from 'jsdom';
import
{
    expect
}
from 'chai';

describe('inView (Tests are limited since dimensions and position cannnot be set with jsdom)', () =>
{

    let box;

    before(async () =>
    {

        const markup = '<html><body></body></html>';
        const dom = new JSDOM(markup,
        {
            url: 'http://localhost'
        });

        // Add window and document to global scope so it's accessible from in_view.js
        global.window = dom.window;
        global.document = dom.window.document;

        box = document.createElement('div');
        box.innerHTML = 'Hello';
        document.body.appendChild(box);
        box.style.backgroundColor = 'red';
        box.style.position = 'absolute';
        // width, height and position do not work in jsdom
        // Karma would work better for these test but doesn't work in CI/CD pipeline
        // console.log( box.getBoundingClientRect() ); 
        box.style.width = '100px';
        box.style.height = '100px';

    });


    it('should confirm the element is inside the viewport', () =>
    {
        expect(inView(box)).to.be.true;
    });

    // it('should confirm the element is 1px inside the viewport', () => {

    // 	box.style.top = '-99px';
    // 	expect( inView(box) ).toBe(false);
    // 	expect( inView(box, {partial: true}) )to.be.true;

    // });

    // it('should confirm the element is halfway inside the viewport', () => {

    // 	box.style.top = '-50px';
    // 	expect( inView(box, {offset:'50%'}) )to.be.true;

    // });

    // it('should confirm the element is 1px less than half way inside the viewport', () => {

    // 	box.style.top = '-51px';
    // 	expect( inView(box, {offset:'50%'}) ).toBe(false);
    // 	expect( inView(box, {offset:50}) ).toBe(false);

    // });

    // it('should confirm the element is 1px inside the viewport', () => {

    // 	box.style.top = '1px';
    // 	box.style.left = '-99px';
    // 	expect(inView(box)).toBe(false);
    // 	expect( inView(box, {partial: true}) )to.be.true;

    // });

    // it('should confirm the element is 1px inside the viewport', () => {

    // 	box.style.left = '-50px';
    // 	expect( inView(box, {offset:'50%'}) )to.be.true;

    // });

    // it('should confirm the element is 1px inside the viewport', () => {

    // 	box.style.left = '-51px';
    // 	expect( inView(box, {offset:'50%'}) ).toBe(false);
    // 	expect( inView(box, {offset:50}) ).toBe(false);

    // });


});