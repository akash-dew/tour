import { Component, ElementRef, HostListener, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import * as introJs from 'intro.js/intro.js';
import { TourGuideService } from '../../tour-guide.service';
@Component({
  selector: 'nx-afs-static-menu',
  templateUrl: './static-menu.component.html',
  styleUrls: ['./static-menu.component.scss']
})
export class StaticMenuComponent implements OnInit, OnDestroy {
  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    }
  };
  introJs = introJs().setOptions(this.tourGuideService.getIntroSchemeByScreen('menu'));
  modalRef;
  @ViewChild('alert') alert: ElementRef;
  constructor(private tourGuideService: TourGuideService,private router: Router, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    if(localStorage.getItem('tourGuideCurrentScreen')=='menuLaunchStudyPlan'){
      setTimeout(()=>this.introJs.start(),500);
    } else {
      localStorage.setItem('tourGuideCurrentScreen','menu');
      this.showInitmodalTour();
    }

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
                  localStorage.setItem('tourGuideCurrentScreen','menu');
                  this.router.navigate(['/tour/chapter']);
                });
              }
              if(document.querySelector('#'+targetElement.id+'NavigationNextButton')){
                document.querySelector('#'+targetElement.id+'NavigationNextButton').addEventListener('click', () => {
                  alert("Go to next screen");
                });
              }
              break; 
        }
      },500)
    });
  }

  showInitmodalTour(){
    setTimeout(()=>{
      this.modalRef = this.modalService.open(this.alert, 
        {size: 'md',
        centered: true,
        scrollable: true, 
        backdrop: 'static',
        keyboard: false, 
        windowClass: 'mobile-center tour-modal' });
    },1000);
  }

  startTour(){
    this.modalRef.close();
    this.router.navigate(['/tour/subject']);
  }

  closePopUp(){
    this.modalRef.close();
  }

  laterButton(){
    this.modalRef.close();
    window.location.href = "https://tatastudi.com/";
  }

  ngOnDestroy(): void {
    localStorage.removeItem('tourGuideCurrentScreen');
  }
}
