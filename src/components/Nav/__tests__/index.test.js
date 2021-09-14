import React from 'react';

//The cleanup function is used to remove components from the DOM to prevent memory leaking,
//The render function will do just what its name implies: "render" the component
import { render, cleanup } from '@testing-library/react';

// jest-dom has custom mtachers to inspect DOM elements 
import '@testing-library/jest-dom/extend-expect';

// import the component to be tested 
import Nav from '..';

//the cleanup function using the afterEach global function from Jest:
afterEach(cleanup); // to prevent false result

describe('Nav component',()=>{
    // renders 
    it('renders',()=>{
        render(<Nav/>)
    });
    it('matches snapshot',()=>{
        const {asFragment} =render(<Nav/>);
         // the expect function with a matcher to assert snapshots match
         expect(asFragment()).toMatchSnapshot();
    })
})
// if icon is visisble 
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
    // Arrange
    const { getByLabelText } = render(<Nav />);

    // Assert  
    expect(getByLabelText('camera')).toHaveTextContent('📸');

    })
  })  

// if links are vissible 
describe('links are visible', () => {
    it('inserts text into the links', () => {
      // Arrange
      const { getByTestId } = render(<Nav />);
      // Assert
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About me');
  
    });
  })