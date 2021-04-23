import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import * as introJs from 'intro.js/intro.js';
import { Router } from '@angular/router';
@Component({
  selector: 'nx-afs-static-subject',
  templateUrl: './static-subject.component.html',
  styleUrls: ['./static-subject.component.scss']
})
export class StaticSubjectComponent implements OnInit, OnDestroy {
  introJs = introJs().setOptions({
    showBullets: false,
    steps: [
        {
          element: '#step1',
          step: 1,
          title: "<span id='subjectBackButton' class='icon icon-back-black2 icon-lg'></span>Subjects",
          intro: "<p>My Studi subscription came with all the core CBSE subjects including <b>Math, Science, Social Studies, English and Hindi Literature</b> and even <b>Sanskrit</p><p>Even though I go for Hindi and Math tutions, I sometimes use Studi to practice these subjects at home.</p><p class='guidline-text'>Scroll to see all subjects.</p><button class='btn btn-outline-primary btn-blue' id='ringStep'>What do those rings represent?</button>",
          position: 'right'
        },
        {
          element: '#step2',
          step: 2,
          title: "<span id='confidenceBackButton' class='icon icon-back-black2 icon-lg'></span>Confidence Rings",
          intro: "<p>Those issues that you see under each subject represent my confidence level in each chapter of the book. They are updated everytime I complete a practice or test on Studi. They <b>reflect my current understanding of the chapter.</b></p><p>These rings constantly remind me about chapters and topics that require extra attention.</p><p class='guidline-text'>Scroll to see all subjects.</p><button id='goToChaptersButton' class='btn btn-outline-primary btn-blue'>Tell me more about subjects.</button>",
          position: 'right'
        }
    ],
    showStepNumbers:false,
    showButtons: false
  });
  step;
  constructor(private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('tourGuideCurrentScreen') && localStorage.getItem('tourGuideCurrentScreen')=='chapter'){
      setTimeout(() => {
        this.introJs.start().goToStep(2);
      },500);
      localStorage.setItem('tourGuideCurrentScreen','subject');
    } else {
      setTimeout(()=>this.introJs.start(),500);;
      localStorage.setItem('tourGuideCurrentScreen','subject');
    }
    
    this.introJs.onafterchange((targetElement)=>{
      setTimeout(()=> {
        switch (targetElement.id) 
        { 
          case "step1": 
              console.log("step1");
              document.querySelector('#ringStep').addEventListener('click', () => {
                this.introJs.goToStep(2);
              });
              document.querySelector('#subjectBackButton').addEventListener('click', () => {
                this.router.navigate(['/tour/menu']);
              });
              break; 
          case "step2": 
              console.log("step2");
              document.querySelector('#goToChaptersButton').addEventListener('click', () => {
                  this.router.navigate(['/tour/chapter']);
              })
              document.querySelector('#confidenceBackButton').addEventListener('click', () => {
                this.introJs.goToStep(1);
              });
              break;
        }
      },500)
    });
  }

  ngOnDestroy(): void {
    this.introJs.exit();
  }

}
