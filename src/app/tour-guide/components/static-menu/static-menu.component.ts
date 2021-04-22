import { Component, ElementRef, HostListener, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper';
import * as introJs from 'intro.js/intro.js';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

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
  modalRef;
  step;
  introJs = introJs().setOptions({
    showBullets: false,
    steps: [
        {
          element: '#step1',
          step: 1,
          title: "Action Cards!",
          intro: "<div class='hello'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's <ul><li> standard dummy</li><li> text ever since the 1500s, when</li> <li>an unknown printer took</li><li>galley of type and </li>scrambled</div><button class='btn btn-outline-primary btn-blue' id='actionCardNextButton'>Ok what is next?</button>"
        },
        {
          element: '#step2',
          step: 2,
          title: "<span id='studyPlanBackButton' class='icon icon-back-black2 icon-lg'></span>Study Plan",
          intro: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p><button class='btn btn-outline-primary btn-blue' id='studyPlanNextButton'>Ok what is next?</button>",
          position: 'left'
        },
        {
          element: '#step3',
          step: 3,
          title: "<span id='browseBookBackButton' class='icon icon-back-black2 icon-lg'></span>Browse Your Books",
          intro: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p><button id='goToBrowseBookButton' class='btn btn-outline-primary btn-blue'>Go to Browse book section</button><button class='btn btn-outline-primary btn-blue' id='browseBookNextButton'>Ok what is next?</button>",
          position: 'left'
        },
        {
          element: '#step4',
          step: 4,
          title: "<span id='assignmentBackButton' class='icon icon-back-black2 icon-lg'></span>Check and Create your Assignments",
          intro: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p><button class='btn btn-outline-primary btn-blue' id='assignmentNextButton'>Done with the tour</button>",
          position: 'left'
        }
    ],
    showButtons:false,
    showStepNumbers:false
  });
  @ViewChild('alert') alert: ElementRef;
  constructor(private router: Router, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    if(localStorage.getItem('tourGuideCurrentScreen') && localStorage.getItem('tourGuideCurrentScreen')=='subject'){
      setTimeout(() => {
        this.introJs.start().goToStep(3);
      },500);
      localStorage.setItem('tourGuideCurrentScreen','menu');
    } else {
      this.showInitmodalTour();
      localStorage.setItem('tourGuideCurrentScreen','menu');
    }
    
    this.introJs.onafterchange((targetElement)=>{
      setTimeout(()=> {
        switch (targetElement.id) 
        {
          case "step1":
              console.log("step1") 
              document.querySelector('#actionCardNextButton').addEventListener('click', () => {
                this.introJs.goToStep(2);
              })
              break; 
          case "step2": 
              console.log("step2");
              document.querySelector('#studyPlanBackButton').addEventListener('click', () => {
                this.introJs.goToStep(1);
              })
              document.querySelector('#studyPlanNextButton').addEventListener('click', () => {
                this.introJs.goToStep(3);
              })
              break;
          case "step3":
              console.log("step3");
              document.querySelector('#browseBookBackButton').addEventListener('click', () => {
                this.introJs.goToStep(2);
              })
              document.querySelector('#browseBookNextButton').addEventListener('click', () => {
                this.introJs.goToStep(4);
              })
              document.querySelector('#goToBrowseBookButton').addEventListener('click', () => {
                  this.router.navigate(['/tour/subject']);
              })
              break; 
          case "step4": 
              console.log("step4"); 
              document.querySelector('#assignmentBackButton').addEventListener('click', () => {
                this.introJs.goToStep(3);
              })
              break;
        }
      },500);
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
    },2000);
  }

  startTour(){
    setTimeout(()=>{
      this.introJs.start();
    }, 1000)
    this.modalRef.close();
  }

  closePopUp(){
    this.modalRef.close();
  }

  signUpRedirect(){
    this.modalRef.close();
    this.router.navigate(['/authentication/register/child-details']);
  }

  ngOnDestroy(): void {
    localStorage.removeItem('tourGuideCurrentScreen');
    this.introJs.exit();
  }
}
