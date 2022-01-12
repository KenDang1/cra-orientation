// This file contains the SpaceJams component
// One component per file, plz


// Import the useState function from inside the react library
import { useState } from 'react';


function SpaceJams() {
    // let count = 0;

    // Declare the count state variable
    // A "state variable" is any data that
    // can update the DOM
    const [count, setCount] = useState(0);
    
    const [invaders, setInvaders] = useState('👾 👾 👾');

    const [authorInput, setAuthorInput] = useState('Initial Value');

    const [author, setAuthor] = useState('Ken');

    console.log('SpaceJams function was called, count is', count);
    

    const  onButtonClick = () => {
        console.log('moar Jam! 👾 🛸');

        // Increase the count variable
        // setCount() sets the new value for the count variable
        // AND re-renders our component
        setCount(count + 1);

    }; 

    const addInvader = () => {
        // invaders = invaders + '👾 '
        setInvaders(invaders + '👾 ');
    };

/*
    const onChangeAuthor = (event) => {
        // even.target === $(this)
        console.log('in onChangeAuthor 🤯', event.target);
        
        // How do we get the value of input?!
        // let newAuthor = $('#authorInput'.val());
        // event.target.value is the value of the input element
        let newAuthor = event.target.value;
        console.log('author is', newAuthor);
        
        setAuthorInput(newAuthor);
    }
*/

    const onSubmitAuthor = (event) => {
        event.preventDefault();

        console.log('new author is', authorInput);

        setAuthor(authorInput);
        
        // Clear our form inputs
        // $('input').val('');
        setAuthorInput('');

    }; //end of onSubmitAuthor

    // let invadersToShow;
    // if (invaders.length < 20) {
    //     invaders; // render the invader emojis
    // }
    // else {
    //     "ya dead"
    // }

    // start of 
    let invadersToShow = invaders.length > 20? 
        'ya dead' : 
        invaders;
    // end of invadersToShow

    return (
        // Fragments can wrap other elements
        <> 
            <div>
                <h2> Space Jams, Space Jams 👾🛸</h2>
                <h4>Created by {author}</h4>
                <div>
                    <form onSubmit={onSubmitAuthor}>
                        { /** $('input).on('change', onChangeAuthor) */}
                        <input
                            type="text"
                            placeholder='Put author name here'
                            // onChange={onChangeAuthor}
                            onChange={(event) => setAuthorInput(event.target.value)}
                            value={authorInput}
                        />
                        <button>Submit! 👻</button>
                    </form>
                </div>
                <img 
                    alt="Space Jams Website ScreenShot"
                    className="spaceJams"
                    src="https://f4.bcbits.com/img/a2629836870_10.jpg"
                />
            </div>
            <h2>How many Space Jams are there?</h2>
            <h3>There are {count} Space Jams</h3>

            <button onClick={onButtonClick}>
                MOAR SPACE JAMS
            </button>

            let invadersToShow;
            {/**
            if (invaders.length < 20) {
                invaders; // render the invader emojis
            }
            else {
                "ya dead"
            } */}

            {/** Space Invaders!! 👾 */}
            <h3>Look out, space invaders! 
                {/** use ternary for conditional renders */}
                {invaders.length > 20? 
                    'ya dead' : 
                    invaders
                } 
            </h3>
            {/** use ternary for conditional renders */}
            {/* {invaders.length <20 ?
            <button onClick={addInvader}>
                MOAR 👾 Emojis
            </button>
            :
            ''} */}
            {/** This is && way, || way just reverse the < to > */}
            {invaders.length < 20 &&
                <button onClick={addInvader}>
                    MOAR 👾 Emojis
                </button>
            }
        </>
    )
};  // end of SpaceJams

export default SpaceJams;