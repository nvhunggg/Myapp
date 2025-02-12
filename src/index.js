import React from 'react';
import ReactDom from 'react-dom/client'

import './index.css';
import { books } from './books';
import Book from './Book'


function BookList() {
  return (
    <>
    <h1>amazon best sellers</h1>
    <section className='booklist'>
      {/* <EventExamples /> */}
      {books.map((book, index) => {
        return <Book {...book} key={book.id} number={index} />;
      })}
    </section>
    </>
  );
}
const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e);
    // e.target - element
    console.log(`Input Name : ${e.target.name}`);
    console.log(`Input Value : ${e.target.value}`);
    console.log('handle form input');
  };
  const handleButtonClick = () => {
    alert('handle button click');
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
         <button type='submit'>submit form</button>
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};

// const Book = (img, title, author) => {
//     console.log(props);
//     const {img, title, author} = props
//      return <article className='book'>
//          <img src={img} alt={props.title}/>
//          <h2>{title.toUpperCase()}</h2>
//          <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>{author}</h4>
         
//      </article>
//  }


const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<BookList/>)