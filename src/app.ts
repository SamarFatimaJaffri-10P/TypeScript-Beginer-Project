/** 
 * This code works because we either haven't set "lib" key or have specified specific libraries in tsconfig
 * so it assumes all defaults available for the JS version specified as target
 * but if we do specify "lib" it will only take specified libraries
*/
const button = document.querySelector('button');

function clickHandler(message: string) {
    console.log('Button is clicked!', message);
}

// better option then ! mark which tells that we know that obj won't be not null
if (button) {
    button.addEventListener('click', clickHandler.bind(null, 'Thats great!'));
}
