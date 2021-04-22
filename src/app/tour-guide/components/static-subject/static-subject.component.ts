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
          intro: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p class='guidline-text'>Scroll to see all subjects</p><button class='btn btn-outline-primary btn-blue' id='ringStep'>What do those rings represent?</button>",
          position: 'right'
        },
        {
          element: '#step2',
          step: 2,
          title: "<span id='confidenceBackButton' class='icon icon-back-black2 icon-lg'></span>Confidence Rings",
          intro: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><button id='goToChaptersButton' class='btn btn-outline-primary btn-blue'>Tell me more about Chapters</button>",
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
