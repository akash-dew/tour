import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import * as introJs from 'intro.js/intro.js';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'nx-afs-static-chapter',
  templateUrl: './static-chapter.component.html',
  styleUrls: ['./static-chapter.component.scss']
})
export class StaticChapterComponent implements OnInit, OnDestroy {
  accordionClick = false;
  introJs = introJs().setOptions({
    showBullets: false,
    steps: [
        {
          element: '#step1',
          step: 1,
          title: "<span id='syllabusBackButton' class='icon icon-back-black2 icon-lg'></span>Syllabus",
          intro: "<p>In Studi, we always study from the prescribed syllabus. This means that all the study material in Studi is organized around books prescribed by the school.</p><p>So, <b>I'm always focussed and only studying what I am supposed to.</b></p><p class='guidline-text'>Scroll to see full Mathematics syllabus.</p><button class='btn btn-outline-primary btn-blue' id='syllabusNextButton'>Tell me more about study material.</button>",
          position: 'right'
        },
        {
          element: '#step2',
          step: 2,
          title: "<span id='bigIdeaBackButton' class='icon icon-back-black2 icon-lg'></span>Big Idea",
          intro: "<p>I really like the way Studi's <b>Big Idea helps me understand what the chapter is all about.</b></p><p>It reminds me of my favorite teacher, who used to start any topic with trivia about what we are about to learn.</p><p><button id='bigIdeaModalOpen' class='btn btn-outline-primary btn-blue'>Show me a Big Idea</button></p><p><button class='btn btn-link btn-lg p-0' id='bigIdeaNextButton'>Tell me more about other resources.</button></p>",
          position: 'right'
        },
        {
          element: '#step3',
          step: 3,
          title: "<span id='reviseBackButton' class='icon icon-back-black2 icon-lg'></span>Revise a topic",
          intro: "<p><button id='reviseModalOpen' class='btn btn-outline-primary btn-blue'>Tell me how it works.</button></p><button class='btn btn-link btn-lg p-0' id='reviseModalNextButton'>Got it! Anything else?</button>",
          position: 'right'
        },
        {
          element: '#step4',
          step: 4,
          title: "<span id='practiceBackButton' class='icon icon-back-black2 icon-lg'></span>Practice a topic",
          intro: "<p><button id='practiceModalOpen' class='btn btn-outline-primary btn-blue'>Tell me how it works.</button></p><button class='btn btn-link btn-lg p-0' id='practiceModalNextButton'>Got it! Anything else?</button>",
          position: 'right'
        },
        {
          element: '#step5',
          step: 5,
          title: "<span id='oralTestBackButton' class='icon icon-back-black2 icon-lg'></span>Oral Test",
          intro: "  <p>With the Oral Test feature, my mom can now <b>create an instant quiz on any topic </b>to check if I've studied properly or not.</p><p>I hate Oral Test! :-(</p><p><button id='oralTestModalOpen' class='btn btn-outline-primary btn-blue'>Tell me how it works.</button></p><p><button class='btn btn-link btn-lg p-0' id='oralTestNextButton'>Got it! Anything else?</button></p>",
          position: 'left'
        },
        {
          element: '#step6',
          step: 6,
          title: "<span id='digitalTestBackButton' class='icon icon-back-black2 icon-lg'></span>Digital Test",
          intro: " <p>My dad loves the Digital Test feature.</p><p>Now, even when he is not at home, he can <b>easily assign a test on the topics </b>I have completed. He feels that surprise tests like these will keep me on my toes.</p><p><button id='digitalTestModalOpen' class='btn btn-outline-primary btn-blue'>Tell me more about Digital Test.</button></p><p><button class='btn btn-link btn-lg p-0' id='chapterDoneButton'>Anything else?</button></p>",
          position: 'left'
        }
    ],
    showStepNumbers:false,
    showButtons: false
  });
  step;
  helpVideoUrl;
  videoModalRef;
  @ViewChild('content') content: ElementRef;
  constructor(private router: Router, private route: ActivatedRoute, private modalService: NgbModal, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    localStorage.setItem('tourGuideCurrentScreen','chapter');
    setTimeout(()=>this.introJs.start(),500);
    
    this.introJs.onafterchange((targetElement)=>{
      this.step = Number(targetElement.id.replace("step",""));
      setTimeout(()=> {
        switch (targetElement.id) 
        { 
          case "step1": 
              console.log("step1"); 
              document.querySelector('#syllabusNextButton').addEventListener('click', () => {
                this.introJs.goToStep(2)
              }) 
              document.querySelector('#syllabusBackButton').addEventListener('click', () => {
                this.router.navigate(['/tour/subject']);
              })
              break; 
          case "step2": 
              console.log("step2");
              document.querySelector('#bigIdeaNextButton').addEventListener('click', () => {
                this.introJs.goToStep(3)
              })
              document.querySelector('#bigIdeaBackButton').addEventListener('click', () => {
                this.introJs.goToStep(1)
              })
              document.querySelector('#bigIdeaModalOpen').addEventListener('click', () => {
                  this.helpVideoUrl = this.videoUrlSecurityByPass('https://www.youtube.com/watch?v=mtoKA1-Kcr0');
                  this.openVideoInModal();
              })
              break;
          case "step3": 
              console.log("step3");
              document.querySelector('#reviseModalNextButton').addEventListener('click', () => {
                this.introJs.goToStep(4)
              })
              document.querySelector('#reviseBackButton').addEventListener('click', () => {
                this.introJs.goToStep(2)
              })
              document.querySelector('#reviseModalOpen').addEventListener('click', () => {
                  this.helpVideoUrl = this.videoUrlSecurityByPass('https://www.youtube.com/watch?v=mtoKA1-Kcr0');
                  this.openVideoInModal();
              })
              break;
          case "step4": 
              console.log("step4");
              document.querySelector('#practiceModalNextButton').addEventListener('click', () => {
                this.introJs.goToStep(5)
              })
              document.querySelector('#practiceBackButton').addEventListener('click', () => {
                this.introJs.goToStep(3)
              })
              document.querySelector('#practiceModalOpen').addEventListener('click', () => {
                  this.helpVideoUrl = this.videoUrlSecurityByPass('https://www.youtube.com/watch?v=mtoKA1-Kcr0');
                  this.openVideoInModal();
              })
              break;
          case "step5": 
              console.log("step5");
              document.querySelector('#oralTestNextButton').addEventListener('click', () => {
                this.introJs.goToStep(6)
              })
              document.querySelector('#oralTestBackButton').addEventListener('click', () => {
                this.introJs.goToStep(4)
              })
              document.querySelector('#oralTestModalOpen').addEventListener('click', () => {
                  this.helpVideoUrl = this.videoUrlSecurityByPass('https://www.youtube.com/watch?v=mtoKA1-Kcr0');
                  this.openVideoInModal();
              })
              break; 
          case "step6": 
              console.log("step6");
              document.querySelector('#digitalTestBackButton').addEventListener('click', () => {
                this.introJs.goToStep(5)
              })  
              document.querySelector('#digitalTestModalOpen').addEventListener('click', () => {
                  this.helpVideoUrl = this.videoUrlSecurityByPass('https://www.youtube.com/watch?v=mtoKA1-Kcr0');
                  this.openVideoInModal();
              })
              document.querySelector('#chapterDoneButton').addEventListener('click', () => {
                localStorage.removeItem('tourGuideCurrentScreen');
                this.router.navigate(['/tour/menu']);
              })
              break;
      }
    },500);
    });
  }

  openVideoInModal() {
    if(!this.videoModalRef){
      this.videoModalRef = this.modalService.open(this.content, {
        windowClass: 'modal-no-bg',
        backdrop: 'static',
        keyboard: false,
        size: 'xl',
        centered: true
      })
    }
  }

  closeVideoModal() {
    this.videoModalRef = '';
    this.modalService.dismissAll();
  }

  videoUrlSecurityByPass(url) {
    let videoid = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
    if (videoid !== null) {
      url = `https://www.youtube.com/embed/` + videoid[1];
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnDestroy(): void {
    this.introJs.exit();
  }
}
