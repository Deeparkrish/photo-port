// import React from 'react';

// //The cleanup function is used to remove components from the DOM to prevent memory leaking,
// //The render function will do just what its name implies: "render" the component
// import { render, cleanup } from '@testing-library/react';

// // jest-dom has custom mtachers to inspect DOM elements 
// import '@testing-library/jest-dom/extend-expect';

// // import the component to be tested 
// import Nav from '..';

// const categories = [
//   { name: 'portraits', description: 'Portraits of people in my life' }
// ]
// const mockCurrentCategory = jest.fn();
// const mockSetCurrentCategory = jest.fn();
// const mockContactSelected = jest.fn();
// const mockSetContactSelected = jest.fn();

// //the cleanup function using the afterEach global function from Jest:
// afterEach(cleanup); // to prevent false result

// describe('Nav component matches snapshot 1',()=>{
//     // renders 
//     it('renders', () => {
//   render(<Nav
//     categories={categories}
//     setCurrentCategory={mockSetCurrentCategory}
//     currentCategory={mockCurrentCategory}></Nav>);
  
// })
//     it('matches snapshot',()=>{
//         const {asFragment} =render(<Nav categories={categories}
//           setCurrentCategory={mockSetCurrentCategory}
//           currentCategory={mockCurrentCategory}
//           contactSelected={mockContactSelected}
//           setContactSelected={mockSetContactSelected}></Nav>);
//          // the expect function with a matcher to assert snapshots match
//          expect(asFragment()).toMatchSnapshot();
//     })
// })
// // if icon is visisble 
// describe('emoji is visible', () => {
//     it('inserts emoji into the h2', () => {
//     // Arrange
//     const { getByLabelText } = render(<Nav categories={categories}
//       setCurrentCategory={mockSetCurrentCategory}
//       currentCategory={mockCurrentCategory}></Nav>);

//     // Assert  
//     expect(getByLabelText('camera')).toHaveTextContent('📸');

//     })
//   })  

// // if links are vissible 
// describe('links are visible', () => {
//     it('inserts text into the links', () => {
//       // Arrange
//       const { getByTestId } = render(<Nav categories={categories}
//         setCurrentCategory={mockSetCurrentCategory}
//         currentCategory={mockCurrentCategory}></Nav>);
//       // Assert
//       expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
//       expect(getByTestId('about')).toHaveTextContent('About me');
  
//     });
//   })
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
  { name: 'Portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
  it('renders', () => {
    render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
      contactSelected={mockContactSelected}
      setContactSelected={mockSetContactSelected}
    />);
  })

  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
      contactSelected={mockContactSelected}
      setContactSelected={mockSetContactSelected}
    />);

    expect(asFragment()).toMatchSnapshot();
  });
})

describe('emoji is visible', () => {
  it('inserts emoji into the h2', () => {
    const { getByLabelText } = render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
      contactSelected={mockContactSelected}
      setContactSelected={mockSetContactSelected}
    />);

    expect(getByLabelText('camera')).toHaveTextContent('📸');
  });
})

describe('links are visible', () => {
  it('inserts text into the home link', () => {
    const { getByTestId } = render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
      contactSelected={mockContactSelected}
      setContactSelected={mockSetContactSelected}
    />);

    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me');
  });
})

describe('onClick events', () => {
  it('calls the click handler when clicked', () => {
    const { getByText } = render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
      contactSelected={mockContactSelected}
      setContactSelected={mockSetContactSelected}
    />);
    fireEvent.click(getByText('About me'))
    fireEvent.click(getByText('Contact'))
    fireEvent.click(getByText('Portraits'))

    expect(mockSetContactSelected).toHaveBeenCalledTimes(3);
  });
})