import React from 'react';

//The cleanup function is used to remove components from the DOM to prevent memory leaking,
//The render function will do just what its name implies: "render" the component
import { render, cleanup } from '@testing-library/react';

// jest-dom has custom mtachers to inspect DOM elements 
import '@testing-library/jest-dom/extend-expect';

// import the component to be tested 
import Nav from '..';

const categories = [
  { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

//the cleanup function using the afterEach global function from Jest:
afterEach(cleanup); // to prevent false result

describe('Nav component matches snapshot 1',()=>{
    // renders 
    it('renders', () => {
  render(<Nav
    categories={categories}
    setCurrentCategory={mockSetCurrentCategory}
    currentCategory={mockCurrentCategory}></Nav>);
  
})
    it('matches snapshot',()=>{
        const {asFragment} =render(<Nav categories={categories}
          setCurrentCategory={mockSetCurrentCategory}
          currentCategory={mockCurrentCategory}></Nav>);
         // the expect function with a matcher to assert snapshots match
         expect(asFragment()).toMatchSnapshot();
    })
})
// if icon is visisble 
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
    // Arrange
    const { getByLabelText } = render(<Nav categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}></Nav>);

    // Assert  
    expect(getByLabelText('camera')).toHaveTextContent('📸');

    })
  })  

// if links are vissible 
describe('links are visible', () => {
    it('inserts text into the links', () => {
      // Arrange
      const { getByTestId } = render(<Nav categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}></Nav>);
      // Assert
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About me');
  
    });
  })