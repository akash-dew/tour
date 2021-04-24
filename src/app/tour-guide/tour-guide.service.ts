import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TourGuideService {

  constructor() { }

  getIntroSchemeByScreen(screen){
    let tourSchema = {
      menu: {
      },
      subject: {
        steps: [
            {
              element: '#step1',
              step: 1,
              title: "<span id='step1NavigationBackButton' class='icon icon-back-black2 icon-lg'></span>Subjects",
              intro: "<p>My Studi subscription came with all the core CBSE subjects including <b>Math, Science, Social Studies, English and Hindi Literature</b> and even <b>Sanskrit</p><p>Even though I go for Hindi and Math tutions, I sometimes use Studi to practice these subjects at home.</p><p class='guidline-text'>Scroll to see all subjects.</p><button class='btn btn-outline-primary btn-blue' id='step1NextButton'>What do those rings represent?</button>",
              position: 'right'
            },
            {
              element: '#step2',
              step: 2,
              title: "<span id='step2BackButton' class='icon icon-back-black2 icon-lg'></span>Confidence Rings",
              intro: "<p>Those issues that you see under each subject represent my confidence level in each chapter of the book. They are updated everytime I complete a practice or test on Studi. They <b>reflect my current understanding of the chapter.</b></p><p>These rings constantly remind me about chapters and topics that require extra attention.</p><p class='guidline-text'>Scroll to see all subjects.</p><button id='step2NavigationNextButton' class='btn btn-outline-primary btn-blue'>Tell me more about subjects.</button>",
              position: 'right'
            }
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
              intro: "<p>In Studi, we always study from the prescribed syllabus. This means that all the study material in Studi is organized around books prescribed by the school.</p><p>So, <b>I'm always focussed and only studying what I am supposed to.</b></p><p class='guidline-text'>Scroll to see full Mathematics syllabus.</p><button class='btn btn-outline-primary btn-blue' id='step1NextButton'>Tell me more about study material.</button>",
              position: 'right'
            },
            {
              element: '#step2',
              step: 2,
              title: "<span id='step2BackButton' class='icon icon-back-black2 icon-lg'></span>Big Idea",
              intro: "<p>I really like the way Studi's <b>Big Idea helps me understand what the chapter is all about.</b></p><p>It reminds me of my favorite teacher, who used to start any topic with trivia about what we are about to learn.</p><p><button id='bigIdeaModalOpen' class='btn btn-outline-primary btn-blue'>Show me a Big Idea</button></p><p><button class='btn btn-link btn-lg p-0' id='step2NextButton'>Tell me more about other resources.</button></p>",
              position: 'right'
            },
            {
              element: '#step3',
              step: 3,
              title: "<span id='step3BackButton' class='icon icon-back-black2 icon-lg'></span>Revise a topic",
              intro: "<p><button id='reviseModalOpen' class='btn btn-outline-primary btn-blue'>Tell me how it works.</button></p><button class='btn btn-link btn-lg p-0' id='step3NextButton'>Got it! Anything else?</button>",
              position: 'right'
            },
            {
              element: '#step4',
              step: 4,
              title: "<span id='step4BackButton' class='icon icon-back-black2 icon-lg'></span>Practice a topic",
              intro: "<p><button id='practiceModalOpen' class='btn btn-outline-primary btn-blue'>Tell me how it works.</button></p><button class='btn btn-link btn-lg p-0' id='step4NextButton'>Got it! Anything else?</button>",
              position: 'right'
            },
            {
              element: '#step5',
              step: 5,
              title: "<span id='step5BackButton' class='icon icon-back-black2 icon-lg'></span>Oral Test",
              intro: "  <p>With the Oral Test feature, my mom can now <b>create an instant quiz on any topic </b>to check if I've studied properly or not.</p><p>I hate Oral Test! :-(</p><p><button id='oralTestModalOpen' class='btn btn-outline-primary btn-blue'>Tell me how it works.</button></p><p><button class='btn btn-link btn-lg p-0' id='step5NextButton'>Got it! Anything else?</button></p>",
              position: 'left'
            },
            {
              element: '#step6',
              step: 6,
              title: "<span id='step6BackButton' class='icon icon-back-black2 icon-lg'></span>Digital Test",
              intro: " <p>My dad loves the Digital Test feature.</p><p>Now, even when he is not at home, he can <b>easily assign a test on the topics </b>I have completed. He feels that surprise tests like these will keep me on my toes.</p><p><button id='digitalTestModalOpen' class='btn btn-outline-primary btn-blue'>Tell me more about Digital Test.</button></p><p><button class='btn btn-link btn-lg p-0' id='step6NextButton'>Anything else?</button></p>",
              position: 'left'
            },
            {
              element: '#step7',
              step: 7,
              title: "<span id='step7BackButton' class='icon icon-back-black2 icon-lg'></span>Studi Plan",
              intro: " <p>Let me tell you about my favourite feature of Studi.</p><p>Ever since I've started studying from the Studi Plan, I've not had a single disagreement with my parents about what, when and how much I study everyday at home.</p><p><button id='studyPlanModalOpen' class='btn btn-outline-primary btn-blue'>What is a Studi plan?</button></p><p><button class='btn btn-link btn-lg p-0' id='step7NextButton'>What next?</button></p>",
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
