import { Component, OnInit } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';//paso3

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private scrollToService: ScrollToService) {} //paso4

  ngOnInit(): void {
    
  }
  Acerca(id){
    const config: ScrollToConfigOptions = {
      target: id,
      easing: 'easeOutElastic',
      duration: 650
    }

    this.scrollToService.scrollTo(config)
  }

}
