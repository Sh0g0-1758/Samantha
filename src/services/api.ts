import axios from 'axios';

export const options: object = {
  method: 'GET',
  url: 'https://programming-memes-images.p.rapidapi.com/v1/memes',
  headers: {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': 'programming-memes-images.p.rapidapi.com',
  },
};

export const options2: object = {
  method: 'GET',
  url: 'https://dad-jokes.p.rapidapi.com/random/joke',
  headers: {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
  },
};
