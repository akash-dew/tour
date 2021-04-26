import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TourGuideService {

  constructor() { }

  getIntroSchemeByScreen(screen){
    let tourSchema = {
      menu: {
        steps: [
          {
            element: '#step1',
            step: 1,
            title: "<span id='step1NavigationBackButton' class='icon icon-back-black2 icon-lg'></span>Studi Plan",
            intro: "<p>This is my favourite feature of Studi. Once I decide what portion I want to complete and by when, <b>Studi creates a day-wise plan that helps me complete the portion in the available days.</b></p><p>Ever since I've started using the Studi Plan, I've not had a single disagreement with my parents about what, when and how much I study every day at home.</p><p><button id='step1NavigationNextButton' class='btn btn-outline-primary btn-blue'>How do you study from this plan?</button></p><p><button class='btn btn-link btn-lg p-0' id='studyPlanModalOpen'>Show me how a plan is created?</button></p>",
            position: 'left'
          }
      ],
      showStepNumbers:false,
      showButtons: false,
      showBullets: false
      },
      subject: {
        steps: [
            {
              element: '#step1',
              step: 1,
              title: "<span id='step1NavigationBackButton' class='icon icon-back-black2 icon-lg'></span>Subjects",
              intro: "<p>My Studi subscription came with <b>all main CBSE subjects</b> including <b>Math, Science, Social Studies, English and Hindi Literature</b> and even <b>Sanskrit!</b></p><p>Even though I go for Hindi and Math tutions, I sometimes use Studi to practice these subjects at home.</p><p class='guidline-text'>Scroll to see all subjects.</p><button class='btn btn-outline-primary btn-blue' id='step1NextButton'>What are those rings under each subject?</button>",
              position: 'right'
            },
            {
              element: '#step2',
              step: 2,
              title: "<span id='step2BackButton' class='icon icon-back-black2 icon-lg'></span>Confidence Rings",
              intro: "<p>Those rings show<b> my current understanding of the chapter.</b></p><p>These rings <b>remind me about chapters and topics that I need to work on a little more.</b></p><p class='guidline-text'>Scroll to see all subjects.</p><button id='step2NextButton' class='btn btn-outline-primary btn-blue'>How is confidence calculated?</button>",
              position: 'right'
            },
            {
              element: '#step3',
              step: 3,
              title: "<span id='step3BackButton' class='icon icon-back-black2 icon-lg'></span>Current Confidence",
              intro: "<p>Confidence rings are <b>updated every time I complete a practice or test on Studi.</b> They fill out every time I do well in a practice or test and empty out when I don't do well./p><p>See, I am really good in math but need to work some more on science.</p><button id='step3NavigationNextButton' class='btn btn-outline-primary btn-blue'>Where are the chapters coming from?</button>",
              position: 'right'
            },
        ],
        showStepNumbers:false,
        showButtons: false,
        showBullets: false
      },
      chapter: {
        steps: [
            {
              element: '#step1',
              step: 1,
              title: "<span id='step1NavigationBackButton' class='icon icon-back-black2 icon-lg'></span>Syllabus",
              intro: "<p>In Studi, we always study from the prescribed syllabus. All the study material is organised around my school curriculum.</p><p>So, <b>it's easy for me to revise the topics that I learn at school.</b></p><p class='guidline-text'>Scroll to see full Mathematics syllabus.</p><button class='btn btn-outline-primary btn-blue' id='step1NextButton'>Tell me more about study material.</button>",
              position: 'right'
            },
            {
              element: '#step2',
              step: 2,
              title: "<span id='step2BackButton' class='icon icon-back-black2 icon-lg'></span>Big Idea",
              intro: "<p>I really like the way Studi's <b>Big Idea videos help me understand what the chapter is all about.</b></p><p>It reminds me of my favorite teacher, who used to start any topic with trivia about what we are about to learn.</p><p><button id='step2NextButton' class='btn btn-outline-primary btn-blue'>Tell me more about other resources.</button></p><p><button class='btn btn-link btn-lg p-0' id='bigIdeaModalOpen'>Tell me more about Big Idea.</button></p>",
              position: 'right'
            },
            {
              element: '#step3',
              step: 3,
              title: "<span id='step3BackButton' class='icon icon-back-black2 icon-lg'></span>Revise a topic",
              intro: "<p>On Studi, I revise my lessons through short <b>videos that explain a concept thoroughly.</b> I like these videos because they are easy to understand.</p><p>After I watch them, I feel like I understand a concept better.</p><p><button id='step3NextButton' class='btn btn-outline-primary btn-blue'>What about practice in Studi?</button></p><button class='btn btn-link btn-lg p-0' id='reviseModalOpen'>Show me how revise works?</button>",
              position: 'right'
            },
            {
              element: '#step4',
              step: 4,
              title: "<span id='step4BackButton' class='icon icon-back-black2 icon-lg'></span>Practice a topic",
              intro: "<p>On Studi, I can practice a topic endlessly until I reach the highest confidence on that topic. Every practice session is different, and I get <b>instant feedback on mistakes </b>I make so that I can learn from them.</p><p>I love taking the quizzes and collecting bonus stars.</p><p><button id='step4NextButton' class='btn btn-outline-primary btn-blue'>How do you get testing in Studi?</button></p><button class='btn btn-link btn-lg p-0' id='practiceModalOpen'>Tell me more about practice.</button>",
              position: 'right'
            },
            {
              element: '#step5',
              step: 5,
              title: "<span id='step5BackButton' class='icon icon-back-black2 icon-lg'></span>Oral Test",
              intro: "  <p>With the Oral Test feature, my mom can now <b>create an instant quiz on any topic </b>to check if I've studied properly or not.</p><p>I hate Oral Test! :-(</p><p><button id='step5NextButton' class='btn btn-outline-primary btn-blue'>How do you prepare for tests?</button></p><p><button class='btn btn-link btn-lg p-0' id='oralTestModalOpen'>Show me how Oral Test works.</button></p>",
              position: 'left'
            },
            {
              element: '#step6',
              step: 6,
              title: "<span id='step6BackButton' class='icon icon-back-black2 icon-lg'></span>Digital Test",
              intro: " <p>My dad loves the Digital Test feature.</p><p>Now, even when he is not at home, he can <b>easily assign a test on the topics </b>I have completed. He feels that surprise tests like these will keep me on my toes.</p><p><button id='step6NavigationNextButton' class='btn btn-outline-primary btn-blue'>What's your favourite feature in Studi?</button></p><p><button class='btn btn-link btn-lg p-0' id='digitalTestModalOpen'>Show me how it works.</button></p>",
              position: 'left'
            }
        ],
        showStepNumbers:false,
        showButtons: false,
        showBullets: false
      },
      mylesson: {
        steps: [
          {
            element: '#step1',
            step: 1,
            title: "<span id='step1NavigationBackButton' class='icon icon-back-black2 icon-lg'></span>Studi Plan",
            intro: "<p>This is my favourite feature of Studi. Once I decide what portion I want to complete and by when, <b>Studi creates a day-wise plan that helps me complete the portion in the available days.</b></p><p>Ever since I've started using the Studi Plan, I've not had a single disagreement with my parents about what, when and how much I study every day at home.</p><p><button id='step1NavigationNextButton' class='btn btn-outline-primary btn-blue'>How do you study from this plan?</button></p><p><button class='btn btn-link btn-lg p-0' id='studyPlanModalOpen'>Show me how a plan is created?</button></p>",
            position: 'left'
          }
      ],
      showStepNumbers:false,
      showButtons: false,
      showBullets: false
      }
    }
    
    return tourSchema[screen];
  }

}
