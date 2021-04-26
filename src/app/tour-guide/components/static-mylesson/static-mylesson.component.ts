import { Component, ElementRef, HostListener, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import * as introJs from 'intro.js/intro.js';
import { TourGuideService } from '../../tour-guide.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-static-mylesson',
  templateUrl: './static-mylesson.component.html',
  styleUrls: ['./static-mylesson.component.scss']
})
export class StaticMylessonComponent implements OnInit, OnDestroy {
  videoModalRef;
  helpVideoUrl;
  introJs = introJs().setOptions(this.tourGuideService.getIntroSchemeByScreen('mylesson'));
  closeTourModalRef;
  @ViewChild('alert') alert: ElementRef;
  @ViewChild('content') content: ElementRef;
  constructor(private tourGuideService: TourGuideService,private sanitizer: DomSanitizer, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    localStorage.setItem('tourGuideCurrentScreen','mylesson');
    setTimeout(()=>this.introJs.start(),500);
    this.introJs.onafterchange((targetElement)=>{
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
                  this.router.navigate(['/tour/menu']);
                });
              }  
              if(document.querySelector('#dailyPlanModalOpen')){
                document.querySelector('#dailyPlanModalOpen').addEventListener('click', () => {
                  this.helpVideoUrl = this.videoUrlSecurityByPass('https://www.youtube.com/watch?v=mtoKA1-Kcr0');
                  this.openVideoInModal();
                })
              }
              break; 
          case "step2": 
          console.log("step2");
          if(document.querySelector('#'+targetElement.id+'NavigationNextButton')){
            document.querySelector('#'+targetElement.id+'NavigationNextButton').addEventListener('click', () => {
              this.openCloseTourModal();
            });
          } 
          break; 
        }
      },500)
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

  openCloseTourModal() {
    this.closeTourModalRef = this.modalService.open(this.alert, 
      {size: 'md',
      centered: true,
      scrollable: true, 
      backdrop: 'static',
      keyboard: false, 
      windowClass: 'mobile-center tour-modal' });
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

  backtoIntro(){
    this.introJs.goToStep(2);
    this.modalService.dismissAll();
  }

  closeEndTourModal() {
    this.introJs.exit();
    this.modalService.dismissAll();
    localStorage.removeItem('tourGuideCurrentScreen');
    window.location.href = "https://tatastudi.com/";
  }

  signUpRedirect(){
    this.introJs.exit();
    this.modalService.dismissAll();
    localStorage.removeItem('tourGuideCurrentScreen');
    window.location.href = "https://learn.tatastudi.com/authentication/register/child-details";
  }

  ngOnDestroy(): void {
  }

}
