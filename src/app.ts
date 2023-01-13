/** 
 * This code works because we either haven't set "lib" key or have specified specific libraries in tsconfig
 * so it assumes all defaults available for the JS version specified as target
 * but if we do specify "lib" it will only take specified libraries
*/
const button = document.querySelector('button');

// better option then ! mark which tells that we know that obj won't be not null
if (button) {
    button.addEventListener('click', () => {
        console.log('Button is clicked!');
    });
}
