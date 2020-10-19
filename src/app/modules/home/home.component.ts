import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    const content = document.querySelector('.container-fuild');
    const scroll$ = fromEvent(content, 'scroll').pipe(
      map(() => content)
    );

    scroll$.subscribe(element => {
      console.log('Element: ', element);
    });
  }

}
