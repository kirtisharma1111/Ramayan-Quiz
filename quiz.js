//Stores multiple questions in an array.
const questions = [
  {
      category: 'Spiritualism',
      id: 'qa-1',
      correctAnswer: 'Valmiki',
      options: ['Veda Vyasa', 'Valmiki', 'Tulsidas', 'Kalidasa'],
      question: "Who wrote the Ramayana?",
  },
  {
      category: 'Spiritualism',
      id: 'qa-2',
      correctAnswer: 'Dasharatha',
      options: ['Dasharatha', 'Janaka', 'Dushyanta', 'Harishchandra'],
      question: "What is the name of Lord Rama's Father?",
  },
  {
    category: 'Spiritualism',
    id: 'qa-3',
    correctAnswer: '14 years',
    options: ['10 years', '12 years', '14 years', '16 years'],
    question: "How many years did Lord Rama spend in exile?",
},
{
  category: 'Spiritualism',
  id: 'qa-4',
  correctAnswer: 'Hanuman',
  options: ['Angada', 'Sugriva', 'Hanuman', 'Bali'],
  question: "What was the name of Rama's devoted monkey companion?",
},
{
  category: 'Spiritualism',
  id: 'qa-5',
  correctAnswer: 'Urmila',
  options: ['Mandodari', 'Tara', 'Urmila', 'Sulochana'],
  question: "Who was Lakshmana's wife?",
},
{
  category: 'Spiritualism',
  id: 'qa-6',
  correctAnswer: 'Vishwamitra',
  options: ['Vishwamitra', 'Vashishtha', 'Agastya', 'Parashurama'],
  question: "Who gave Lord Rama the knowledge of divine weapons?",
},
{
category: 'Spiritualism',
  id: 'qa-7',
  correctAnswer: 'Jatayu',
  options: ['Jatayu', 'Garuda', 'Sampati', 'Takshaka'],
  question: "Which bird tried to save Sita Maa from Ravana's abduction?",
},
{
  category: 'Spiritualism',
    id: 'qa-8',
    correctAnswer: 'Nala',
    options: ['Angada', 'Nala', 'Hanuman', 'Sugriva'],
    question: "Who helped Rama build the bridge to Lanka?",
  },
  {
    category: 'Spiritualism',
      id: 'qa-9',
      correctAnswer: 'Maricha',
      options: ['Maricha', 'Subahu', 'Trijata', 'Surpanakha'],
      question: "Which demon disguised himself as a golden deer?",
    },
    {
      category: 'Spiritualism',
        id: 'qa-10',
        correctAnswer: 'Dronagiri',
        options: ['Mandara', 'Dronagiri', 'Kailash', 'Vindhya'],
        question: "What was the name of mountain where Hanuman found the Sanjeevani Herb?",
      },
      {
        category: 'Spiritualism',
          id: 'qa-11',
          correctAnswer: 'Trikuta',
          options: ['Trikuta', 'Suvarna Lanka', 'Pushpaka', 'Rakshasa Desh'],
          question: "What was the original name of Lanka before Ravana took over?",
        },
];

let currentQuestionIndex = 0;
let score = 0;
const totalScore = questions.length;

const questionEl = document.getElementById('question');
const optionEl = document.getElementById('options');
const scoreEl = document.getElementById('score');

const resultEl = document.getElementById('result');

loadQuestion();


function loadQuestion() {
  if (currentQuestionIndex < questions.length) {
    //This extracts the question, options, and correctAnswer from the current question object
      const { question, options, correctAnswer } = questions[currentQuestionIndex];
//Updates the current question and Clears previous options before adding new ones.
      questionEl.textContent = question;
      optionEl.innerHTML = ''; // Clear previous options

      options.forEach((opt) => {
          const btn = document.createElement('button');
          btn.textContent = opt;
          optionEl.appendChild(btn);

          btn.addEventListener("click", () => {
              if (opt === correctAnswer) {
                  score++;
                  resultEl.textContent = `✅ Correct! The answer is: ${correctAnswer}`;
                  resultEl.style.color = "green";
              }else{
              resultEl.textContent = `❌ Wrong! The correct answer is: ${correctAnswer}`;
              resultEl.style.color = "red";
              }
              scoreEl.textContent = `Score: ${score}/${totalScore}`;
              currentQuestionIndex++;
              loadQuestion(); // Load next question or finish quiz
          });
      });
  } else {
      questionEl.textContent = 'Quiz Completed!';
      optionEl.innerHTML = '';
      resultEl.textContent = `Final Score: ${score}/${totalScore}`;
      resultEl.style.color = "blue";
  }
}
