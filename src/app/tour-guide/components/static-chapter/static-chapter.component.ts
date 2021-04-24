import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import * as introJs from 'intro.js/intro.js';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TourGuideService } from '../../tour-guide.service';
@Component({
  selector: 'nx-afs-static-chapter',
  templateUrl: './static-chapter.component.html',
  styleUrls: ['./static-chapter.component.scss']
})
export class StaticChapterComponent implements OnInit, OnDestroy {
  accordionClick = false;
  introJs = introJs().setOptions(this.tourGuideService.getIntroSchemeByScreen('chapter'));
  step;
  helpVideoUrl;
  videoModalRef;
  closeTourModalRef;
  @ViewChild('alert') alert: ElementRef;
  @ViewChild('content') content: ElementRef;
  constructor(private tourGuideService: TourGuideService,private router: Router, private route: ActivatedRoute, private modalService: NgbModal, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    localStorage.setItem('tourGuideCurrentScreen','chapter');
    setTimeout(()=>this.introJs.start(),500);
    
    this.introJs.onafterchange((targetElement)=>{
      this.step = Number(targetElement.id.replace("step",""));
      setTimeout(()=> {
        if(document.querySelector('#'+targetElement.id+'NextButton')){
          document.querySelector('#'+targetElement.id+'NextButton').addEventListener('click', () => {
            this.introJs.nextStep();
          });
        }
        if(document.querySelector('#'+targetElement.id+'BackButton')){
          document.querySelector('#'+targetElement.id+'BackButton').addEventListener('click', () => {
            this.introJs.previousStep();
          });
        }
        switch (targetElement.id) 
        { 
          case "step1": 
              console.log("step1"); 
              if(document.querySelector('#'+targetElement.id+'NavigationBackButton')){
                document.querySelector('#'+targetElement.id+'NavigationBackButton').addEventListener('click', () => {
                  this.router.navigate(['/tour/subject']);
                })
              }
              break; 
          case "step2": 
              console.log("step2");
              if(document.querySelector('#bigIdeaModalOpen')){
                document.querySelector('#bigIdeaModalOpen').addEventListener('click', () => {
                  this.helpVideoUrl = this.videoUrlSecurityByPass('https://www.youtube.com/watch?v=mtoKA1-Kcr0');
                  this.openVideoInModal();
                })
              }
              break;
          case "step3": 
              console.log("step3");
              if(document.querySelector('#reviseModalOpen')){
                document.querySelector('#reviseModalOpen').addEventListener('click', () => {
                  this.helpVideoUrl = this.videoUrlSecurityByPass('https://www.youtube.com/watch?v=mtoKA1-Kcr0');
                  this.openVideoInModal();
                })
              }
              break;
          case "step4": 
              console.log("step4");
              if(document.querySelector('#practiceModalOpen')){
                document.querySelector('#practiceModalOpen').addEventListener('click', () => {
                  this.helpVideoUrl = this.videoUrlSecurityByPass('https://www.youtube.com/watch?v=mtoKA1-Kcr0');
                  this.openVideoInModal();
                })
              }
              break;
          case "step5": 
              console.log("step5");
              if(document.querySelector('#oralTestModalOpen')){
                document.querySelector('#oralTestModalOpen').addEventListener('click', () => {
                  this.helpVideoUrl = this.videoUrlSecurityByPass('https://www.youtube.com/watch?v=mtoKA1-Kcr0');
                  this.openVideoInModal();
                })
              }
              break; 
          case "step6": 
              console.log("step6");
              if(document.querySelector('#digitalTestModalOpen')){
                document.querySelector('#digitalTestModalOpen').addEventListener('click', () => {
                  this.helpVideoUrl = this.videoUrlSecurityByPass('https://www.youtube.com/watch?v=mtoKA1-Kcr0');
                  this.openVideoInModal();
                }) 
              }
              break;
          case "step7": 
              console.log("step7"); 
              if(document.querySelector('#studyPlanModalOpen')){
                document.querySelector('#studyPlanModalOpen').addEventListener('click', () => {
                  this.helpVideoUrl = this.videoUrlSecurityByPass('https://www.youtube.com/watch?v=mtoKA1-Kcr0');
                  this.openVideoInModal();
                }) 
              }
              if(document.querySelector('#'+targetElement.id+'NextButton')){
                document.querySelector('#'+targetElement.id+'NextButton').addEventListener('click', () => {
                  this.openCloseTourModal();
                })
              }
              break;
      }
    },500);
    });
  }

  openCloseTourModal() {
    this.closeTourModalRef = this.modalService.open(this.alert, 
      {size: 'md',
      centered: true,
      scrollable: true, 
      backdrop: 'static',
      keyboard: false, 
      windowClass: 'mobile-center tour-modal' });
  }

  backtoIntro(){
    this.introJs.goToStep(7);
    this.modalService.dismissAll();
  }

  closeEndTourModal() {
    this.introJs.exit();
    this.modalService.dismissAll();
  }

  signUpRedirect(){
    this.introJs.exit();
    this.modalService.dismissAll();
    this.router.navigate(['/authentication/register/child-details']);
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
