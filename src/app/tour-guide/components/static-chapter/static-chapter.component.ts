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
  accordionClick = true;
  introJs = introJs().setOptions({
    showBullets: false,
    steps: [
        {
          element: '#step1',
          step: 1,
          title: "<span id='syllabusBackButton' class='icon icon-back-black2 icon-lg'></span>Syllabus",
          intro: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p class='guidline-text'>Scroll to see all subjects</p><button class='btn btn-outline-primary btn-blue' id='studyMaterialButton'>Tell me more about study materials</button>",
          position: 'right'
        },
        {
          element: '#step2',
          step: 2,
          title: "<span id='bigIdeaBackButton' class='icon icon-back-black2 icon-lg'></span>Big Idea",
          intro: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p class='guidline-text'>Scroll to see all subjects</p><p><button id='bigIdeaModalOpen' class='btn btn-outline-primary btn-blue'>Show me a Big idea</button></p><p><button class='btn btn-link btn-lg p-0' id='oralTestButton'>Tell me more about other resources.</button></p>",
          position: 'right'
        },
        {
          element: '#step3',
          step: 3,
          title: "<span id='oralTestBackButton' class='icon icon-back-black2 icon-lg'></span>Oral Test",
          intro: "  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p class='guidline-text'>Scroll to see all subjects</p><p><button id='oralTestModalOpen' class='btn btn-outline-primary btn-blue'>How to create Oral Test</button></p><p><button class='btn btn-link btn-lg p-0' id='digitalTestButton'>Tell me more about other resources.</button></p>",
          position: 'left'
        },
        {
          element: '#step4',
          step: 4,
          title: "<span id='digitalTestBackButton' class='icon icon-back-black2 icon-lg'></span>Digital Test",
          intro: " <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p class='guidline-text'>Scroll to see all subjects</p><p><button id='digitalTestModalOpen' class='btn btn-outline-primary btn-blue'>How to create Digital Test</button></p><p><button class='btn btn-link btn-lg p-0' id='nextIntroButton'>Done with the tour</button></p>",
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
              document.querySelector('#studyMaterialButton').addEventListener('click', () => {
                this.introJs.goToStep(2)
              }) 
              document.querySelector('#syllabusBackButton').addEventListener('click', () => {
                this.router.navigate(['/tour/subject']);
              })
              break; 
          case "step2": 
              console.log("step2");
              document.querySelector('#oralTestButton').addEventListener('click', () => {
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
              document.querySelector('#digitalTestButton').addEventListener('click', () => {
                this.introJs.goToStep(4)
              })
              document.querySelector('#oralTestBackButton').addEventListener('click', () => {
                this.introJs.goToStep(2)
              })
              document.querySelector('#oralTestModalOpen').addEventListener('click', () => {
                  this.helpVideoUrl = this.videoUrlSecurityByPass('https://www.youtube.com/watch?v=mtoKA1-Kcr0');
                  this.openVideoInModal();
              })
              break; 
          case "step4": 
              console.log("step4");
              document.querySelector('#digitalTestBackButton').addEventListener('click', () => {
                this.introJs.goToStep(3)
              })
              document.querySelector('#digitalTestModalOpen').addEventListener('click', () => {
                  this.helpVideoUrl = this.videoUrlSecurityByPass('https://www.youtube.com/watch?v=mtoKA1-Kcr0');
                  this.openVideoInModal();
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
        size: 'xl',
        centered: true
      });
    }
  }

  closeVideoModal() {
    this.videoModalRef.close();
    this.videoModalRef = '';
    if(this.step>=4){
      localStorage.removeItem('tourGuideCurrentScreen');
      this.router.navigate(['/tour/menu']);
    } else {
      this.introJs.start().goToStep(this.step);
    }
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
