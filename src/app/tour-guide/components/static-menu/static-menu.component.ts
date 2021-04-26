import { Component, ElementRef, HostListener, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper';
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
  @ViewChild('alert') alert: ElementRef;
  constructor(private router: Router, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.showInitmodalTour();
    localStorage.setItem('tourGuideCurrentScreen','menu');
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
