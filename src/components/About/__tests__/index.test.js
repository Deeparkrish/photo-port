import React from 'react';

//The cleanup function is used to remove components from the DOM to prevent memory leaking,
//The render function will do just what its name implies: "render" the component
import { render, cleanup } from '@testing-library/react';

// jest-dom has custom mtachers to inspect DOM elements 
import '@testing-library/jest-dom/extend-expect';

// import the component to be tested 
import About from '..';

//the cleanup function using the afterEach global function from Jest:
afterEach(cleanup); // to prevent false result 

//  describe function that states which component is tested 
describe('About component', () => {
    //renders About test- it or test can be used 
    it('renders', () => {
        render(<About />);
      });
    it('matches snapshot DOM node structure',()=>{
        //asFragment function, which returns a snapshot of the About component
        const {asFragment} =render(<About/>);
        // the expect function with a matcher to assert snapshots match
        expect(asFragment()).toMatchSnapshot();


    })
  
    })
