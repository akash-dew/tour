import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import * as introJs from 'intro.js/intro.js';
import { Router } from '@angular/router';
import { TourGuideService } from '../../tour-guide.service';
@Component({
  selector: 'nx-afs-static-subject',
  templateUrl: './static-subject.component.html',
  styleUrls: ['./static-subject.component.scss']
})
export class StaticSubjectComponent implements OnInit, OnDestroy {
  introJs = introJs().setOptions(this.tourGuideService.getIntroSchemeByScreen('subject'));
  step;
  constructor(private tourGuideService: TourGuideService,private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('tourGuideCurrentScreen') && localStorage.getItem('tourGuideCurrentScreen')=='chapter'){
      setTimeout(() => {
        this.introJs.start().goToStep(3);
      },500);
      localStorage.setItem('tourGuideCurrentScreen','subject');
    } else {
      setTimeout(()=>this.introJs.start(),500);;
      localStorage.setItem('tourGuideCurrentScreen','subject');
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
                  this.router.navigate(['/tour/menu']);
                });
              }
              break; 
          case "step2": 
              console.log("step2");
              break;
          case "step3": 
              console.log("step3");
              if(document.querySelector('#'+targetElement.id+'NavigationNextButton')){
                document.querySelector('#'+targetElement.id+'NavigationNextButton').addEventListener('click', () => {
                  this.router.navigate(['/tour/chapter']);
                });
              }
              break;
        }
      },500)
    });
  }

  ngOnDestroy(): void {
    this.introJs.exit();
  }

}
