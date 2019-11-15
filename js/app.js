const json = require('../json/questions.json');
const questions = json.questions;

questions.map(question => console.log(question.title));