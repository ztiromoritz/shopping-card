import {Howl, Howler} from 'howler';
const sounds = import.meta.globEager('./assets/sounds/*.ogg');

console.log("SOUNDS", sounds);

const cardPlace = new Howl({
    src: [sounds['./assets/sounds/cardPlace1.ogg'].default]
});

const redeal = new Howl({
    src: [sounds['./assets/sounds/cardOpenPackage2.ogg'].default]
})


export const Sounds = {
    cardPlace,
    redeal
}


  