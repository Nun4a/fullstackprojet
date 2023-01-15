import { identifierName } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.css']
})
export class WaitingComponent implements OnInit, OnDestroy  {

  progressbarValue = 100;
  tempsInitial: number = 0;
  private sub: any;
  finishedTimer: boolean = false;
  tempsRestant: number = 0;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
    ) { }
  
  ngOnInit(): void {
    console.log('waiting');
    this.sub = this.route.params.subscribe(params => {
      this.tempsInitial = +params['temps'];
    });
    if(this.tempsInitial === 0) {
      this.finishedTimer = true;
    }
    this.startTimer();
  }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
    
  }

  startTimer() {
    const tempsInitial = this.tempsInitial;
    this.tempsRestant = this.tempsInitial;
    const timer$ = interval(1000);

    const sub = timer$.subscribe((sec) => {
      sec = sec+1;
      this.progressbarValue = 100 - sec * 100 / tempsInitial;

      this.tempsRestant = tempsInitial - sec;
      if (sec === tempsInitial) {
        sub.unsubscribe();
        this.finishedTimer = true;
      }
    });
  }

  backToHome() {
    this.router.navigate(['/home']);
  }

}
